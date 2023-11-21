const nodemailer = require('nodemailer');
require('dotenv').config(); // Lataa ympäristömuuttujat .env-tiedostosta


module.exports = {
 
  fetch: async (req, res) => {
    console.log("fetch started ...");

    const { name, email, message } = req.body;

    const transporter = nodemailer.createTransport({
      host: 'smtp.gmail.com', // gmailin SMTP-palvelimen osoite
      port: 465, // gmailin turvallinen SMTP-portti SSL:llä
      secure: true, // käytetään SSL-yhteyttä
      auth: { 
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS
      },
    });

    // määritä sähköpostiviesti
    const mailOptions = {
      from: email,
      to: process.env.EMAIL_USER,
      subject: 'Uusi yhteydenottopyyntö',
      text: `Nimi: ${name}\nSähköposti: ${email}\nViesti: ${message}`,
    };

    // lähetä sähköposti
    try {
      await transporter.sendMail(mailOptions);
      res.status(200).json({ message: 'Sähköposti lähetetty onnistuneesti!' });
    } catch (error) {
      console.error('Virhe sähköpostin lähetyksessä:', error);
      res.status(500).json({ message: 'Sähköpostin lähettäminen epäonnistui, yritä uudelleen.' });
    }
  },
};