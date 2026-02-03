import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';
import mysql from 'mysql2/promise';

const pool = mysql.createPool({
  host: process.env.MYSQL_HOST,
  user: process.env.MYSQL_USER,
  password: process.env.MYSQL_PASSWORD,
  database: process.env.MYSQL_DATABASE,
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
});

const transporter = nodemailer.createTransport({
  service: 'gmail',
  host: 'smtp.gmail.com',
  port: 587,
  secure: false,
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_APP_PASSWORD,
  },
});

export async function POST(request: Request) {
  try {
    const [rows] = await pool.execute(
      'SELECT email FROM privacy_audit_emails'
    ) as [Array<{ email: string }>, any];

    if (rows.length === 0) {
      return NextResponse.json({ message: 'No recipients found in waitlist.' });
    }

    const emails = rows.map(row => row.email);

    // ────────────────────────────────────────────────
    // OVERHAULED EMAIL TEMPLATE (ENGLISH TRIPWIRE)
    // ────────────────────────────────────────────────
    const mailOptions = {
      from: `"DataCloak AI | Early Access" <${process.env.EMAIL_USER}>`,
      to: process.env.EMAIL_USER, 
      bcc: emails.join(', '),     
      subject: '🔒 Welcome to the DataCloak AI Early Access Circle',
      html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: auto; color: #111; line-height: 1.6;">
          <div style="background-color: #000; padding: 40px; text-align: center; border-radius: 20px 20px 0 0;">
            <h1 style="color: #fff; margin: 0; font-size: 24px;">Welcome on Board!</h1>
            <p style="color: #00FFCC; font-weight: bold; margin-top: 10px;">Your Early Access Status: ACTIVE</p>
          </div>
          
          <div style="padding: 30px; border: 1px solid #eee; border-top: none; border-radius: 0 0 20px 20px;">
            <p>Hi there,</p>
            <p>Thank you for trusting <strong>DataCloak AI</strong>. You are now officially among the first group of early adopters helping us shape the future of anonymized AI workflows.</p>
            
            <hr style="border: 0; border-top: 1px solid #eee; margin: 25px 0;">
            
            <h3 style="color: #333;">🎁 Your Exclusive Early Adopter Deal:</h3>
            <p>We believe in building tools that people actually need. That's why we are rewarding our earliest supporters with a massive advantage:</p>
            
            <div style="background-color: #f9f9f9; padding: 20px; border-radius: 12px; border-left: 4px solid #000;">
              <p style="margin: 0; font-size: 18px; font-weight: bold;">Lifetime License for only €39</p>
              <p style="margin: 5px 0; color: #666; font-size: 14px;">Instead of €79 annually. Pay once, use forever.</p>
              <a href="https://datacloakai.com" style="display: inline-block; background-color: #000; color: #fff; padding: 12px 25px; text-decoration: none; border-radius: 8px; margin-top: 15px; font-weight: bold;">Claim My Lifetime Deal Now →</a>
            </div>

            <p style="font-size: 13px; color: #999; margin-top: 15px;">
              🛡️ <strong>100% Risk-Free:</strong> We offer a full refund guarantee anytime before the official launch if the tool doesn't perfectly match your requirements.
            </p>

            <hr style="border: 0; border-top: 1px solid #eee; margin: 25px 0;">

            <p><strong>What's next?</strong><br>
            In the coming days, you will receive an invitation to our private beta phase. There, you can test the first features and provide direct feedback.</p>
            
            <p>Stay secure,</p>
            <p><strong>Derek</strong><br>Founder, DataCloak AI</p>
          </div>
          
          <div style="text-align: center; padding: 20px; font-size: 11px; color: #aaa;">
            © ${new Date().getFullYear()} DataCloak AI – Built for Privacy in EU/DACH<br>
            You received this email because you joined our waitlist.
          </div>
        </div>
      `
    };

    await transporter.sendMail(mailOptions);

    return NextResponse.json({
      success: true,
      sentTo: emails.length,
    });
  } catch (error: any) {
    console.error('Email Error:', error);
    return NextResponse.json(
      { error: 'Could not send emails', details: error.message },
      { status: 500 }
    );
  }
}
