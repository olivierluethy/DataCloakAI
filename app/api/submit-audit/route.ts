import { NextResponse } from 'next/server'
import mysql from 'mysql2/promise'
import nodemailer from 'nodemailer'

const pool = mysql.createPool({
  host: process.env.MYSQL_HOST,
  user: process.env.MYSQL_USER,
  password: process.env.MYSQL_PASSWORD,
  database: process.env.MYSQL_DATABASE,
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
})

const transporter = nodemailer.createTransport({
  service: 'gmail',
  host: 'smtp.gmail.com',
  port: 587,
  secure: false,
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_APP_PASSWORD,
  },
})

export async function POST(request: Request) {
  try {
    const { email } = await request.json()

    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return NextResponse.json({ error: 'Invalid email' }, { status: 400 })
    }

    // 1. In DB speichern
    await pool.execute('INSERT IGNORE INTO privacy_audit_emails (email) VALUES (?)', [email])

    // 2. Persönliche Willkommens-/Bestätigungs-Mail nur an diese eine Adresse
    const mailOptions = {
      from: `"DataCloak AI | Early Access" <${process.env.EMAIL_USER}>`,
      to: email,  // ← direkt an den Neuen!
      subject: '🔒 Willkommen bei DataCloak AI – Dein Early Access ist aktiv!',
      html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: auto; color: #111; line-height: 1.6;">
          <div style="background-color: #000; padding: 40px; text-align: center; border-radius: 20px 20px 0 0;">
            <h1 style="color: #fff; margin: 0; font-size: 24px;">You're on Board!</h1>
            <p style="color: #00FFCC; font-weight: bold; margin-top: 10px;">Early Access Status: CONFIRMED</p>
          </div>
          
          <div style="padding: 30px; border: 1px solid #eee; border-top: none; border-radius: 0 0 20px 20px;">
            <p>Hallo,</p>
            <p>Vielen Dank, dass du dich für <strong>DataCloak AI</strong> eingetragen hast. Deine E-Mail ist jetzt in unserer exklusiven Early-Access-Liste.</p>
            
            <p><strong>Was passiert als Nächstes?</strong><br>
            In den kommenden Tagen schicken wir dir die Einladung zur Private Beta – dort kannst du die ersten Features testen und Feedback geben.</p>
            
            <p>Bleib sicher,</p>
            <p><strong>Derek</strong><br>Founder, DataCloak AI</p>

            <hr style="border: 0; border-top: 1px solid #eee; margin: 30px 0;" />

            <p style="font-size: 13px; color: #888; text-align: center;">
              © ${new Date().getFullYear()} DataCloak AI – Built for Privacy in EU/DACH<br>
              Falls du das nicht warst, ignoriere diese Mail einfach.
            </p>
          </div>
        </div>
      `,
    }

    await transporter.sendMail(mailOptions)

    return NextResponse.json({ success: true })
  } catch (error: any) {
    console.error('Fehler beim Anmelden / Mail-Versand:', error)
    // Optional: Unterscheide DB- vs Mail-Fehler für besseres Logging
    return NextResponse.json(
      { error: 'Etwas ist schiefgelaufen – bitte versuche es später erneut' },
      { status: 500 }
    )
  }
}