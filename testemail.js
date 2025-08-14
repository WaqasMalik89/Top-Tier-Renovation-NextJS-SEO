import nodemailer from 'nodemailer';

async function testEmail() {
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: "mail.waqas.malik@gmail.com",
      pass: "qbhbyodvbbjoegoj",
    },
  });

  try {
    const info = await transporter.sendMail({
      from: 'mail.waqas.malik@gmail.com',
      to: 'mail.waqas.malik@gmail.com',
      subject: 'Test Email',
      text: 'Hello, this is a test email',
    });
    console.log('Email sent:', info.response);
  } catch (err) {
    console.error('Test email error:', err);
  }
}

testEmail();
