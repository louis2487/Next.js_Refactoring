import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(req: Request) {

  try {
    const { to, subject, text } = await req.json();

    if (!to || !subject || !text) {
      return NextResponse.json(
        { error: 'Missing field(s)' },
        { status: 400 }
      );
    }

    const transporter = nodemailer.createTransport({
      service: "naverworks",
      host: "smtp.worksmobile.com",
      port: 465,
      secure: true,
      auth: {
        user: "smartgauge@www.smartgauge.co.kr",
        pass: "Yjrqjikzgvkt"
      },
    });
    await transporter.verify();

    const a = await transporter.sendMail({
      from: "스마트게이지<smartgauge@www.smartgauge.co.kr>",
      to: to,
      subject: subject,
      text: text,
    });
    return NextResponse.json({ ok: true, id: a.messageId }, { status: 200 });
  } catch (err) {
    console.error('[api/mail] error:', err);
    return NextResponse.json({ error: 'Mail send failed' }, { status: 500 });
  }

}

