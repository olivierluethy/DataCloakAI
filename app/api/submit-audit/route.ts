import { NextResponse } from 'next/server'
import mysql from 'mysql2/promise'

const pool = mysql.createPool({
  host: process.env.MYSQL_HOST,
  user: process.env.MYSQL_USER,
  password: process.env.MYSQL_PASSWORD,
  database: process.env.MYSQL_DATABASE,
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
})

export async function POST(request: Request) {
  try {
    const { email } = await request.json()

    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return NextResponse.json({ error: 'Invalid email' }, { status: 400 })
    }

    await pool.execute('INSERT IGNORE INTO privacy_audit_emails (email) VALUES (?)', [email])

    // Interner Aufruf – Achtung: relativer Pfad funktioniert nur in manchen Umgebungen
    // Besser: absoluten URL bauen (sicherer auf Vercel/Production)
    const protocol = request.headers.get('x-forwarded-proto') || 'http'
    const host = request.headers.get('host') || 'localhost:3000'
    const bulkUrl = `${protocol}://${host}/api/send-bulk-email`

    const res = await fetch(bulkUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        // Optional: Schutz-Key, damit niemand extern die Route missbrauchen kann
        'x-trigger-secret': process.env.INTERNAL_TRIGGER_SECRET || 'dev-secret',
      },
      body: JSON.stringify({ email }),   // ← nur die eine Adresse
    })

    if (!res.ok) {
      const errorData = await res.json().catch(() => ({}))
      console.error('Bulk-Email-Aufruf fehlgeschlagen:', errorData)
      // Du kannst hier entscheiden: trotzdem success zurückgeben oder Fehler werfen
    }

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error(error)
    return NextResponse.json({ error: 'Server error' }, { status: 500 })
  }
}