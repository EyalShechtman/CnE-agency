import { Resend } from "resend";
import { NextResponse } from "next/server";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  const { name, email, need } = await request.json();

  if (!name || !email || !need) {
    return NextResponse.json({ error: "All fields are required" }, { status: 400 });
  }

  const { error } = await resend.emails.send({
    from: "CnE Contact Form <onboarding@resend.dev>",
    to: "eyal.shechtman@gmail.com",
    replyTo: email,
    subject: `New inquiry from ${name}`,
    html: `
      <div style="font-family: -apple-system, sans-serif; max-width: 560px; margin: 0 auto; padding: 40px 0;">
        <h2 style="font-size: 20px; font-weight: 600; margin: 0 0 24px;">New inquiry from ${name}</h2>
        <table style="width: 100%; border-collapse: collapse;">
          <tr>
            <td style="padding: 12px 0; border-bottom: 1px solid #eee; color: #999; font-size: 12px; text-transform: uppercase; letter-spacing: 0.1em; width: 80px; vertical-align: top;">Name</td>
            <td style="padding: 12px 0; border-bottom: 1px solid #eee; font-size: 15px;">${name}</td>
          </tr>
          <tr>
            <td style="padding: 12px 0; border-bottom: 1px solid #eee; color: #999; font-size: 12px; text-transform: uppercase; letter-spacing: 0.1em; vertical-align: top;">Email</td>
            <td style="padding: 12px 0; border-bottom: 1px solid #eee; font-size: 15px;"><a href="mailto:${email}" style="color: #000;">${email}</a></td>
          </tr>
          <tr>
            <td style="padding: 12px 0; color: #999; font-size: 12px; text-transform: uppercase; letter-spacing: 0.1em; vertical-align: top;">Need</td>
            <td style="padding: 12px 0; font-size: 15px; line-height: 1.6;">${need.replace(/\n/g, "<br>")}</td>
          </tr>
        </table>
        <p style="margin-top: 32px; font-size: 12px; color: #999;">Sent from cneagency.com contact form</p>
      </div>`,
  });

  if (error) {
    return NextResponse.json({ error: "Failed to send email" }, { status: 500 });
  }

  return NextResponse.json({ success: true });
}
