# 📝 Panduan Kustomisasi Portfolio

## 🎯 Langkah-Langkah Kustomisasi

### 1. Update Informasi Personal

Buka file `data/portfolio.ts` dan update bagian berikut:

#### a. Personal Information

```typescript
export const personalInfo = {
  name: "Nama Lengkap Anda", // Ganti dengan nama Anda
  headline: "Information Systems Student | Aspiring Software Engineer",
  description: "Information Systems student passionate about...",
  // ... dst
};
```

#### b. About Section

```typescript
about: {
  introduction: "Tulis tentang diri Anda...",
  interests: [
    // Tambah/ubah minat Anda
    "Fullstack Web Development",
    "Software Engineering",
  ],
  values: [
    // Update core values Anda
  ],
  careerGoal: "Tulis tujuan karier Anda..."
}
```

### 2. Update Education Data

```typescript
export const educationData: Education[] = [
  {
    id: "1",
    institution: "Nama Universitas Anda", // Ganti dengan universitas Anda
    degree: "Sarjana (S1)",
    field: "Sistem Informasi",
    period: "2021 - 2025", // Sesuaikan tahun
    semester: "Semester 7",
    description: "Tambahkan deskripsi atau IPK Anda",
  },
];
```

### 3. Update Projects

Ganti atau tambah proyek Anda:

```typescript
export const projectsData: Project[] = [
  {
    id: "1",
    title: "Nama Proyek Anda",
    description: "Deskripsi proyek...",
    techStack: ["React", "Node.js", "MySQL"], // Tech yang digunakan
    demoLink: "https://demo-url.com", // Optional
    repoLink: "https://github.com/username/repo", // Optional
  },
  // Tambah proyek lainnya...
];
```

### 4. Update Experience

```typescript
export const experienceData: Experience[] = [
  {
    id: "1",
    position: "Posisi Anda",
    company: "Nama Perusahaan/Organisasi",
    period: "Bulan Tahun - Bulan Tahun",
    type: "internship", // atau 'organization', 'freelance', 'project'
    description: [
      "Poin tanggung jawab 1",
      "Poin tanggung jawab 2",
      // ... dst
    ],
  },
  // Tambah pengalaman lainnya...
];
```

### 5. Update Contact Information

```typescript
export const contactInfo: ContactInfo = {
  email: "email.anda@example.com", // Ganti dengan email Anda
  linkedin: "https://linkedin.com/in/username-anda", // Link LinkedIn
  github: "https://github.com/username-anda", // Link GitHub
};
```

---

## 🎨 Kustomisasi Tampilan

### Mengubah Warna Tema

Cari dan replace warna di semua file component:

**Warna Primary (Blue):**

- `bg-blue-600` → Ganti dengan warna pilihan
- `text-blue-600` → Ganti dengan warna pilihan

**Warna Secondary (Purple):**

- `bg-purple-600` → Ganti dengan warna pilihan
- `from-blue-600 to-purple-600` → Ganti gradient

### Mengubah Font

Edit `app/layout.tsx`:

```typescript
import { Inter } from "next/font/google"; // Ganti dengan font lain

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});
```

Font Google yang direkomendasikan:

- `Poppins` - Modern & friendly
- `Roboto` - Clean & professional
- `Montserrat` - Bold & contemporary
- `Open Sans` - Simple & readable

---

## 📸 Menambah Gambar Proyek

1. Simpan gambar di folder `public/projects/`
2. Update di `data/portfolio.ts`:

```typescript
{
  id: "1",
  title: "Project Name",
  image: "/projects/project-1.jpg", // Tambahkan path gambar
  // ... rest of data
}
```

3. Update component `app/projects/page.tsx` untuk menampilkan gambar

---

## 🌙 Toggle Dark Mode Manual

Saat ini dark mode mengikuti system preferences. Untuk menambah toggle manual:

1. Install library: `npm install next-themes`
2. Wrap app dengan ThemeProvider
3. Tambahkan toggle button di Navbar

---

## 📧 Setup Form Kontak

Saat ini form hanya simulasi. Untuk integrasi real:

### Option 1: EmailJS (Free & Easy)

1. Daftar di [EmailJS](https://www.emailjs.com/)
2. Install: `npm install @emailjs/browser`
3. Update `app/contact/page.tsx` dengan EmailJS config

### Option 2: API Route + Nodemailer

1. Buat API route: `app/api/contact/route.ts`
2. Install: `npm install nodemailer`
3. Setup SMTP credentials

### Option 3: Form Service (Formspree, Getform)

1. Daftar di service pilihan
2. Ganti form action dengan endpoint mereka

---

## 🚀 Deploy Website

### Option 1: Vercel (Recommended)

1. Push code ke GitHub
2. Import di [Vercel](https://vercel.com)
3. Deploy otomatis!

### Option 2: Netlify

1. Push code ke GitHub
2. Connect di [Netlify](https://netlify.com)
3. Configure build settings

### Option 3: Custom Server

1. Build: `npm run build`
2. Start: `npm run start`
3. Deploy ke VPS/Cloud

---

## ✅ Checklist Sebelum Deploy

- [ ] Update semua data personal di `data/portfolio.ts`
- [ ] Ganti placeholder dengan data asli
- [ ] Test semua link (LinkedIn, GitHub, Email)
- [ ] Test responsive di berbagai device
- [ ] Update meta tags di `app/layout.tsx`
- [ ] Tambahkan favicon di `public/`
- [ ] Test form kontak
- [ ] Check console untuk errors
- [ ] Optimize images (jika ada)
- [ ] Update README dengan info Anda

---

## 🆘 Troubleshooting

### Port sudah digunakan

```bash
# Kill process di port 3000
npx kill-port 3000
```

### Clear cache Next.js

```bash
rm -rf .next
npm run dev
```

### Tailwind tidak update

```bash
# Restart dev server
# Ctrl+C lalu npm run dev lagi
```

---

## 💡 Tips

1. **Gunakan real data** - Jangan biarkan placeholder
2. **Update berkala** - Tambah project & experience baru
3. **Test di mobile** - Banyak recruiter buka di HP
4. **SEO friendly** - Update meta description
5. **Keep it simple** - Jangan terlalu ramai
6. **Use analytics** - Track visitor dengan Google Analytics

---

**Selamat berkustomisasi! 🎉**

Jika ada pertanyaan, feel free to ask!
