import React from 'react';
import { GradeNumber } from '../types';
import { BookOpen, Layers, CheckCircle, ArrowRight } from 'lucide-react';

interface CurriculumMapViewProps {
  onSelectGradeAndChapter: (grade: GradeNumber, chapterId: string) => void;
}

export const CurriculumMapView: React.FC<CurriculumMapViewProps> = ({ onSelectGradeAndChapter }) => {
  return (
    <div className="space-y-6">
      <div className="bg-white p-6 rounded-2xl shadow-xs border border-slate-200">
        <div className="pb-6 border-b border-slate-200">
          <div className="text-xs uppercase font-extrabold text-indigo-600 tracking-wider">
            KHUNG NĂNG LỰC TOÁN HỌC PHỔ THÔNG 2018 • APP TỰ ÔN TẬP - PHẠM HẬU
          </div>
          <h2 className="text-2xl font-black text-slate-900 mt-1">
            Bản Đồ Cấu Trúc Khung Chương Trình Sách Kết Nối Tri Thức (Lớp 10 - 11 - 12)
          </h2>
          <p className="text-sm text-slate-500 mt-1">
            Hệ thống 4 mạch kiến thức cốt lõi liên thông xuyên suốt 3 năm THPT: Đại số & Một số yếu tố Giải tích • Hình học & Đo lường • Thống kê & Xác suất • Thực hành & Trải nghiệm.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
          {/* Grade 10 */}
          <div className="border border-indigo-200 rounded-3xl p-5 bg-indigo-50/40 space-y-4">
            <div className="pb-3 border-b border-indigo-200 flex items-center justify-between">
              <div>
                <span className="text-xs font-bold text-indigo-600 uppercase">Giai Đoạn Nền Tảng</span>
                <h3 className="font-black text-indigo-950 text-xl">TOÁN LỚP 10</h3>
              </div>
              <span className="text-xs bg-indigo-200 text-indigo-900 font-extrabold px-2.5 py-1 rounded-full">
                9 Chương
              </span>
            </div>

            <ul className="space-y-2 text-xs font-semibold text-slate-700">
              <li className="p-2.5 bg-white rounded-xl shadow-2xs border border-indigo-100/60 flex items-center justify-between">
                <span>Chương I: Mệnh đề & Tập hợp</span>
              </li>
              <li
                onClick={() => onSelectGradeAndChapter(10, '10_ch2')}
                className="p-2.5 bg-white hover:bg-indigo-100/60 rounded-xl shadow-2xs border-l-4 border-l-indigo-600 border border-indigo-100 flex items-center justify-between cursor-pointer transition"
              >
                <span className="font-extrabold text-indigo-900">Chương II: Bất PT bậc nhất hai ẩn (Quy hoạch tuyến tính)</span>
                <ArrowRight className="w-3.5 h-3.5 text-indigo-600" />
              </li>
              <li className="p-2.5 bg-white rounded-xl shadow-2xs border border-indigo-100/60 flex items-center justify-between">
                <span>Chương III: Hệ thức lượng trong tam giác</span>
              </li>
              <li
                onClick={() => onSelectGradeAndChapter(10, '10_ch4')}
                className="p-2.5 bg-white hover:bg-indigo-100/60 rounded-xl shadow-2xs border-l-4 border-l-indigo-600 border border-indigo-100 flex items-center justify-between cursor-pointer transition"
              >
                <span className="font-extrabold text-indigo-900">★ Chương IV: Vectơ & Các phép toán vectơ</span>
                <ArrowRight className="w-3.5 h-3.5 text-indigo-600" />
              </li>
              <li className="p-2.5 bg-white rounded-xl shadow-2xs border border-indigo-100/60 flex items-center justify-between">
                <span>Chương V: Các số đặc trưng mẫu không ghép nhóm</span>
              </li>
              <li className="p-2.5 bg-white rounded-xl shadow-2xs border border-indigo-100/60 flex items-center justify-between">
                <span>Chương VI: Hàm số bậc hai & Parabol</span>
              </li>
              <li
                onClick={() => onSelectGradeAndChapter(10, '10_ch7')}
                className="p-2.5 bg-white hover:bg-indigo-100/60 rounded-xl shadow-2xs border-l-4 border-l-indigo-600 border border-indigo-100 flex items-center justify-between cursor-pointer transition"
              >
                <span className="font-extrabold text-indigo-900">Chương VII: Phương pháp tọa độ Oxy & 3 đường Conic</span>
                <ArrowRight className="w-3.5 h-3.5 text-indigo-600" />
              </li>
              <li className="p-2.5 bg-white rounded-xl shadow-2xs border border-indigo-100/60 flex items-center justify-between">
                <span>Chương VIII: Đại số tổ hợp & Nhị thức Newton</span>
              </li>
              <li className="p-2.5 bg-white rounded-xl shadow-2xs border border-indigo-100/60 flex items-center justify-between">
                <span>Chương IX: Xác suất cổ điển</span>
              </li>
            </ul>
          </div>

          {/* Grade 11 */}
          <div className="border border-emerald-200 rounded-3xl p-5 bg-emerald-50/40 space-y-4">
            <div className="pb-3 border-b border-emerald-200 flex items-center justify-between">
              <div>
                <span className="text-xs font-bold text-emerald-600 uppercase">Cơ Sở Chuyên Sâu</span>
                <h3 className="font-black text-emerald-950 text-xl">TOÁN LỚP 11</h3>
              </div>
              <span className="text-xs bg-emerald-200 text-emerald-900 font-extrabold px-2.5 py-1 rounded-full">
                9 Chương
              </span>
            </div>

            <ul className="space-y-2 text-xs font-semibold text-slate-700">
              <li className="p-2.5 bg-white rounded-xl shadow-2xs border border-emerald-100/60 flex items-center justify-between">
                <span>Chương I: Hàm số lượng giác & Phương trình</span>
              </li>
              <li
                onClick={() => onSelectGradeAndChapter(11, '11_ch2')}
                className="p-2.5 bg-white hover:bg-emerald-100/60 rounded-xl shadow-2xs border-l-4 border-l-emerald-600 border border-emerald-100 flex items-center justify-between cursor-pointer transition"
              >
                <span className="font-extrabold text-emerald-950">Chương II: Dãy số, Cấp số cộng & Cấp số nhân</span>
                <ArrowRight className="w-3.5 h-3.5 text-emerald-600" />
              </li>
              <li
                onClick={() => onSelectGradeAndChapter(11, '11_ch3')}
                className="p-2.5 bg-emerald-100/80 hover:bg-emerald-200/80 rounded-xl shadow-2xs border-l-4 border-l-emerald-600 border border-emerald-300 flex items-center justify-between cursor-pointer transition"
              >
                <span className="font-black text-emerald-950">★ Chương III: Mẫu ghép nhóm (Xu thế trung tâm)</span>
                <ArrowRight className="w-3.5 h-3.5 text-emerald-700" />
              </li>
              <li className="p-2.5 bg-white rounded-xl shadow-2xs border border-emerald-100/60 flex items-center justify-between">
                <span>Chương IV: Quan hệ song song trong không gian</span>
              </li>
              <li className="p-2.5 bg-white rounded-xl shadow-2xs border border-emerald-100/60 flex items-center justify-between">
                <span>Chương V: Giới hạn & Hàm số liên tục</span>
              </li>
              <li className="p-2.5 bg-white rounded-xl shadow-2xs border border-emerald-100/60 flex items-center justify-between">
                <span>Chương VI: Hàm số mũ & Lôgarit</span>
              </li>
              <li className="p-2.5 bg-white rounded-xl shadow-2xs border border-emerald-100/60 flex items-center justify-between">
                <span>Chương VII: Quan hệ vuông góc trong không gian</span>
              </li>
              <li className="p-2.5 bg-white rounded-xl shadow-2xs border border-emerald-100/60 flex items-center justify-between">
                <span>Chương VIII: Các quy tắc tính xác suất</span>
              </li>
              <li className="p-2.5 bg-white rounded-xl shadow-2xs border border-emerald-100/60 flex items-center justify-between">
                <span>Chương IX: Đạo hàm & Ý nghĩa thực tiễn</span>
              </li>
            </ul>
          </div>

          {/* Grade 12 */}
          <div className="border border-purple-200 rounded-3xl p-5 bg-purple-50/40 space-y-4">
            <div className="pb-3 border-b border-purple-200 flex items-center justify-between">
              <div>
                <span className="text-xs font-bold text-purple-600 uppercase">Trọng Tâm Tốt Nghiệp</span>
                <h3 className="font-black text-purple-950 text-xl">TOÁN LỚP 12</h3>
              </div>
              <span className="text-xs bg-purple-200 text-purple-900 font-extrabold px-2.5 py-1 rounded-full">
                6 Chương
              </span>
            </div>

            <ul className="space-y-2 text-xs font-semibold text-slate-700">
              <li
                onClick={() => onSelectGradeAndChapter(12, '12_ch1')}
                className="p-2.5 bg-white hover:bg-purple-100/60 rounded-xl shadow-2xs border-l-4 border-l-purple-600 border border-purple-100 flex items-center justify-between cursor-pointer transition"
              >
                <span className="font-extrabold text-purple-950">Chương I: Khảo sát hàm số & Tối ưu hóa cực trị</span>
                <ArrowRight className="w-3.5 h-3.5 text-purple-600" />
              </li>
              <li
                onClick={() => onSelectGradeAndChapter(12, '12_ch2')}
                className="p-2.5 bg-white hover:bg-purple-100/60 rounded-xl shadow-2xs border-l-4 border-l-purple-600 border border-purple-100 flex items-center justify-between cursor-pointer transition"
              >
                <span className="font-extrabold text-purple-950">★ Chương II: Vectơ & Tọa độ trong không gian</span>
                <ArrowRight className="w-3.5 h-3.5 text-purple-600" />
              </li>
              <li
                onClick={() => onSelectGradeAndChapter(12, '12_ch3')}
                className="p-2.5 bg-purple-100/80 hover:bg-purple-200/80 rounded-xl shadow-2xs border-l-4 border-l-purple-600 border border-purple-300 flex items-center justify-between cursor-pointer transition"
              >
                <span className="font-black text-purple-950">★ Chương III: Mẫu ghép nhóm (Đo mức phân tán)</span>
                <ArrowRight className="w-3.5 h-3.5 text-purple-700" />
              </li>
              <li className="p-2.5 bg-white rounded-xl shadow-2xs border border-purple-100/60 flex items-center justify-between">
                <span>Chương IV: Nguyên hàm, Tích phân & Ứng dụng</span>
              </li>
              <li className="p-2.5 bg-white rounded-xl shadow-2xs border border-purple-100/60 flex items-center justify-between">
                <span>Chương V: Phương pháp tọa độ Oxyz</span>
              </li>
              <li
                onClick={() => onSelectGradeAndChapter(12, '12_ch6')}
                className="p-2.5 bg-white hover:bg-purple-100/60 rounded-xl shadow-2xs border-l-4 border-l-purple-600 border border-purple-100 flex items-center justify-between cursor-pointer transition"
              >
                <span className="font-extrabold text-purple-950">Chương VI: Xác suất có điều kiện & Bayes</span>
                <ArrowRight className="w-3.5 h-3.5 text-purple-600" />
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
