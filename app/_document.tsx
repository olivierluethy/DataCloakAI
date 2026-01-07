import { Html, Head, Main, NextScript } from "next/document";
import type React from "react"
import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import Script from "next/script"
import "./globals.css"
import { Toaster } from "sonner"
// app/_document.tsx

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        {/* GTM Head Script */}
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
              new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
              'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-WHKT7S7R');`,
          }}
        />
      </Head>
      <body>
        {/* GTM Noscript direkt nach <body> */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-WHKT7S7R"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>

        <Main />        {/* Hier wird dein layout.tsx Content gerendert */}
        <NextScript />  {/* Next.js Scripts */}
      </body>
    </Html>
  );
}
