import { Chapter, GradeNumber } from '../types';

export const CURRICULUM_DATA: Record<GradeNumber, { title: string; subtitle: string; chapters: Chapter[] }> = {
  10: {
    title: 'Toán Lớp 10 - Kết Nối Tri Thức',
    subtitle: 'Nền tảng Đại số, Hình học phẳng Oxy, Thống kê và Tổ hợp',
    chapters: [
      {
        id: '10_ch2',
        grade: 10,
        name: 'Chương II: Bất phương trình & Hệ bất phương trình bậc nhất hai ẩn',
        theory: `
          <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div class="bg-indigo-950/40 p-3.5 rounded-xl border border-indigo-700/50">
              <div class="font-bold text-amber-300 mb-1">1. Miền nghiệm bất phương trình:</div>
              <p class="text-xs text-indigo-100 leading-relaxed">Bất phương trình $ax + by + c \\le 0$ có bờ là đường thẳng $d: ax + by + c = 0$. Điểm $O(0;0)$ thường được dùng làm điểm thử nếu $c \\ne 0$. Nếu tọa độ thỏa mãn thì nửa mặt phẳng chứa $O$ là miền nghiệm.</p>
            </div>
            <div class="bg-indigo-950/40 p-3.5 rounded-xl border border-indigo-700/50">
              <div class="font-bold text-amber-300 mb-1">2. Bài toán quy hoạch tuyến tính:</div>
              <p class="text-xs text-indigo-100 leading-relaxed">Giá trị lớn nhất hoặc nhỏ nhất của biểu thức mục tiêu $F(x,y) = ax + by$ trên miền đa giác nghiệm lồi luôn đạt tại một trong các đỉnh của đa giác đó.</p>
            </div>
          </div>
        `,
        questions: [
          {
            id: 'q10_1',
            grade: 10,
            chapterId: '10_ch2',
            format: 'multiple_choice_4',
            difficulty: 'Nhận biết',
            content: 'Cặp số nào sau đây là một nghiệm của bất phương trình $2x - 3y + 1 > 0$?',
            options: [
              { id: 'A', text: '$(1; 2)$' },
              { id: 'B', text: '$(2; 1)$' },
              { id: 'C', text: '$(0; 1)$' },
              { id: 'D', text: '$(-1; 1)$' }
            ],
            correctAnswer: 'B',
            hints: [
              'Thay trực tiếp tọa độ $(x; y)$ của từng phương án vào vế trái $2x - 3y + 1$.',
              'Với cặp $(2; 1)$, ta có $2(2) - 3(1) + 1 = 4 - 3 + 1 = 2 > 0$ (thỏa mãn).'
            ],
            solution: 'Thay $(x=2, y=1)$ vào vế trái: $2(2) - 3(1) + 1 = 2 > 0$. Vậy $(2; 1)$ là nghiệm của bất phương trình.'
          },
          {
            id: 'q10_2',
            grade: 10,
            chapterId: '10_ch2',
            format: 'short_answer',
            difficulty: 'Vận dụng',
            content: 'Một xưởng sản xuất 2 loại sản phẩm I và II. Mỗi kg sản phẩm I lãi 30 nghìn đồng, mỗi kg sản phẩm II lãi 40 nghìn đồng. Biết miền nghiệm biểu diễn số lượng $x, y$ (kg) là tứ giác có 4 đỉnh $O(0;0), A(0;4), B(3;3), C(4;0)$. Lợi nhuận lớn nhất mà xưởng có thể đạt được là bao nhiêu nghìn đồng?',
            correctAnswer: '210',
            hints: [
              'Hàm mục tiêu lợi nhuận là $F(x, y) = 30x + 40y$.',
              'Tính giá trị của $F$ tại 4 đỉnh: $O(0;0), A(0;4), B(3;3), C(4;0)$.'
            ],
            solution: 'Tính giá trị $F(x, y) = 30x + 40y$ tại các đỉnh: $F(O) = 0$, $F(A) = 30(0)+40(4) = 160$, $F(B) = 30(3)+40(3) = 90+120 = 210$, $F(C) = 30(4)+40(0) = 120$. Do đó lợi nhuận lớn nhất là 210 nghìn đồng tại đỉnh $B(3;3)$.'
          },
          {
            id: 'q10_2b',
            grade: 10,
            chapterId: '10_ch2',
            format: 'true_false_4',
            difficulty: 'Thông hiểu',
            content: 'Cho hệ bất phương trình bậc nhất hai ẩn: $\\begin{cases} x + y \\le 4 \\\\ x \\ge 0 \\\\ y \\ge 0 \\end{cases}$. Xét tính Đúng / Sai của các mệnh đề sau:',
            subQuestions: [
              { id: 'a', statement: 'Miền nghiệm của hệ là một tam giác vuông.', isCorrect: true },
              { id: 'b', statement: 'Điểm $M(2; 3)$ thuộc miền nghiệm của hệ.', isCorrect: false },
              { id: 'c', statement: 'Điểm $O(0; 0)$ là một đỉnh của miền nghiệm.', isCorrect: true },
              { id: 'd', statement: 'Diện tích của miền nghiệm bằng 8 đơn vị diện tích.', isCorrect: true }
            ],
            hints: [
              'Miền nghiệm giới hạn bởi 2 trục tọa độ và đường thẳng $x + y = 4$.',
              'Tam giác có 3 đỉnh là $(0;0), (4;0), (0;4)$. Diện tích bằng $\\frac{1}{2} \\times 4 \\times 4 = 8$.'
            ],
            solution: 'Ý a Đúng vì các trục tọa độ vuông góc nhau tạo thành tam giác vuông tại $O$. Ý b Sai vì $2 + 3 = 5 > 4$. Ý c Đúng vì $O(0;0)$ thỏa mãn cả 3 bất phương trình. Ý d Đúng vì diện tích $S = \\frac{1}{2} \\cdot 4 \\cdot 4 = 8$.'
          }
        ]
      },
      {
        id: '10_ch4',
        grade: 10,
        name: 'Chương IV: Vectơ & Các phép toán vectơ trong mặt phẳng',
        theory: `
          <div class="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
            <div class="bg-indigo-950/40 p-3.5 rounded-xl border border-indigo-700/50">
              <div class="font-bold text-amber-300 mb-1">1. Các quy tắc vectơ cơ bản:</div>
              <p class="text-indigo-100 leading-relaxed">• <b>Quy tắc 3 điểm:</b> $\\overrightarrow{AB} + \\overrightarrow{BC} = \\overrightarrow{AC}$; $\\overrightarrow{AB} = \\overrightarrow{OB} - \\overrightarrow{OA}$.</p>
              <p class="text-indigo-100 leading-relaxed">• <b>Quy tắc hình bình hành:</b> Nếu $ABCD$ là hình bình hành thì $\\overrightarrow{AB} + \\overrightarrow{AD} = \\overrightarrow{AC}$.</p>
              <p class="text-indigo-100 leading-relaxed">• <b>Trung điểm & Trọng tâm:</b> $I$ là trung điểm $AB \\Leftrightarrow \\overrightarrow{IA} + \\overrightarrow{IB} = \\vec{0}$; Với $M$ bất kỳ: $\\overrightarrow{MA} + \\overrightarrow{MB} = 2\\overrightarrow{MI}$. Với trọng tâm $G$: $\\overrightarrow{GA} + \\overrightarrow{GB} + \\overrightarrow{GC} = \\vec{0}$.</p>
            </div>
            <div class="bg-indigo-950/40 p-3.5 rounded-xl border border-indigo-700/50">
              <div class="font-bold text-amber-300 mb-1">2. Tích vô hướng của hai vectơ:</div>
              <p class="text-indigo-100 leading-relaxed">• Định nghĩa: $\\vec{a} \\cdot \\vec{b} = |\\vec{a}| \\cdot |\\vec{b}| \\cdot \\cos(\\vec{a}, \\vec{b})$.</p>
              <p class="text-indigo-100 leading-relaxed">• Biểu thức tọa độ trong $Oxy$: Nếu $\\vec{a} = (x_1; y_1)$ và $\\vec{b} = (x_2; y_2)$ thì: $$\\vec{a} \\cdot \\vec{b} = x_1 x_2 + y_1 y_2$$</p>
              <p class="text-indigo-100 leading-relaxed">• Hai vectơ vuông góc: $\\vec{a} \\perp \\vec{b} \\Leftrightarrow \\vec{a} \\cdot \\vec{b} = 0 \\Leftrightarrow x_1 x_2 + y_1 y_2 = 0$.</p>
            </div>
          </div>
        `,
        questions: [
          {
            id: 'q10_vec_1',
            grade: 10,
            chapterId: '10_ch4',
            format: 'multiple_choice_4',
            difficulty: 'Nhận biết',
            content: 'Cho hình vuông $ABCD$ cạnh $a$. Độ dài của vectơ $\\overrightarrow{AB} + \\overrightarrow{AD}$ bằng:',
            options: [
              { id: 'A', text: '$a\\sqrt{2}$' },
              { id: 'B', text: '$2a$' },
              { id: 'C', text: '$a$' },
              { id: 'D', text: '$\\frac{a\\sqrt{2}}{2}$' }
            ],
            correctAnswer: 'A',
            hints: [
              'Áp dụng quy tắc hình bình hành cho hình vuông $ABCD$: $\\overrightarrow{AB} + \\overrightarrow{AD} = \\overrightarrow{AC}$.',
              'Độ dài đường chéo hình vuông cạnh $a$ là $AC = a\\sqrt{2}$.'
            ],
            solution: 'Theo quy tắc hình bình hành, ta có $\\overrightarrow{AB} + \\overrightarrow{AD} = \\overrightarrow{AC}$. Suy ra $|\\overrightarrow{AB} + \\overrightarrow{AD}| = |\\overrightarrow{AC}| = AC = a\\sqrt{2}$.'
          },
          {
            id: 'q10_vec_2',
            grade: 10,
            chapterId: '10_ch4',
            format: 'true_false_4',
            difficulty: 'Thông hiểu',
            content: 'Trong mặt phẳng tọa độ $Oxy$, cho hai vectơ $\\vec{u} = (2; -3)$ và $\\vec{v} = (3; 2)$. Xét tính Đúng / Sai của các khẳng định sau:',
            subQuestions: [
              { id: 'a', statement: 'Tọa độ vectơ tổng $\\vec{u} + \\vec{v} = (5; -1)$.', isCorrect: true },
              { id: 'b', statement: 'Độ dài vectơ $\\vec{u}$ là $|\\vec{u}| = \\sqrt{13}$.', isCorrect: true },
              { id: 'c', statement: 'Tích vô hướng $\\vec{u} \\cdot \\vec{v} = 12$.', isCorrect: false },
              { id: 'd', statement: 'Hai vectơ $\\vec{u}$ và $\\vec{v}$ vuông góc với nhau.', isCorrect: true }
            ],
            hints: [
              'Tính $\\vec{u} \\cdot \\vec{v} = 2(3) + (-3)(2) = 6 - 6 = 0$.',
              'Do tích vô hướng bằng 0 nên hai vectơ vuông góc nhau.'
            ],
            solution: 'Ý a Đúng vì $(2+3; -3+2) = (5; -1)$. Ý b Đúng vì $|\\vec{u}| = \\sqrt{2^2 + (-3)^2} = \\sqrt{13}$. Ý c Sai và Ý d Đúng vì $\\vec{u} \\cdot \\vec{v} = 2(3) + (-3)(2) = 0$, chứng tỏ $\\vec{u} \\perp \\vec{v}$.'
          },
          {
            id: 'q10_vec_3',
            grade: 10,
            chapterId: '10_ch4',
            format: 'short_answer',
            difficulty: 'Vận dụng',
            content: 'Cho tam giác đều $ABC$ cạnh bằng $6$. Tính tích vô hướng $\\overrightarrow{AB} \\cdot \\overrightarrow{AC}$.',
            correctAnswer: '18',
            hints: [
              'Tam giác đều $ABC$ có góc $\\widehat{BAC} = 60^\\circ$.',
              'Công thức: $\\overrightarrow{AB} \\cdot \\overrightarrow{AC} = |\\overrightarrow{AB}| \\cdot |\\overrightarrow{AC}| \\cdot \\cos(\\widehat{BAC})$.',
              'Thay số: $6 \\times 6 \\times \\cos(60^\\circ) = 36 \\times 0,5 = 18$.'
            ],
            solution: 'Góc giữa $\\overrightarrow{AB}$ và $\\overrightarrow{AC}$ là góc $\\widehat{A} = 60^\\circ$. Do đó: $\\overrightarrow{AB} \\cdot \\overrightarrow{AC} = AB \\cdot AC \\cdot \\cos 60^\\circ = 6 \\times 6 \\times \\frac{1}{2} = 18$.'
          }
        ]
      },
      {
        id: '10_ch7',
        grade: 10,
        name: 'Chương VII: Phương pháp tọa độ trong mặt phẳng Oxy & Ba đường Conic',
        theory: `
          <div class="space-y-2 text-xs">
            <p>• <b>Phương trình tổng quát đường thẳng:</b> $\\Delta: ax + by + c = 0$ ($a^2+b^2 \\ne 0$). Khoảng cách từ điểm $M(x_0; y_0)$ đến $\\Delta$: $$d(M, \\Delta) = \\frac{|ax_0+by_0+c|}{\\sqrt{a^2+b^2}}$$</p>
            <p>• <b>Phương trình đường tròn:</b> $(x - a)^2 + (y - b)^2 = R^2$ tâm $I(a; b)$, bán kính $R$.</p>
            <p>• <b>Phương trình chính tắc Elip:</b> $\\frac{x^2}{a^2} + \\frac{y^2}{b^2} = 1$ ($a > b > 0$, $a^2 = b^2 + c^2$), tiêu cự $2c$, tâm sai $e = \\frac{c}{a} < 1$.</p>
          </div>
        `,
        questions: [
          {
            id: 'q10_3',
            grade: 10,
            chapterId: '10_ch7',
            format: 'multiple_choice_4',
            difficulty: 'Thông hiểu',
            content: 'Khoảng cách từ điểm $M(1; -2)$ đến đường thẳng $\\Delta: 3x - 4y + 4 = 0$ bằng:',
            options: [
              { id: 'A', text: '3' },
              { id: 'B', text: '5' },
              { id: 'C', text: '15' },
              { id: 'D', text: '2' }
            ],
            correctAnswer: 'A',
            hints: [
              'Áp dụng công thức khoảng cách $d(M, \\Delta) = \\frac{|3x_0 - 4y_0 + 4|}{\\sqrt{3^2 + (-4)^2}}$.',
              'Thay số: Tử số là $|3(1) - 4(-2) + 4| = |3 + 8 + 4| = 15$. Mẫu số là $\\sqrt{9+16} = 5$.'
            ],
            solution: '$d(M, \\Delta) = \\frac{|3(1) - 4(-2) + 4|}{\\sqrt{3^2 + (-4)^2}} = \\frac{15}{5} = 3$.'
          },
          {
            id: 'q10_4',
            grade: 10,
            chapterId: '10_ch7',
            format: 'short_answer',
            difficulty: 'Vận dụng',
            content: 'Cho Elip $(E)$ có phương trình chính tắc $\\frac{x^2}{25} + \\frac{y^2}{9} = 1$. Độ dài tiêu cự $2c$ của elip bằng bao nhiêu?',
            correctAnswer: '8',
            hints: [
              'Từ phương trình ta có $a^2 = 25$ và $b^2 = 9$.',
              'Hệ thức cơ bản elip: $c^2 = a^2 - b^2 \\Rightarrow c = \\sqrt{25 - 9} = 4$. Tiêu cự là $2c$.'
            ],
            solution: 'Ta có $a^2 = 25, b^2 = 9 \\Rightarrow c^2 = a^2 - b^2 = 16 \\Rightarrow c = 4$. Vậy tiêu cự của elip là $2c = 2 \\times 4 = 8$.'
          }
        ]
      }
    ]
  },
  11: {
    title: 'Toán Lớp 11 - Kết Nối Tri Thức',
    subtitle: 'Trọng tâm Mẫu số liệu ghép nhóm, Cấp số cộng/nhân, Đạo hàm và Lượng giác',
    chapters: [
      {
        id: '11_ch3',
        grade: 11,
        name: 'Chương III: Các số đặc trưng đo xu thế trung tâm của mẫu số liệu ghép nhóm',
        theory: `
          <div class="grid grid-cols-1 md:grid-cols-3 gap-3 text-xs">
            <div class="bg-indigo-950/40 p-3 rounded-xl border border-indigo-700/50">
              <div class="font-bold text-amber-300">1. Số trung bình $\\bar{x}$:</div>
              <p>$$\\bar{x} = \\frac{\\sum m_i c_i}{n}$$</p>
              <p class="text-[11px] text-indigo-200">với $c_i = \\frac{a_i + a_{i+1}}{2}$ là giá trị đại diện của nhóm.</p>
            </div>
            <div class="bg-indigo-950/40 p-3 rounded-xl border border-indigo-700/50">
              <div class="font-bold text-amber-300">2. Trung vị $M_e$:</div>
              <p>$$M_e = a_p + \\frac{\\frac{n}{2} - C}{m_p} \\cdot h$$</p>
              <p class="text-[11px] text-indigo-200">Nhóm $[a_p; a_{p+1})$ đầu tiên có tần số tích lũy $cf_p \\ge \\frac{n}{2}$, $C = cf_{p-1}$.</p>
            </div>
            <div class="bg-indigo-950/40 p-3 rounded-xl border border-indigo-700/50">
              <div class="font-bold text-amber-300">3. Mốt $M_o$:</div>
              <p>$$M_o = a_j + \\frac{m_j - m_{j-1}}{(m_j - m_{j-1}) + (m_j - m_{j+1})} \\cdot h$$</p>
              <p class="text-[11px] text-indigo-200">Nhóm $[a_j; a_{j+1})$ có tần số $m_j$ lớn nhất trong bảng.</p>
            </div>
          </div>
        `,
        questions: [
          {
            id: 'q11_1',
            grade: 11,
            chapterId: '11_ch3',
            format: 'multiple_choice_4',
            difficulty: 'Nhận biết',
            content: "Khảo sát thời gian tự học môn Toán ở nhà của 50 học sinh lớp 11 được cho bởi bảng sau:<br><div class='overflow-x-auto my-2'><table class='w-full border border-slate-300 text-center text-xs'><thead><tr><td class='border p-1.5 bg-slate-100 font-bold'>Thời gian (h)</td><td class='border p-1.5'>[0; 4)</td><td class='border p-1.5'>[4; 8)</td><td class='border p-1.5'>[8; 12)</td><td class='border p-1.5'>[12; 16)</td><td class='border p-1.5'>[16; 20)</td></tr></thead><tbody><tr><td class='border p-1.5 bg-slate-100 font-bold'>Số HS (m)</td><td class='border p-1.5'>4</td><td class='border p-1.5'>12</td><td class='border p-1.5'>18</td><td class='border p-1.5'>11</td><td class='border p-1.5'>5</td></tr></tbody></table></div>Nhóm chứa trung vị là:",
            options: [
              { id: 'A', text: '$[4; 8)$' },
              { id: 'B', text: '$[8; 12)$' },
              { id: 'C', text: '$[12; 16)$' },
              { id: 'D', text: '$[16; 20)$' }
            ],
            correctAnswer: 'B',
            hints: [
              'Tính vị trí trung tâm: $\\frac{n}{2} = \\frac{50}{2} = 25$.',
              'Lập bảng tần số tích lũy: $cf_1 = 4$, $cf_2 = 16$, $cf_3 = 34$. Nhóm đầu tiên có $cf \\ge 25$ là $[8; 12)$.'
            ],
            solution: 'Cỡ mẫu $n = 50 \\Rightarrow \\frac{n}{2} = 25$. Tần số tích lũy: nhóm 1 là 4; nhóm 2 là $4+12=16 < 25$; nhóm 3 là $16+18=34 \\ge 25$. Vậy nhóm chứa trung vị là $[8; 12)$.'
          },
          {
            id: 'q11_2',
            grade: 11,
            chapterId: '11_ch3',
            format: 'true_false_4',
            difficulty: 'Vận dụng',
            content: 'Đối với mẫu số liệu 50 học sinh ở bài toán trên, xét tính Đúng / Sai của các khẳng định sau:',
            subQuestions: [
              { id: 'a', statement: 'Nhóm chứa mốt là nhóm $[8; 12)$.', isCorrect: true },
              { id: 'b', statement: 'Mốt của mẫu số liệu trên xấp xỉ bằng $9,85$ giờ.', isCorrect: true },
              { id: 'c', statement: 'Trung vị của mẫu số liệu trên bằng $10,0$ giờ.', isCorrect: true },
              { id: 'd', statement: 'Tứ phân vị thứ nhất $Q_1$ của mẫu số liệu bằng $8,0$ giờ.', isCorrect: false }
            ],
            hints: [
              'Nhóm mốt có tần số $18$ lớn nhất $\\Rightarrow [8; 12)$.',
              'Tính $M_o = 8 + \\frac{18-12}{(18-12)+(18-11)} \\cdot 4 = 8 + \\frac{24}{13} \\approx 9,85$.',
              'Tính $Q_1$: $\\frac{n}{4} = 12,5 \\Rightarrow Q_1 = 4 + \\frac{12,5-4}{12} \\cdot 4 = 6,83 \\ne 8,0$.'
            ],
            solution: 'Ý a: Đúng vì $m_3=18$ lớn nhất. Ý b: Đúng vì $M_o = 8 + \\frac{6}{6+7}\\cdot 4 \\approx 9,85$. Ý c: Đúng vì $M_e = 8 + \\frac{25-16}{18}\\cdot 4 = 10,0$. Ý d: Sai vì $Q_1 = 4 + \\frac{12,5-4}{12}\\cdot 4 \\approx 6,83$.'
          },
          {
            id: 'q11_3',
            grade: 11,
            chapterId: '11_ch3',
            format: 'short_answer',
            difficulty: 'Vận dụng cao',
            content: 'Tính giá trị tứ phân vị thứ ba $Q_3$ của mẫu số liệu 50 học sinh trên (làm tròn kết quả đến hàng phần trăm, ví dụ 13.27).',
            correctAnswer: '13.27',
            hints: [
              'Tính vị trí: $\\frac{3n}{4} = \\frac{3 \\cdot 50}{4} = 37,5$.',
              'Nhóm chứa $Q_3$ là $[12; 16)$ với $a_p = 12, h = 4, m_p = 11, C = 34$.',
              'Áp dụng công thức $Q_3 = 12 + \\frac{37,5 - 34}{11} \\cdot 4$.'
            ],
            solution: 'Ta có $\\frac{3n}{4} = 37,5$. Tần số tích lũy: $cf_3 = 34 < 37,5$ và $cf_4 = 45 \\ge 37,5$. Nhóm chứa $Q_3$ là $[12; 16)$. Do đó: $Q_3 = 12 + \\frac{37,5 - 34}{11} \\cdot 4 = 12 + \\frac{14}{11} \\approx 13,27$.'
          }
        ]
      },
      {
        id: '11_ch2',
        grade: 11,
        name: 'Chương II: Dãy số, Cấp số cộng & Cấp số nhân',
        theory: `
          <div class="text-xs space-y-2">
            <p>• <b>Cấp số cộng $(u_n)$:</b> $u_n = u_1 + (n-1)d$; Tổng $n$ số hạng: $S_n = \\frac{n(u_1+u_n)}{2} = \\frac{n[2u_1 + (n-1)d]}{2}$.</p>
            <p>• <b>Cấp số nhân $(u_n)$:</b> $u_n = u_1 \\cdot q^{n-1}$; Tổng $n$ số hạng ($q \\ne 1$): $S_n = \\frac{u_1(1-q^n)}{1-q}$.</p>
            <p>• <b>Ứng dụng lãi kép ngân hàng:</b> $A_n = A_0(1+r)^n$.</p>
          </div>
        `,
        questions: [
          {
            id: 'q11_4',
            grade: 11,
            chapterId: '11_ch2',
            format: 'multiple_choice_4',
            difficulty: 'Thông hiểu',
            content: 'Cho cấp số cộng $(u_n)$ có số hạng đầu $u_1 = 3$ và công sai $d = 4$. Số hạng thứ 10 của cấp số cộng bằng:',
            options: [
              { id: 'A', text: '39' },
              { id: 'B', text: '43' },
              { id: 'C', text: '36' },
              { id: 'D', text: '40' }
            ],
            correctAnswer: 'A',
            hints: [
              'Sử dụng công thức số hạng tổng quát $u_n = u_1 + (n-1)d$.',
              'Thay $n=10$: $u_{10} = 3 + (10 - 1) \\times 4 = 3 + 36$.'
            ],
            solution: '$u_{10} = 3 + (10 - 1) \\cdot 4 = 3 + 36 = 39$.'
          },
          {
            id: 'q11_5',
            grade: 11,
            chapterId: '11_ch2',
            format: 'short_answer',
            difficulty: 'Vận dụng',
            content: 'Một người gửi tiết kiệm 100 triệu đồng vào ngân hàng với lãi suất $6\\%/\\text{năm}$, tiền lãi hàng năm được nhập vào vốn (lãi kép). Sau 5 năm, số tiền cả gốc lẫn lãi người đó nhận được là bao nhiêu triệu đồng (làm tròn đến hàng đơn vị)?',
            correctAnswer: '134',
            hints: [
              'Áp dụng công thức lãi kép $A = A_0(1 + r)^n$.',
              'Tính $A = 100 \\times (1 + 0,06)^5 = 100 \\times 1,3382255...$'
            ],
            solution: 'Số tiền sau 5 năm là $A = 100(1 + 0,06)^5 \\approx 133,82$ triệu đồng. Làm tròn đến hàng đơn vị ta được 134 triệu đồng.'
          }
        ]
      }
    ]
  },
  12: {
    title: 'Toán Lớp 12 - Kết Nối Tri Thức',
    subtitle: 'Trọng tâm Kỳ thi Tốt nghiệp THPT: Khảo sát hàm số, Oxyz, Tích phân & Xác suất Bayes',
    chapters: [
      {
        id: '12_ch1',
        grade: 12,
        name: 'Chương I: Ứng dụng đạo hàm để khảo sát hàm số & Tối ưu hóa thực tế',
        theory: `
          <div class="text-xs space-y-2">
            <p>• <b>Khảo sát hàm phân thức hữu tỉ:</b> $y = \\frac{ax+b}{cx+d}$ có tiệm cận đứng $x = -\\frac{d}{c}$, tiệm cận ngang $y = \\frac{a}{c}$. Đạo hàm $y\' = \\frac{ad - bc}{(cx+d)^2}$.</p>
            <p>• <b>Tiệm cận xiên:</b> Đồ thị $y = f(x)$ có tiệm cận xiên $y = ax+b$ khi $\\lim_{x \\to \\pm\\infty} [f(x) - (ax+b)] = 0$.</p>
            <p>• <b>Quy trình tối ưu hóa:</b> Đặt ẩn biến thực tế $\\rightarrow$ Thiết lập hàm mục tiêu $f(x)$ $\\rightarrow$ Khảo sát đạo hàm $\\rightarrow$ Kết luận GTLN/GTNN.</p>
          </div>
        `,
        questions: [
          {
            id: 'q12_1',
            grade: 12,
            chapterId: '12_ch1',
            format: 'multiple_choice_4',
            difficulty: 'Nhận biết',
            content: 'Đường tiệm cận đứng của đồ thị hàm số $y = \\frac{2x - 1}{x + 3}$ là đường thẳng:',
            options: [
              { id: 'A', text: '$x = 2$' },
              { id: 'B', text: '$x = -3$' },
              { id: 'C', text: '$y = 2$' },
              { id: 'D', text: '$y = -3$' }
            ],
            correctAnswer: 'B',
            hints: [
              'Tiệm cận đứng của hàm phân thức bậc nhất trên bậc nhất là nghiệm của mẫu số.',
              'Giải phương trình $x + 3 = 0 \\Rightarrow x = -3$.'
            ],
            solution: 'Mẫu số triệt tiêu khi $x + 3 = 0 \\Leftrightarrow x = -3$. Do $\\lim_{x \\to -3^+} y = -\\infty$, đường thẳng $x = -3$ là tiệm cận đứng.'
          },
          {
            id: 'q12_2',
            grade: 12,
            chapterId: '12_ch1',
            format: 'short_answer',
            difficulty: 'Vận dụng',
            content: 'Một bác nông dân có 60 m lưới muốn rào một mảnh vườn hình chữ nhật sát một bờ tường thẳng (không cần rào phía bờ tường). Diện tích lớn nhất của mảnh vườn bác có thể rào được là bao nhiêu mét vuông?',
            correctAnswer: '450',
            hints: [
              'Gọi chiều rộng là $x$ (m). Chiều dài sẽ là $60 - 2x$ (m).',
              'Diện tích $S(x) = x(60 - 2x) = -2x^2 + 60x$. Tìm đỉnh parabol.'
            ],
            solution: 'Gọi 2 cạnh vuông góc với bờ tường là $x$ ($0 < x < 30$). Chiều dài cạnh song song bờ tường là $60 - 2x$. Diện tích là $S(x) = x(60 - 2x) = 60x - 2x^2$. Đạo hàm $S\'(x) = 60 - 4x = 0 \\Leftrightarrow x = 15$. Khi đó $S_{\\max} = 15(60 - 30) = 450 \\text{ m}^2$.'
          },
          {
            id: 'q12_bbt_1',
            grade: 12,
            chapterId: '12_ch1',
            format: 'true_false_4',
            difficulty: 'Vận dụng',
            content: 'Cho hàm số $y = f(x)$ xác định trên $\\mathbb{R} \\setminus \\{1\\}$ liên tục trên từng khoảng xác định và có bảng biến thiên như sau:<br><div class="my-2 p-3 bg-indigo-50/70 border border-indigo-200 rounded-xl text-xs font-mono text-center">x: -∞ -------- 0 -------- 1 -------- 2 -------- +∞<br>y\': --- + --- 0 --- - --- || --- - --- 0 --- + ---<br>y: -∞ ↗ 3 ↘ -∞ || +∞ ↘ -1 ↗ +∞</div>Xét tính Đúng / Sai của các khẳng định sau:',
            subQuestions: [
              { id: 'a', statement: 'Hàm số đồng biến trên các khoảng $(-\\infty; 0)$ và $(2; +\\infty)$.', isCorrect: true },
              { id: 'b', statement: 'Đường thẳng $x = 1$ là đường tiệm cận đứng của đồ thị hàm số.', isCorrect: true },
              { id: 'c', statement: 'Hàm số đạt cực tiểu tại điểm $x = -1$.', isCorrect: false },
              { id: 'd', statement: 'Giá trị cực đại của hàm số là $y_{\\text{CĐ}} = 3$.', isCorrect: true }
            ],
            hints: [
              'Quan sát dấu của $y\'$: mang dấu $+$ trên $(-\\infty; 0)$ và $(2; +\\infty)$.',
              'Tại $x = 1$, cả $y\'$ và $y$ đều không xác định với giới hạn vô cực $\\Rightarrow x = 1$ là tiệm cận đứng.',
              'Hàm số đạt cực tiểu tại $x = 2$, giá trị cực tiểu là $y = -1$.'
            ],
            solution: 'Ý a Đúng vì $y\' > 0$ trên $(-\\infty; 0)$ và $(2; +\\infty)$. Ý b Đúng vì $\\lim_{x \\to 1^-} y = -\\infty$ và $\\lim_{x \\to 1^+} y = +\\infty$. Ý c Sai vì hàm số đạt cực tiểu tại $x = 2$ chứ không phải $x = -1$. Ý d Đúng vì tại điểm cực đại $x = 0$, giá trị $y(0) = 3$.'
          }
        ]
      },
      {
        id: '12_ch2',
        grade: 12,
        name: 'Chương II: Vectơ & Tọa độ trong không gian Oxyz',
        theory: `
          <div class="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
            <div class="bg-indigo-950/40 p-3.5 rounded-xl border border-indigo-700/50">
              <div class="font-bold text-amber-300 mb-1">1. Tọa độ vectơ trong không gian Oxyz:</div>
              <p class="text-indigo-100 leading-relaxed">• $\\vec{u} = x\\vec{i} + y\\vec{j} + z\\vec{k} \\Leftrightarrow \\vec{u} = (x; y; z)$.</p>
              <p class="text-indigo-100 leading-relaxed">• Độ dài vectơ: $|\\vec{u}| = \\sqrt{x^2 + y^2 + z^2}$.</p>
              <p class="text-indigo-100 leading-relaxed">• Với hai điểm $A(x_A; y_A; z_A)$ và $B(x_B; y_B; z_B)$: $$\\overrightarrow{AB} = (x_B - x_A; y_B - y_A; z_B - z_A)$$ Độ dài khoảng cách: $AB = |\\overrightarrow{AB}| = \\sqrt{(x_B-x_A)^2 + (y_B-y_A)^2 + (z_B-z_A)^2}$.</p>
            </div>
            <div class="bg-indigo-950/40 p-3.5 rounded-xl border border-indigo-700/50">
              <div class="font-bold text-amber-300 mb-1">2. Tích vô hướng & Góc trong không gian:</div>
              <p class="text-indigo-100 leading-relaxed">• Cho $\\vec{u} = (x_1; y_1; z_1)$ và $\\vec{v} = (x_2; y_2; z_2)$:</p>
              <p class="text-indigo-100 leading-relaxed">$$\\vec{u} \\cdot \\vec{v} = x_1 x_2 + y_1 y_2 + z_1 z_2$$</p>
              <p class="text-indigo-100 leading-relaxed">• Góc giữa hai vectơ: $$\\cos(\\vec{u}, \\vec{v}) = \\frac{\\vec{u} \\cdot \\vec{v}}{|\\vec{u}| \\cdot |\\vec{v}|} = \\frac{x_1 x_2 + y_1 y_2 + z_1 z_2}{\\sqrt{x_1^2+y_1^2+z_1^2} \\cdot \\sqrt{x_2^2+y_2^2+z_2^2}}$$</p>
              <p class="text-indigo-100 leading-relaxed">• Điều kiện vuông góc: $\\vec{u} \\perp \\vec{v} \\Leftrightarrow \\vec{u} \\cdot \\vec{v} = 0$.</p>
            </div>
          </div>
        `,
        questions: [
          {
            id: 'q12_vec_1',
            grade: 12,
            chapterId: '12_ch2',
            format: 'multiple_choice_4',
            difficulty: 'Nhận biết',
            content: 'Trong không gian $Oxyz$, cho hai điểm $A(1; 2; -1)$ và $B(3; 0; 2)$. Tọa độ của vectơ $\\overrightarrow{AB}$ là:',
            options: [
              { id: 'A', text: '$(2; -2; 3)$' },
              { id: 'B', text: '$(4; 2; 1)$' },
              { id: 'C', text: '$(-2; 2; -3)$' },
              { id: 'D', text: '$(2; 2; 3)$' }
            ],
            correctAnswer: 'A',
            hints: [
              'Tọa độ $\\overrightarrow{AB} = (x_B - x_A; y_B - y_A; z_B - z_A)$.',
              'Thay số: $(3 - 1; 0 - 2; 2 - (-1)) = (2; -2; 3)$.'
            ],
            solution: 'Ta có $\\overrightarrow{AB} = (3 - 1; 0 - 2; 2 - (-1)) = (2; -2; 3)$.'
          },
          {
            id: 'q12_vec_2',
            grade: 12,
            chapterId: '12_ch2',
            format: 'true_false_4',
            difficulty: 'Thông hiểu',
            content: 'Trong không gian $Oxyz$, cho hai vectơ $\\vec{a} = (1; 0; -2)$ và $\\vec{b} = (2; 1; 1)$. Xét tính Đúng / Sai của các khẳng định sau:',
            subQuestions: [
              { id: 'a', statement: 'Độ dài vectơ $\\vec{a}$ bằng $|\\vec{a}| = \\sqrt{5}$.', isCorrect: true },
              { id: 'b', statement: 'Tích vô hướng $\\vec{a} \\cdot \\vec{b} = 0$.', isCorrect: true },
              { id: 'c', statement: 'Hai vectơ $\\vec{a}$ và $\\vec{b}$ cùng phương với nhau.', isCorrect: false },
              { id: 'd', statement: 'Góc giữa hai vectơ $\\vec{a}$ và $\\vec{b}$ bằng $90^\\circ$.', isCorrect: true }
            ],
            hints: [
              'Tính tích vô hướng: $\\vec{a} \\cdot \\vec{b} = 1(2) + 0(1) + (-2)(1) = 2 + 0 - 2 = 0$.',
              'Do tích vô hướng bằng 0 nên góc giữa chúng bằng 90 độ.'
            ],
            solution: 'Ý a Đúng vì $|\\vec{a}| = \\sqrt{1^2+0^2+(-2)^2} = \\sqrt{5}$. Ý b Đúng vì $\\vec{a}\\cdot\\vec{b} = 1(2) + 0(1) + (-2)(1) = 0$. Ý c Sai vì các tọa độ không tỉ lệ. Ý d Đúng vì $\\vec{a} \\cdot \\vec{b} = 0 \\Rightarrow \\vec{a} \\perp \\vec{b} \\Rightarrow (\\vec{a}, \\vec{b}) = 90^\\circ$.'
          },
          {
            id: 'q12_vec_3',
            grade: 12,
            chapterId: '12_ch2',
            format: 'short_answer',
            difficulty: 'Vận dụng',
            content: 'Trong không gian $Oxyz$, cho ba điểm $A(1; 1; 0), B(2; 3; 1)$ và $C(0; 2; 3)$. Tính độ dài của vectơ tổng $\\vec{u} = \\overrightarrow{AB} + \\overrightarrow{AC}$.',
            correctAnswer: '5',
            hints: [
              'Tính $\\overrightarrow{AB} = (2-1; 3-1; 1-0) = (1; 2; 1)$.',
              'Tính $\\overrightarrow{AC} = (0-1; 2-1; 3-0) = (-1; 1; 3)$.',
              'Vectơ tổng $\\vec{u} = \\overrightarrow{AB} + \\overrightarrow{AC} = (0; 3; 4)$.',
              'Độ dài $|\\vec{u}| = \\sqrt{0^2 + 3^2 + 4^2} = 5$.'
            ],
            solution: 'Ta có $\\overrightarrow{AB} = (1; 2; 1)$ và $\\overrightarrow{AC} = (-1; 1; 3)$. Suy ra $\\vec{u} = \\overrightarrow{AB} + \\overrightarrow{AC} = (1-1; 2+1; 1+3) = (0; 3; 4)$. Độ dài $|\\vec{u}| = \\sqrt{0^2 + 3^2 + 4^2} = \\sqrt{25} = 5$.'
          }
        ]
      },
      {
        id: '12_ch3',
        grade: 12,
        name: 'Chương III: Các số đặc trưng đo mức độ phân tán của mẫu số liệu ghép nhóm',
        theory: `
          <div class="text-xs space-y-2">
            <p>• <b>Khoảng biến thiên:</b> $R = x_{\\max} - x_{\\min}$.</p>
            <p>• <b>Khoảng tứ phân vị:</b> $\\Delta_Q = Q_3 - Q_1$.</p>
            <p>• <b>Phương sai mẫu ghép nhóm:</b> $$s^2 = \\frac{1}{n} \\sum_{i=1}^k m_i (c_i - \\bar{x})^2 = \\left( \\frac{1}{n} \\sum_{i=1}^k m_i c_i^2 \\right) - (\\bar{x})^2$$</p>
            <p>• <b>Độ lệch chuẩn:</b> $s = \\sqrt{s^2}$. Thước đo độ phân tán cùng đơn vị với biến số.</p>
          </div>
        `,
        questions: [
          {
            id: 'q12_disp_1',
            grade: 12,
            chapterId: '12_ch3',
            format: 'multiple_choice_4',
            difficulty: 'Thông hiểu',
            content: 'Ý nghĩa thực tiễn của độ lệch chuẩn $s$ trong mẫu số liệu ghép nhóm là gì?',
            options: [
              { id: 'A', text: 'Đo lường mức độ phân tán của các số liệu xung quanh số trung bình' },
              { id: 'B', text: 'Cho biết giá trị xuất hiện nhiều nhất trong mẫu' },
              { id: 'C', text: 'Chia mẫu số liệu thành 2 phần bằng nhau' },
              { id: 'D', text: 'Là giá trị đại diện lớn nhất của mẫu' }
            ],
            correctAnswer: 'A',
            hints: [
              'Xem định nghĩa các số đo mức độ phân tán: Phương sai và độ lệch chuẩn.',
              'Độ lệch chuẩn càng nhỏ thì số liệu càng đồng đều và tập trung quanh số trung bình.'
            ],
            solution: 'Độ lệch chuẩn $s$ dùng để đo mức độ phân tán của các số liệu xung quanh số trung bình. $s$ càng nhỏ chứng tỏ số liệu càng tập trung quanh $\\bar{x}$.'
          }
        ]
      },
      {
        id: '12_ch6',
        grade: 12,
        name: 'Chương VI: Xác suất có điều kiện & Công thức Bayes',
        theory: `
          <div class="text-xs space-y-2">
            <p>• <b>Xác suất có điều kiện:</b> $$P(A|B) = \\frac{P(AB)}{P(B)} \\quad (P(B) > 0)$$</p>
            <p>• <b>Công thức xác suất toàn phần:</b> $$P(A) = \\sum_{i=1}^k P(B_i) P(A|B_i)$$</p>
            <p>• <b>Công thức Bayes:</b> $$P(B_k|A) = \\frac{P(B_k)P(A|B_k)}{\\sum_{i=1}^n P(B_i)P(A|B_i)}$$</p>
            <p>• <b>Ứng dụng chẩn đoán y tế:</b> Độ nhạy và độ đặc hiệu của xét nghiệm.</p>
          </div>
        `,
        questions: [
          {
            id: 'q12_3',
            grade: 12,
            chapterId: '12_ch6',
            format: 'multiple_choice_4',
            difficulty: 'Thông hiểu',
            content: 'Một hộp chứa 5 quả cầu xanh và 3 quả cầu đỏ. Rút liên tiếp hai quả cầu không hoàn lại. Xác suất để quả thứ hai màu đỏ biết rằng quả thứ nhất màu xanh là:',
            options: [
              { id: 'A', text: '$\\frac{3}{7}$' },
              { id: 'B', text: '$\\frac{3}{8}$' },
              { id: 'C', text: '$\\frac{5}{8}$' },
              { id: 'D', text: '$\\frac{2}{7}$' }
            ],
            correctAnswer: 'A',
            hints: [
              'Khi quả thứ nhất màu xanh đã được rút ra, trong hộp còn lại bao nhiêu quả cầu?',
              'Còn 4 quả xanh và 3 quả đỏ (tổng cộng 7 quả).'
            ],
            solution: 'Sau khi rút 1 quả xanh, trong hộp còn lại $5 - 1 = 4$ quả xanh và 3 quả đỏ (tổng cộng 7 quả). Do đó xác suất rút được quả đỏ ở lần hai là $P = \\frac{3}{7}$.'
          },
          {
            id: 'q12_bayes_2',
            grade: 12,
            chapterId: '12_ch6',
            format: 'short_answer',
            difficulty: 'Vận dụng cao',
            content: 'Trong một đàn gà, tỉ lệ mắc bệnh cúm gia cầm là $1\\%$. Một bộ kit xét nghiệm cho kết quả chính xác $95\\%$ khi gà bị bệnh, nhưng cũng cho dương tính giả $2\\%$ với gà khỏe mạnh. Chọn ngẫu nhiên một con gà và xét nghiệm cho kết quả dương tính. Xác suất con gà đó thực sự bị bệnh bằng bao nhiêu phần trăm (làm tròn 1 chữ số thập phân, ví dụ 32.4)?',
            correctAnswer: '32.4',
            hints: [
              'Gọi $B$ là biến cố gà bị bệnh $\\Rightarrow P(B) = 0,01$, $P(\\bar{B}) = 0,99$.',
              'Gọi $A$ là xét nghiệm dương tính: $P(A|B) = 0,95$, $P(A|\\bar{B}) = 0,02$.',
              'Dùng công thức Bayes: $P(B|A) = \\frac{P(B)P(A|B)}{P(B)P(A|B) + P(\\bar{B})P(A|\\bar{B})}$.'
            ],
            solution: 'Áp dụng công thức Bayes: $P(B|A) = \\frac{0,01 \\times 0,95}{0,01 \\times 0,95 + 0,99 \\times 0,02} = \\frac{0,0095}{0,0095 + 0,0198} = \\frac{0,0095}{0,0293} \\approx 0,3242 = 32,4\\%$.'
          }
        ]
      }
    ]
  }
};
