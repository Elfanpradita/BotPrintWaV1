const { Client, LocalAuth } = require('whatsapp-web.js');
const qrcode = require('qrcode-terminal');
const { exec } = require('child_process');
require('dotenv').config();

const client = new Client({
    authStrategy: new LocalAuth(),
    puppeteer: { headless: true }
});

client.on('qr', (qr) => {
    console.log('Scan QR Code ini untuk login WhatsApp!');
    qrcode.generate(qr, { small: true });
});

client.on('ready', () => {
    console.log('Bot WhatsApp sudah siap!');
});

client.on('message', async msg => {
    if (msg.body.toLowerCase() === 'print tes') {
        exec(`echo "Tes Print dari WhatsApp Bot" | lp -d ${process.env.PRINTER_NAME}`, (error, stdout, stderr) => {
            if (error) {
                msg.reply('Gagal mencetak: ' + stderr);
                return;
            }
            msg.reply('Dokumen berhasil dikirim ke printer!');
        });
    }
});

client.initialize();
