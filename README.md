# WhatsApp Bot dengan CUPS Printing

## 📂 Struktur Direktori
```
whatsapp-bot/
├── docker-compose.yml
├── Dockerfile
├── .env
├── package.json
├── package-lock.json
├── node_modules/
├── src/
│   ├── index.js
│   ├── config.js
│   ├── printer.js
│   ├── utils.js
│   ├── handlers/
│   │   ├── messageHandler.js
│   │   ├── printHandler.js
│   └── services/
│       ├── whatsappService.js
│       ├── printService.js
├── logs/
│   ├── bot.log
│   └── error.log
└── README.md
```

## 🚀 Deskripsi
Bot WhatsApp ini menggunakan **whatsapp-web.js** untuk interaksi WhatsApp dan **CUPS** untuk mencetak dokumen.

## 🛠️ Instalasi & Menjalankan

### 1️⃣ **Salin Repository**
```bash
git clone https://github.com/username/whatsapp-bot.git
cd whatsapp-bot
```

### 2️⃣ **Konfigurasi Lingkungan (.env)**
Buat file `.env` dan isi dengan:
```
WHATSAPP_SESSION=./session
PRINTER_NAME=EPSON_L120_Series
CUPS_SERVER=http://localhost:631
```

### 3️⃣ **Jalankan dengan Docker**
```bash
docker-compose up -d --build
```

### 4️⃣ **Scan Barcode WhatsApp**
Saat pertama kali menjalankan, buka log untuk mendapatkan QR Code:
```bash
docker logs -f whatsapp-bot
```
Scan barcode dengan aplikasi WhatsApp di HP.

## 📜 API & Fitur
- **Pesan WhatsApp** → Menerima & membalas pesan otomatis.
- **Perintah Cetak** → Kirim dokumen ke printer dengan `!print <file>`.
- **Cek Status Printer** → `!printer-status`.

## 🛑 Menghentikan Bot
```bash
docker-compose down
```

## 📜 Log & Debugging
- Log WhatsApp bot: `logs/bot.log`
- Log error: `logs/error.log`

## 📌 Catatan
- Pastikan CUPS berjalan dan printer tersedia.
- Pastikan koneksi internet stabil.
- Jika error saat menginstall Puppeteer, tambahkan `PUPPETEER_SKIP_DOWNLOAD=true` di `Dockerfile`.

---

**Enjoy! 🚀**

