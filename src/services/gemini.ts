import { GoogleGenAI } from '@google/genai';
import { Question } from '../types';

export interface AIModelConfig {
  id: string;
  name: string;
  badge: string;
  description: string;
}

export const AI_MODELS: AIModelConfig[] = [
  {
    id: 'gemini-3-flash-preview',
    name: 'Gemini 3 Flash (Khuyên Dùng)',
    badge: 'Mặc định • Tốc độ cao',
    description: 'Tối ưu cho phản hồi nhanh, giải toán THPT và mẹo Casio tức thì.'
  },
  {
    id: 'gemini-3-pro-preview',
    name: 'Gemini 3 Pro',
    badge: 'Suy luận sâu',
    description: 'Mạnh mẽ trong việc phân tích các bài toán vận dụng cao và tối ưu hóa.'
  },
  {
    id: 'gemini-2.5-flash',
    name: 'Gemini 2.5 Flash',
    badge: 'Dự phòng ổn định',
    description: 'Model dự phòng tin cậy khi các model preview đạt ngưỡng hạn ngạch.'
  }
];

const FALLBACK_CHAIN = [
  'gemini-3-flash-preview',
  'gemini-3-pro-preview',
  'gemini-2.5-flash'
];

export const getStoredApiKey = (): string => {
  try {
    return localStorage.getItem('gemini_api_key') || '';
  } catch {
    return '';
  }
};

export const setStoredApiKey = (key: string): void => {
  try {
    localStorage.setItem('gemini_api_key', key.trim());
  } catch {
    // ignore
  }
};

export const getStoredModel = (): string => {
  try {
    return localStorage.getItem('gemini_selected_model') || 'gemini-3-flash-preview';
  } catch {
    return 'gemini-3-flash-preview';
  }
};

export const setStoredModel = (modelId: string): void => {
  try {
    localStorage.setItem('gemini_selected_model', modelId);
  } catch {
    // ignore
  }
};

interface CallAIOptions {
  prompt: string;
  systemInstruction?: string;
  onModelAttempt?: (modelName: string) => void;
}

/**
 * Gọi Gemini API với cơ chế tự động thử lại (Retry) và Fallback tuần tự theo AI_INSTRUCTIONS.md
 */
export async function callGeminiWithFallback(options: CallAIOptions): Promise<{ text: string; modelUsed: string }> {
  const apiKey = getStoredApiKey();
  if (!apiKey) {
    throw new Error('NO_API_KEY');
  }

  const preferredModel = getStoredModel();
  // Sắp xếp danh sách fallback bắt đầu từ model được người dùng chọn
  const candidateModels = [
    preferredModel,
    ...FALLBACK_CHAIN.filter((m) => m !== preferredModel)
  ];

  let lastError: unknown = null;

  for (const modelId of candidateModels) {
    try {
      if (options.onModelAttempt) {
        options.onModelAttempt(modelId);
      }

      const ai = new GoogleGenAI({ apiKey });
      const response = await ai.models.generateContent({
        model: modelId,
        contents: options.prompt,
        config: {
          systemInstruction: options.systemInstruction || 'Bạn là trợ lý AI Gia Sư Môn Toán THPT chuẩn sách Kết Nối Tri Thức. Bạn giải thích chi tiết, sư phạm, kèm công thức LaTeX ($...$, $$...$$), chỉ ra các bẫy thường gặp và hướng dẫn mẹo máy tính Casio fx-580VN X / 880BTG khi phù hợp.'
        }
      });

      const responseText = response.text();
      if (responseText) {
        return { text: responseText, modelUsed: modelId };
      }
    } catch (err: unknown) {
      console.warn(`Model ${modelId} thất bại:`, err);
      lastError = err;
      // Tiếp tục thử với model tiếp theo trong chuỗi fallback
    }
  }

  // Nếu tất cả model đều thất bại -> Báo lỗi chi tiết theo AI_INSTRUCTIONS.md
  const errMsg = lastError instanceof Error ? lastError.message : String(lastError);
  throw new Error(`Tất cả các model AI đều thất bại: ${errMsg}`);
}

