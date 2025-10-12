 // app/api/contact/route.ts
import { Resend } from "resend";
import { NextResponse } from "next/server";

const resend = new Resend(process.env.RESEND_API_KEY);
const CONTACT_TO = process.env.CONTACT_TO; // your target inbox (e.g. you@example.com)
const CONTACT_FROM = process.env.CONTACT_FROM || "noreply@yourdomain.com";

interface ContactFormData {
  name: string;
  email: string;
  phone?: string;
  businessType?: string;
}

export async function POST(req: Request) {
  try {
    const body = (await req.json()) as ContactFormData;
    const { name, email, phone, businessType } = body ?? {};

    if (!name || !email) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 422 });
    }

    if (!CONTACT_TO || !process.env.RESEND_API_KEY) {
      return NextResponse.json({ error: "Email service not configured" }, { status: 500 });
    }

    const subject = `New contact from ${name}`;
    const html = `
      <div style="font-family:Arial, sans-serif; line-height:1.5;">
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone || "-"}</p>
        <p><strong>Business Type:</strong> ${businessType || "-"}</p>
      </div>
    `;

    const { error } = await resend.emails.send({
      from: CONTACT_FROM,
      to: CONTACT_TO,
      subject,
      html,
    });

    if (error) {
      console.error("Resend error:", error);
      return NextResponse.json({ error: "Failed to send email" }, { status: 500 });
    }

    return NextResponse.json({ success: true, message: "Email sent successfully" }, { status: 200 });
  } catch (error: any) {
    console.error("Contact route error:", error);
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}

 
