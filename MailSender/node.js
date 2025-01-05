require('dotenv').config();

const nodemailer = require('nodemailer');

const message = {
    from: process.env.EMAIL_USER,
    to: "tamutdzhin@gmail.com",
    subject: "BHA 0 : 2 ARSENAL",
    text: "PRIVET",
};

const transporter = nodemailer.createTransport({
    host: "smtp.mail.me.com",
    port: 587,
    secure: false,
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
    },
});

transporter.sendMail(message);
