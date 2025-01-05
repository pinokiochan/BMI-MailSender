    require('dotenv').config();

    const nodemailer = require('nodemailer');

    const message = {
        from: process.env.EMAIL_USER,
        to: "sholak012@gmail.com",
        subject: "Salem sulu karyndas",
        text: "tyndap tyrmyn aita ber",
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
