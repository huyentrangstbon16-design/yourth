# HƯỚNG DẪN DEPLOY LÊN VERCEL - TH TRUE JUICE MILK

Dự án này đã được cấu hình tối ưu 100% chuẩn **Next.js App Router + Tailwind CSS**, sẵn sàng để deploy lên Vercel chỉ trong vài phút.

---

## CÁCH 1: DEPLOY QUA GITHUB & VERCEL DASHBOARD (KHUYÊN DÙNG)

1. **Khởi tạo Git và Push mã nguồn lên GitHub:**
   ```bash
   cd th-true-juice-milk
   git init
   git add .
   git commit -m "feat: TH true JUICE milk production web platform"
   git branch -M main
   git remote add origin https://github.com/<your-username>/th-true-juice-milk.git
   git push -u origin main
   ```

2. **Kết nối với Vercel:**
   - Truy cập [vercel.com](https://vercel.com) và đăng nhập.
   - Bấm **Add New...** -> **Project**.
   - Chọn repository `th-true-juice-milk` bạn vừa push.
   - Vercel sẽ tự động phát hiện:
     - **Framework Preset:** `Next.js`
     - **Root Directory:** `./`
     - **Build Command:** `next build`
     - **Output Directory:** `.next`
   - Bấm **Deploy**.
   - Sau ~1 phút, bạn sẽ nhận được link live: `https://th-true-juice-milk-xxx.vercel.app`.

---

## CÁCH 2: DEPLOY TRỰC TIẾP QUA VERCEL CLI

Nếu máy tính của bạn đã có Node.js:
```bash
# Cài đặt hoặc chạy trực tiếp Vercel CLI
npx vercel

# Khi được hỏi các câu cấu hình:
# ? Set up and deploy? [Y/n] y
# ? Which scope do you want to deploy to? [Chọn tài khoản của bạn]
# ? Link to existing project? [y/N] n
# ? What's your project's name? th-true-juice-milk
# ? In which directory is your code located? ./
# Vercel sẽ tự động build và trả link live ngay trong terminal!
```

---

## CÁC ĐƯỜNG DẪN URL TRÊN BẢN WEB ĐÃ DEPLOY

Khi deploy lên Vercel xong, trang web sẽ có đầy đủ các trang sau:

1. **Trang Chủ Tổng Hợp (Master Hub):** `https://your-domain.vercel.app/`  
   - Chuyển đổi linh hoạt giữa:
     - 📱 **Trải nghiệm App Mobile 20/02** (5 Tab: Hôm nay · Lịch · Quét · Nông trại · Tôi)
     - 🌾 **Web Đăng ký trước 20/01** (Giữ chỗ bê con, nhận lì xì Tết)
     - 📊 **Dashboard Quản trị Đo lường** (Cohort repeat 30 ngày, Push, Fraud)
     - 🧪 **Kiểm thử tự động Core Logic** (10 test cases thuật toán)

2. **Web Đăng Ký Trước (Trang Đích Cho Khách Hàng Tết):** `https://your-domain.vercel.app/pre-register`  
   - Hỗ trợ tham số nguồn từ mã QR hoặc chiến dịch:
     - Quét tại booth trường ĐH: `https://your-domain.vercel.app/pre-register?src=booth`
     - Từ video series: `https://your-domain.vercel.app/pre-register?src=video`
     - Từ POSM cửa hàng: `https://your-domain.vercel.app/pre-register?src=posm`
     - Từ web Tết: `https://your-domain.vercel.app/pre-register?src=web_tet`

3. **Dashboard Quản Trị Đo Lường (Cho Quản Lý Chiến Dịch TH):** `https://your-domain.vercel.app/admin`  
   - Báo cáo Cohort người mua lần đầu, tỷ lệ mua lặp lại 30 ngày (Repeat 30d).
   - Đo lường tỷ lệ quét chai trong 24h sau khi nhận thông báo nhịp chuyển.
   - Bảng xếp hạng Đua trường (FTU, NEU, HUST) theo điểm Sữa trung bình/thành viên.
   - Cảnh báo cờ gian lận thiết bị và tài khoản bất thường.
   - Tải file CSV báo cáo chiến dịch về máy tính.

4. **Trải Nghiệm App Mobile Trực Tiếp:** `https://your-domain.vercel.app/app`  
   - Trải nghiệm toàn bộ 5 tab mobile theo đúng chuẩn thiết kế UI TH true JUICE milk.

---

## CẤU HÌNH BIẾN MÔI TRƯỜNG (TÙY CHỌN NẾU DÙNG SUPABASE LIVE)

Mặc định bản web đã có sẵn cơ chế **Interactive Mock Engine** để mọi người xem demo, quét thử mã, đổi quà và xem đồ thị ngay cả khi chưa kết nối Database.

Nếu bạn muốn kết nối với Database Supabase thật của bạn, hãy thêm các biến sau vào **Vercel Settings -> Environment Variables**:
```env
NEXT_PUBLIC_SUPABASE_URL=https://your-project.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key
SUPABASE_SERVICE_ROLE_KEY=your-service-role-key
```
Sau đó chạy file migration tại `supabase/migrations/20260101000000_schema_foundation.sql` và `supabase/seed/seed.sql` trong Supabase SQL Editor.
