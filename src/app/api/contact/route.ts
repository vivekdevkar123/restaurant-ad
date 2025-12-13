import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, message } = body || {};
    if (!name || !email || !message) {
      return NextResponse.json({ error: 'Missing fields' }, { status: 400 });
    }

    // Get email credentials from environment variables
    const emailUser = process.env.EMAIL_USER;
    const emailPassword = process.env.EMAIL_PASSWORD;
    const emailHost = process.env.EMAIL_HOST || 'smtp.gmail.com';
    const emailPort = parseInt(process.env.EMAIL_PORT || '587', 10);
    const targetEmail = process.env.CONTACT_EMAIL || emailUser;

    // Check if email credentials are configured
    if (!emailUser || !emailPassword) {
      // eslint-disable-next-line no-console
      console.warn('EMAIL_USER or EMAIL_PASSWORD not configured. Logging contact submission instead.');
      // eslint-disable-next-line no-console
      console.log('Contact submission (no email service):', { name, email, message });
      
      return NextResponse.json({ 
        ok: true, 
        message: 'Contact form submitted successfully (logged to console)' 
      }, { status: 200 });
    }

    // Create nodemailer transporter with SMTP credentials
    const transporter = nodemailer.createTransport({
      host: emailHost,
      port: emailPort,
      secure: emailPort === 465, // true for 465, false for other ports
      auth: {
        user: emailUser,
        pass: emailPassword,
      },
    });

    try {
      // Send email
      await transporter.sendMail({
        from: `"Chef's Kitchen" <${emailUser}>`,
        to: targetEmail,
        subject: `New Contact Form Message from ${name}`,
        html: `
          <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
            <h2 style="color: #333;">New Contact Form Submission</h2>
            <div style="background-color: #f9f9f9; padding: 20px; border-radius: 8px;">
              <p><strong>Name:</strong> ${name}</p>
              <p><strong>Email:</strong> ${email}</p>
              <p><strong>Message:</strong></p>
              <div style="background-color: white; padding: 15px; border-radius: 4px; margin-top: 10px;">
                ${message.replace(/\n/g, '<br>')}
              </div>
            </div>
            <p style="color: #666; margin-top: 20px; font-size: 14px;">
              This message was sent from your Chef's Kitchen website contact form.
            </p>
          </div>
        `,
        replyTo: email, // Allow replying directly to the sender
      });

      // Log success
      // eslint-disable-next-line no-console
      console.log('Contact email sent successfully to:', targetEmail);

      return NextResponse.json({ ok: true, message: 'Email sent successfully' }, { status: 200 });
    } catch (emailError) {
      // eslint-disable-next-line no-console
      console.error('Email sending failed:', emailError);
      
      // Fallback: log to console if email fails
      // eslint-disable-next-line no-console
      console.log('Contact submission (email failed, logged):', { name, email, message });
      
      // Return error to user
      return NextResponse.json({ 
        error: 'Failed to send email. Please try again later.',
        details: emailError instanceof Error ? emailError.message : 'Unknown error'
      }, { status: 500 });
    }

  } catch (err) {
    // eslint-disable-next-line no-console
    console.error('Contact API error', err);
    return NextResponse.json({ error: 'Server error' }, { status: 500 });
  }
}
