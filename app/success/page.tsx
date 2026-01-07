// app/success/page.tsx
import { redirect } from "next/navigation";
import Stripe from "stripe";
import SuccessContent from "@/app/success/SuccessContent";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: "2025-12-15.clover",
});

export default async function SuccessPage({
  searchParams,
}: {
  searchParams: Promise<{ session_id?: string }>;
}) {
  const { session_id: sessionId } = await searchParams;

  // Keine Session-ID → sofort weg
  if (!sessionId) {
    redirect("/");
  }

  try {
    const session = await stripe.checkout.sessions.retrieve(sessionId);

    // Nur bei erfolgreich bezahlt weiter
    if (session.payment_status !== "paid") {
      redirect("/");
    }

    // Optional: Hier könntest du jetzt Zugang gewähren, DB updaten, E-Mail triggern etc.
  } catch (error) {
    console.error("Invalid or expired Stripe session:", error);
    redirect("/");
  }

  // Alles gültig → zeige die schöne animierte Seite
  return <SuccessContent />;
}