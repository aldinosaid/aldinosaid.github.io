# Aldino Said - Personal Portfolio (Next.js 15)

Website portofolio modern yang dibangun menggunakan **Next.js 15 (App Router)**, **TypeScript**, dan **Tailwind CSS**, siap di-deploy secara otomatis ke **GitHub Pages** (`https://aldinosaid.github.io`).

---

## 🌟 Fitur
- **Next.js 15 + React 19 + TypeScript**: Arsitektur modern, cepat, dan aman.
- **Tailwind CSS & Lucide Icons**: Tampilan antarmuka *dark aesthetic*, bersih, responsif, dan elegan.
- **Static Export (`output: "export"`)**: Di-build menjadi aset statis murni di direktori `out/` sehingga kompatibel 100% dengan GitHub Pages tanpa server Node.js.
- **GitHub REST API Integration**: Otomatis menampilkan 6 repositori publik terbaru dari akun GitHub Anda.
- **Automated CI/CD Deployment**: Dilengkapi alur kerja GitHub Actions (`.github/workflows/deploy.yml`) untuk build dan deploy otomatis setiap kali Anda melakukan `git push`.

---

## 🛠️ Menjalankan di Komputer Lokal

1. **Jalankan Development Server**:
   ```bash
   npm run dev
   ```
   Buka [http://localhost:3000](http://localhost:3000) di browser Anda.

2. **Uji Build Statis**:
   ```bash
   npm run build
   ```
   Hasil file HTML/CSS/JS statis akan dihasilkan di folder `out/`.

---

## 🚀 Cara Publikasi ke GitHub Pages

1. **Push source code ke GitHub**:
   Buka terminal di direktori proyek ini dan jalankan:
   ```bash
   git add .
   git commit -m "feat: migrate portfolio to modern Next.js 15"
   git branch -M main
   git remote add origin https://github.com/aldinosaid/aldinosaid.github.io.git
   git push -u origin main
   ```

2. **Aktifkan GitHub Pages via GitHub Actions**:
   - Buka repositori Anda: `https://github.com/aldinosaid/aldinosaid.github.io`
   - Klik tab **Settings** -> **Pages** (di sidebar kiri).
   - Pada bagian **Build and deployment** > **Source**, pilih **GitHub Actions**.
   - Selesai! Alur kerja GitHub Actions akan otomatis mengompilasi proyek Next.js dan mempublikasikannya ke:
     👉 **`https://aldinosaid.github.io`**
