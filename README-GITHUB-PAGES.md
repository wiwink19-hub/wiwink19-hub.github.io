# Panduan Deploy ke https://wiwink19-hub.github.io/

Website ini sudah siap untuk di-deploy ke GitHub Pages!

## ✅ Yang Sudah Dikonfigurasi

1. **Vite Config** (`vite.config.ts`):
   - `base: '/'` untuk deployment di root directory
   - Port 5000 untuk development

2. **GitHub Actions Workflow** (`.github/workflows/deploy.yml`):
   - Otomatis build dan deploy setiap push ke branch `main`

3. **Build Test**:
   - ✅ Production build berhasil
   - ✅ Assets dikompilasi dengan baik

## 🚀 Cara Deploy ke https://wiwink19-hub.github.io/

### Langkah 1: Push ke GitHub

```bash
git add .
git commit -m "Setup untuk GitHub Pages"
git push origin main
```

### Langkah 2: Aktifkan GitHub Pages

1. Buka repository di GitHub: `https://github.com/wiwink19-hub/wiwink19-hub.github.io`

2. Pergi ke **Settings** (⚙️) → **Pages** (di sidebar kiri)

3. Di bagian **Source**:
   - Pilih: **GitHub Actions**
   - Jangan pilih branch, pilih GitHub Actions sebagai source

4. Klik **Save**

### Langkah 3: Tunggu Deployment

1. Pergi ke tab **Actions** di repository Anda

2. Anda akan melihat workflow "Deploy to GitHub Pages" sedang berjalan

3. Tunggu sampai selesai (biasanya 1-2 menit)

4. Setelah selesai, website Anda akan tersedia di:
   **https://wiwink19-hub.github.io/**

## 🔄 Deployment Otomatis

Setelah setup awal, setiap kali Anda push ke branch `main`:
- GitHub Actions akan otomatis build project
- Deploy hasil build ke GitHub Pages
- Website Anda akan ter-update otomatis

## ✨ Test Build Lokal

Sebelum push, Anda bisa test build production secara lokal:

```bash
# Build production
npm run build

# Preview build production
npm run preview
```

Build akan tersimpan di folder `dist/`

## 🎯 Struktur Repository

Untuk User Pages (`username.github.io`), repository harus bernama:
- `wiwink19-hub.github.io` ✅ (benar)

Jika repository name berbeda, website tidak akan muncul di root URL.

## 📝 Troubleshooting

### Website Tidak Muncul
1. Cek tab Actions - pastikan workflow berhasil (hijau ✓)
2. Cek Settings → Pages - pastikan Source adalah "GitHub Actions"
3. Tunggu 5-10 menit setelah deployment pertama

### 404 atau Halaman Kosong
1. Pastikan `base: '/'` di `vite.config.ts`
2. Clear browser cache (Ctrl+Shift+R atau Cmd+Shift+R)
3. Cek browser console untuk error

### Workflow Gagal
1. Lihat error di tab Actions
2. Pastikan `package.json` dan `package-lock.json` ter-commit
3. Pastikan tidak ada error di build lokal

## 📞 Status Check

Setelah deploy, cek:
- ✅ Website: https://wiwink19-hub.github.io/
- ✅ Actions: https://github.com/wiwink19-hub/wiwink19-hub.github.io/actions
- ✅ Settings: https://github.com/wiwink19-hub/wiwink19-hub.github.io/settings/pages

---

**Selamat! Website Anda siap untuk online! 🎉**
