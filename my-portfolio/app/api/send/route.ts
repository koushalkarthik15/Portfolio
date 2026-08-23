import { Resend } from 'resend';
import { NextResponse } from 'next/server';

// Reads from .env.local RESEND_API_KEY
const resend = new Resend(process.env.RESEND_API_KEY || 're_YOUR_API_KEY_HERE');


export async function POST(req: Request) {
  try {
    // 1. Parse the incoming request body
    const { subject, body, email } = await req.json();

    // 2. Send the email and CAPTURE both data and error
    // Resend's SDK returns an object { data, error }
    const response = await resend.emails.send({
      from: 'Portfolio <onboarding@resend.dev>',
      to: ['karthikcoc15@gmail.com'], 
      replyTo: email, // Very important so you can reply to the sender
      subject: `New Portfolio Message: ${subject}`,
      text: `From: ${email}\n\nMessage: ${body}`,
    });

    // 3. Handle Resend-specific errors (Like invalid API keys)
    if (response.error) {
      console.error("Resend API Error:", response.error);
      return NextResponse.json({ error: response.error }, { status: 400 });
    }

    // 4. Success!
    console.log("Email sent successfully:", response.data);
    return NextResponse.json({ success: true, id: response.data?.id });

  } catch (error) {
    // 5. Handle system-level errors (Like network timeout)
    console.error("Internal Server Error:", error);
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}