import nodemailer from "nodemailer";
import { NextApiRequest, NextApiResponse } from "next";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  // console.log("this ran");
  const { name, email, message } = req.body;

  const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASSWORD,
    },
  });

  try {
    await transporter.sendMail({
      from: email,
      to: process.env.SMTP_RECEIVER,
      subject: `Contact form submission from ${name}`,
      html: `
      <p><strong>Name: </strong><br> ${name}</p><br>
      <p><strong>Email: </strong><br> ${email}</p><br>
      <p><strong>Message: </strong><br> ${message}</p><br>
      `,
    });
  } catch (error: any) {
    console.log(error);
    return res.status(500).json({ error: error.message || error.toString() });
  }

  return res.status(200).json({ idk: "lol" });
};

export default handler;