/**
 * Nhờ AI giải thích chi tiết câu hỏi toán học
 */
export async function askAIExplainQuestion(
  q: Question,
  userAnswer?: string,
  onModelAttempt?: (modelName: string) => void
): Promise<{ text: string; modelUsed: string }> {
  let questionDetails = `ĐỀ BÀI: ${q.content}\n`;
  if (q.format === 'multiple_choice_4' && q.options) {
    questionDetails += 'CÁC LỰA CHỌN:\n';
    q.options.forEach((opt) => {
      questionDetails += `- [${opt.id}] ${opt.text}\n`;
    });
    questionDetails += `ĐÁP ÁN ĐÚNG: ${q.correctAnswer}\n`;
    if (userAnswer) {
      questionDetails += `HỌC SINH ĐÃ CHỌN: ${userAnswer} (${userAnswer === q.correctAnswer ? 'Đúng' : 'Chưa đúng'})\n`;
    }
  } else if (q.format === 'true_false_4' && q.subQuestions) {
    questionDetails += 'CÁC MỆNH ĐỀ:\n';
    q.subQuestions.forEach((sub) => {
      questionDetails += `- [${sub.id}] ${sub.statement} (Đáp án: ${sub.isCorrect ? 'ĐÚNG' : 'SAI'})\n`;
    });
  } else if (q.format === 'short_answer') {
    questionDetails += `ĐÁP ÁN ĐÚNG: ${q.correctAnswer}\n`;
    if (userAnswer) {
      questionDetails += `HỌC SINH ĐÃ TRẢ LỜI: ${userAnswer}\n`;
    }
  }

  if (q.solution) {
    questionDetails += `HƯỚNG DẪN GIẢI HIỆN CÓ: ${q.solution}\n`;
  }

  const prompt = `
Dưới đây là một câu hỏi môn Toán THPT theo chương trình Kết Nối Tri Thức:
${questionDetails}

Hãy đóng vai Thầy/Cô giáo dạy Toán ôn thi tốt nghiệp THPT, phân tích giúp học sinh:
1. **Phương pháp tư duy & Lời giải chi tiết**: Trình bày từng bước mạch lạc, dùng chuẩn công thức LaTeX ($...$ hoặc $$...$$) đặc biệt là vectơ (\\overrightarrow{AB}, \\vec{a}), bảng biến thiên nếu có.
2. **Cảnh báo lỗi sai / Bẫy đề thi**: Học sinh thường mắc sai lầm gì ở bài này?
3. **Mẹo Casio (nếu có)**: Hướng dẫn bấm máy tính Casio fx-580VN X hoặc fx-880BTG để kiểm tra nhanh.
4. **Lời khuyên ôn tập**: Khắc sâu kiến thức trọng tâm của dạng toán này.
`;

  return callGeminiWithFallback({
    prompt,
    onModelAttempt
  });
}

/**
 * Nhờ AI tạo một câu hỏi toán học tương tự cùng dạng
 */
export async function askAIGenerateSimilarQuestion(
  q: Question,
  onModelAttempt?: (modelName: string) => void
): Promise<{ text: string; modelUsed: string }> {
  const prompt = `
Hãy tạo 1 câu hỏi môn Toán THPT TƯƠNG TỰ VÀ CÙNG DẠNG với câu hỏi sau nhưng thay đổi số liệu, tình huống:
ĐỀ BÀI GỐC: ${q.content}
DẠNG: ${q.format} (Mức độ: ${q.difficulty})

Yêu cầu xuất ra cấu trúc rõ ràng:
- **Đề bài tương tự**: (dùng LaTeX $...$ cho công thức)
- **Các phương án** (nếu là trắc nghiệm) hoặc **Các mệnh đề Đúng/Sai**
- **Đáp án chính xác**
- **Lời giải tóm tắt**
`;

  return callGeminiWithFallback({
    prompt,
    onModelAttempt
  });
}
