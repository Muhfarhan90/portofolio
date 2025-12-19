# 🚀 Quick Start Guide

## Langkah Cepat untuk Memulai

### 1. Jalankan Development Server

```bash
npm run dev
```

Website akan berjalan di: **http://localhost:3000**

### 2. Edit Data Personal Anda

Buka file `data/portfolio.ts` dan update:

```typescript
export const personalInfo = {
  name: "NAMA ANDA", // ⬅️ Ganti ini
  headline: "Information Systems Student | Aspiring Software Engineer",
  // ... dst
};
```

### 3. Update Contact Info

```typescript
export const contactInfo: ContactInfo = {
  email: "email.anda@gmail.com", // ⬅️ Ganti ini
  linkedin: "https://linkedin.com/in/username", // ⬅️ Ganti ini
  github: "https://github.com/username", // ⬅️ Ganti ini
};
```

### 4. Lihat Perubahannya

Refresh browser untuk melihat perubahan secara langsung!

---

## 📝 Yang Perlu Diubah Segera

### Prioritas Tinggi (Wajib):

- [ ] Nama lengkap di `personalInfo.name`
- [ ] Email di `contactInfo.email`
- [ ] Link LinkedIn di `contactInfo.linkedin`
- [ ] Link GitHub di `contactInfo.github`

### Prioritas Sedang:

- [ ] Data pendidikan di `educationData`
- [ ] Data proyek di `projectsData`
- [ ] Data pengalaman di `experienceData`

### Prioritas Rendah (Opsional):

- [ ] Custom colors
- [ ] Tambah foto profil
- [ ] Modifikasi teks di halaman About

---

## 🎨 Kustomisasi Warna Cepat

Untuk mengganti warna tema utama (default: biru):

1. Buka VS Code
2. Tekan `Ctrl + Shift + H` (Find and Replace)
3. Find: `bg-blue-600`
4. Replace with: `bg-purple-600` (atau warna lain)
5. Klik "Replace All"

Ulangi untuk:

- `text-blue-600` → `text-purple-600`
- `border-blue-600` → `border-purple-600`

### Pilihan Warna Tailwind:

- `blue` - Biru (default)
- `purple` - Ungu
- `green` - Hijau
- `red` - Merah
- `pink` - Pink
- `indigo` - Indigo
- `teal` - Teal

---

## 📁 Struktur File Penting

```
portofolio-web/
├── data/
│   └── portfolio.ts          ⬅️ EDIT INI untuk data personal
├── app/
│   ├── page.tsx              ← Homepage
│   ├── about/page.tsx        ← Halaman About
│   ├── projects/page.tsx     ← Halaman Projects
│   ├── experience/page.tsx   ← Halaman Experience
│   ├── education/page.tsx    ← Halaman Education
│   └── contact/page.tsx      ← Halaman Contact
└── components/
    ├── Navbar.tsx            ← Navigasi
    └── Footer.tsx            ← Footer
```

---

## 🐛 Troubleshooting Cepat

### Server tidak bisa diakses?

```bash
# Stop server (Ctrl + C)
# Jalankan ulang
npm run dev
```

### Port 3000 sudah dipakai?

```bash
npx kill-port 3000
npm run dev
```

### Error setelah edit?

- Check syntax error di file yang di-edit
- Restart development server
- Clear browser cache

---

## ✅ Checklist Sebelum Deploy

- [ ] Update semua data di `data/portfolio.ts`
- [ ] Test semua link (email, LinkedIn, GitHub)
- [ ] Hapus data dummy/placeholder
- [ ] Test di mobile browser
- [ ] Check console untuk error
- [ ] Update `sitemap.ts` dan `robots.ts` dengan domain Anda

---

## 🌐 Deploy ke Vercel (Gratis)

1. Push code ke GitHub:

```bash
git init
git add .
git commit -m "Initial commit"
git remote add origin <your-github-repo-url>
git push -u origin main
```

2. Buka [vercel.com](https://vercel.com)
3. Login dengan GitHub
4. Click "Import Project"
5. Pilih repository Anda
6. Click "Deploy" ✨

Website Anda akan live dalam 2-3 menit!

---

## 💡 Tips Pro

1. **Update berkala** - Tambahkan project baru setiap selesai
2. **LinkedIn first** - Pastikan link LinkedIn benar dan profil lengkap
3. **GitHub repos** - Pastikan repository yang di-link public & punya README
4. **Mobile test** - Banyak recruiter buka portfolio dari HP
5. **Simple is better** - Jangan terlalu banyak animasi/effects

---

**Selamat! Portfolio Anda siap digunakan! 🎉**

Untuk dokumentasi lengkap, lihat [CUSTOMIZATION.md](CUSTOMIZATION.md)
