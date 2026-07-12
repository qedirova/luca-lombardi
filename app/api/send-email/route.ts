import { generateContactHtml } from "@/utils/generateContactHtml";
import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request: NextRequest) {
  const body = await request.json();
  const html = generateContactHtml(body);

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.USER_EMAIL,
      pass: process.env.USER_PASS,
    },
    tls: {
      rejectUnauthorized: false,
    },
  });

  try {
    await transporter.sendMail({
      from: `${body.name} <${body.email}>`,
      to: process.env.USER_EMAIL,
      subject: `New contact message from ${body.name}`,
      html,
    });
    return NextResponse.json({ message: "OK" }, { status: 200 });
  } catch (e) {
    console.log(e);
    return NextResponse.json(
      { message: "Failed to send email" },
      { status: 500 },
    );
  }
}
