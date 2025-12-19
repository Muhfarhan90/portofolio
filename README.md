# 🌟 Personal Portfolio Website

Portfolio website modern untuk mahasiswa Sistem Informasi semester 7 yang dibangun dengan Next.js dan Tailwind CSS.

## 📋 Fitur

- ✨ **Modern & Clean Design** - Tampilan profesional dan minimalis
- 📱 **Fully Responsive** - Optimal di semua ukuran layar
- 🌙 **Dark Mode Support** - Otomatis menyesuaikan tema sistem
- ⚡ **Fast & Optimized** - Dibangun dengan Next.js 14 App Router
- 🎨 **Tailwind CSS** - Styling yang efisien dan konsisten
- 📝 **TypeScript** - Type-safe code untuk maintainability
- ♿ **Accessible** - Semantic HTML dan ARIA labels
- 🔍 **SEO Optimized** - Meta tags dan structured data

## 🏗️ Struktur Halaman

1. **Home** - Hero section dengan CTA dan quick stats
2. **About** - Profil diri, minat, nilai kerja, dan career goal
3. **Education** - Timeline pendidikan dan academic achievements
4. **Projects** - Grid showcase proyek dengan tech stack
5. **Experience** - Timeline pengalaman kerja dan organisasi
6. **Contact** - Form kontak dan social media links

## 🛠️ Tech Stack

- **Framework:** Next.js 16 (App Router)
- **Styling:** Tailwind CSS 4
- **Language:** TypeScript
- **Font:** Inter (Google Fonts)
- **Icons:** Heroicons (via SVG)

## 🚀 Getting Started

### Prerequisites

- Node.js 18+
- npm atau yarn

### Installation

1. Clone repository:

```bash
git clone <repository-url>
cd portofolio-web
```

2. Install dependencies:

```bash
npm install
# atau
yarn install
```

3. Jalankan development server:

```bash
npm run dev
# atau
yarn dev
```

4. Buka [http://localhost:3000](http://localhost:3000) di browser

## ⚙️ Kustomisasi

### Update Personal Information

Edit file `data/portfolio.ts` untuk mengubah:

- Nama dan headline
- About information
- Education details
- Projects list
- Experience timeline
- Contact information

### Update Styling

- Colors & themes: Edit Tailwind classes di components
- Global styles: `app/globals.css`
- Layout: `app/layout.tsx`

## 📁 Struktur Folder

```
portofolio-web/
├── app/                    # Next.js App Router pages
│   ├── about/
│   ├── contact/
│   ├── education/
│   ├── experience/
│   ├── projects/
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
├── components/             # Reusable components
│   ├── Navbar.tsx
│   └── Footer.tsx
├── data/                   # Data & content
│   └── portfolio.ts
├── types/                  # TypeScript types
│   └── index.ts
└── public/                 # Static assets
```

## 🎨 Color Palette

- **Primary:** Blue (#2563EB)
- **Secondary:** Purple (#9333EA)
- **Background (Light):** White (#FFFFFF)
- **Background (Dark):** Gray (#030712)
- **Text (Light):** Gray-900 (#111827)
- **Text (Dark):** White (#FFFFFF)

## 📝 To-Do / Future Enhancements

- [ ] Add blog section
- [ ] Implement actual form submission (email service)
- [ ] Add animations (Framer Motion)
- [ ] Add light/dark mode toggle
- [ ] Add project images/screenshots
- [ ] Implement CMS for easy content management
- [ ] Add testimonials section
- [ ] Multi-language support (EN/ID)

## 📄 License

This project is open source and available for personal use.

## 👤 Contact

**Your Name**

- Email: your.email@example.com
- LinkedIn: [your-profile](https://linkedin.com/in/your-profile)
- GitHub: [@your-username](https://github.com/your-username)

---

⭐ If you like this project, please give it a star on GitHub!
