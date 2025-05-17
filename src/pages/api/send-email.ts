import type { NextApiRequest, NextApiResponse } from "next";
import nodemailer from "nodemailer";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "POST") return res.status(405).json({ message: "Method not allowed" });

  const { name, contact, date, pkg, email } = req.body;

  if (!name || !contact || !date || !pkg || !email) {
    return res.status(400).json({ message: "Missing fields" });
  }

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.ADMIN_EMAIL, // Admin Gmail
      pass: process.env.ADMIN_EMAIL_PASS, // Gmail App Password
    },
  });

  // Email to Admin
  const adminMailOptions = {
    from: process.env.ADMIN_EMAIL,
    to: process.env.ADMIN_EMAIL,
    subject: "New Appointment Received",
    text: `A new appointment has been booked:\n\n👤 Name: ${name}\n📞 Contact: ${contact}\n📅 Date: ${date}\n🎁 Package: ${pkg}\n📧 User Email: ${email}`,
  };

  // Email to User
  const userMailOptions = {
    from: process.env.ADMIN_EMAIL,
    to: email,
    subject: "Your Appointment Confirmation",
    text: `Hi ${name},\n\nThank you for booking an appointment!\nHere are your details:\n📅 Date: ${date}\n🎁 Package: ${pkg}\n📞 Contact: ${contact}\n\nWe will contact you soon to confirm.\n\nRegards,\nParlour Team`,
  };

  try {
    await transporter.sendMail(adminMailOptions); // Admin ko
    await transporter.sendMail(userMailOptions);  // User ko
    res.status(200).json({ message: "Emails sent successfully" });
  } catch (error) {
    console.error("Email sending failed:", error);
    res.status(500).json({ message: "Email sending failed" });
  }
}
