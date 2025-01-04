const nodemailer = require('nodemailer');

const to = "zhayakesheva@bk.ru"; 
const subject = "BHA 0 : 2 ARSENAL";
const text = "PRIVET";

const mailOP = {
    from: "pinokiochan_n@icloud.com", 
    to: to,
    subject: subject,
    text: text
};

1
const transporter = nodemailer.createTransport({
    host: "smtp.mail.me.com",
    port: 587, 
    secure: false, 
    auth: {
        user: "pinokiochan_n@icloud.com", 
        pass: "yflp-ftir-jljy-uzns" 
    }
});


transporter.sendMail(mailOP, (error, info) => {
    if (error) {
        console.log("Error:", error);
    } else {
        console.log("Email sent:", info.response);
    }
});
