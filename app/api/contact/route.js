import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req) {
  const { name, email, phone, company, service, message, time } =
    await req.json();

  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: Number(process.env.SMTP_PORT),
    secure: Number(process.env.SMTP_PORT) === 465,
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  });

  const mailOptions = {
    from: `${name} <${process.env.SMTP_USER}>`,
    to: process.env.SMTP_TO,
    subject: `New Contact Inquiry from ${name}`,
    text: `Name: ${name}\nEmail: ${email}\nPhone: ${phone || "N/A"}\nCompany: ${
      company || "N/A"
    }\nService: ${
      service || "Not specified"
    }\nTime: ${time}\n\nMessage:\n${message}`,
    html: `<p><strong>Name:</strong> ${name}</p>
           <p><strong>Email:</strong> ${email}</p>
           <p><strong>Phone:</strong> ${phone || "N/A"}}</p>
           <p><strong>Company:</strong> ${company || "N/A"}}</p>
           <p><strong>Service:</strong> ${service || "Not specified"}}</p>
           <p><strong>Time:</strong> ${time}</p>
           <hr />
           <p>${message}</p>`,
  };

  try {
    await transporter.sendMail(mailOptions);
    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Error sending email:", error);
    return NextResponse.json(
      { error: "Failed to send email" },
      { status: 500 }
    );
  }
}
