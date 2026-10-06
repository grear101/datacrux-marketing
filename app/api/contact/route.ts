import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const { name, email, businessName, message } = await req.json();

  if (!name || !email || !businessName || !message) {
    return NextResponse.json({ error: "Missing required fields." }, { status: 400 });
  }

  const apiKey = process.env.RESEND_API_KEY;
  const toAddress = process.env.CONTACT_EMAIL_TO;

  if (!apiKey || !toAddress) {
    console.warn("[contact] RESEND_API_KEY or CONTACT_EMAIL_TO is not configured - the message was not sent.");
    return NextResponse.json({ error: "Contact form is not configured yet." }, { status: 500 });
  }

  const fromAddress = process.env.NOTIFICATIONS_FROM_EMAIL ?? "Datacrux Website <onboarding@resend.dev>";

  const html = `
    <p>New enquiry from the AMARA marketing site.</p>
    <ul>
      <li><strong>Name:</strong> ${name}</li>
      <li><strong>Email:</strong> ${email}</li>
      <li><strong>Business:</strong> ${businessName}</li>
    </ul>
    <p><strong>Message:</strong><br/>${String(message).replace(/\n/g, "<br/>")}</p>
  `;

  const response = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${apiKey}`,
    },
    body: JSON.stringify({
      from: fromAddress,
      to: [toAddress],
      reply_to: email,
      subject: `New enquiry: ${businessName}`,
      html,
    }),
  });

  if (!response.ok) {
    const errText = await response.text();
    console.warn("[contact] Resend API error:", errText);
    return NextResponse.json({ error: "Couldn't send your message. Please try again." }, { status: 502 });
  }

  return NextResponse.json({ ok: true });
}
