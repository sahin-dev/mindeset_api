import nodemailer from 'nodemailer';
import config from '../../config';

const emailSender = async (subject: string, email: string, html: string) => {
  const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 465,
    secure: true,
    auth: {
      user: config.emailSender.email,
      pass: config.emailSender.app_pass,
    },
    tls: {
      rejectUnauthorized: false,
    },
  });

  const info = await transporter.sendMail({
    from: '"IYARGO" <belalhossain22000@gmail.com>',
    to: email,
    subject: `${subject}`,
    html,
  });

  //  console.log("Message sent: %s", info.messageId);
};

export default emailSender;
