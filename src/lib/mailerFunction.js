const nodemailer = require("nodemailer");

async function nodeMailer(name, address, email, cart) {
  let transporter = nodemailer.createTransport({
    port: 587,
    service: "gmail",
    auth: {
      user: "sulaymonsaidmurodovich@gmail.com",
      pass: "ssgmail03",
    },
    tls: {
      rejectUnauthorized: false,
    },
  });

  let mailOptions = {
    from: "sulaymonsaidmurodovich@gmail.com",
    to: email,
    subject: name,
    text: `Address: ${address}; 
    Orders: ${cart.map(e => e.food_name)}`,
  };

  transporter.sendMail(mailOptions, (err, success) => {
    if (err) {
      throw new Error(500)
    }
  });
}

module.exports = nodeMailer;
