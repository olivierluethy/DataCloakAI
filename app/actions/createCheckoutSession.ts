"use server";

import { redirect } from "next/navigation";
import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: "2025-12-15.clover", // ← Aktuelle stabile Version Stand Januar 2026
});

export async function createCheckoutSession() {
  const session = await stripe.checkout.sessions.create({
    payment_method_types: ["card"],
    line_items: [
      {
        price_data: {
          currency: "eur",
          product_data: {
            name: "DataCloak AI Lifetime Access",
            description: "One-time payment for unlimited lifetime access.",
          },
          unit_amount: 3900, // €39.00
        },
        quantity: 1,
      },
    ],
    mode: "payment",
    success_url: `${process.env.NEXT_PUBLIC_SITE_URL}/success?session_id={CHECKOUT_SESSION_ID}`,
    cancel_url: `${process.env.NEXT_PUBLIC_SITE_URL}/checkout`,
  });

  redirect(session.url!);
}