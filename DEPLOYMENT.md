# Panduan Deploy ke GitHub Pages

Proyek ini telah dikonfigurasi untuk deploy otomatis ke GitHub Pages.

## Konfigurasi yang Sudah Dilakukan

### 1. Vite Config
File `vite.config.ts` sudah dikonfigurasi dengan:
- `base: '/'` - Untuk deployment di root directory (username.github.io)
- `port: 5000` - Port untuk development server

### 2. GitHub Actions Workflow
File `.github/workflows/deploy.yml` sudah dibuat untuk deployment otomatis.

## Cara Deploy

### Opsi 1: Deploy Otomatis (Rekomendasi)

1. Push code Anda ke GitHub repository
2. Di repository GitHub, pergi ke **Settings** → **Pages**
3. Di bagian **Source**, pilih:
   - Source: **GitHub Actions**
4. Setiap kali Anda push ke branch `main`, website akan otomatis di-build dan di-deploy

### Opsi 2: Deploy Manual dengan gh-pages

Jika Anda ingin deploy manual, tambahkan script ini di `package.json`:

```json
{
  "scripts": {
    "predeploy": "npm run build",
    "deploy": "gh-pages -d dist"
  }
}
```

Kemudian jalankan:
```bash
npm install gh-pages --save-dev
npm run deploy
```

## Catatan Penting

### Untuk User/Organization Pages (username.github.io)
- `base: '/'` sudah dikonfigurasi dengan benar
- Website akan tersedia di: `https://username.github.io/`

### Untuk Project Pages (username.github.io/project-name)
Jika Anda deploy ke project page, ubah `vite.config.ts`:
```typescript
base: '/nama-repository-anda/',
```

### Troubleshooting

**404 Error atau Halaman Kosong:**
1. Pastikan `base` path di `vite.config.ts` sesuai dengan deployment Anda
2. Cek Settings → Pages di GitHub apakah source sudah benar
3. Lihat browser console untuk error asset loading

**Workflow Gagal:**
1. Cek tab **Actions** di GitHub repository
2. Pastikan GitHub Pages enabled di Settings
3. Pastikan workflow memiliki permission untuk deploy

## Build Lokal

Untuk test build production secara lokal:
```bash
npm run build
npm run preview
```

Build output akan ada di folder `dist/`.
