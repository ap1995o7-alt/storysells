import type { Metadata, Viewport } from "next";
import Script from "next/script";
import {
  Poppins,
  DM_Sans,
  DM_Serif_Display,
  JetBrains_Mono,
} from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["700", "800"],
  display: "swap",
});

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  display: "swap",
});

const dmSerifDisplay = DM_Serif_Display({
  variable: "--font-dm-serif-display",
  subsets: ["latin"],
  weight: ["400"],
  style: ["italic", "normal"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  weight: ["400", "500"],
  display: "swap",
});

const GA_ID = "G-TJ53W8VQ2P";
const META_PIXEL_ID = "950228787793124";

export const metadata: Metadata = {
  metadataBase: new URL("https://thatstorysells.in"),
  title:
    "Story Sells — 76 Storytelling Frameworks from 30 Books | ₹499",
  description:
    "A fillable PDF workbook with 76 storytelling frameworks distilled from 30 books. Built for marketers, PMs, salespeople, founders who want to get heard. ₹499.",
  openGraph: {
    title: "Story Sells — The Storytelling Playbook",
    description:
      "76 frameworks. 30 books. 191 pages. The workbook that teaches you how to make people care when you speak.",
    images: ["/og-image.jpg"],
    type: "website",
    locale: "en_IN",
    siteName: "Story Sells",
  },
  twitter: {
    card: "summary_large_image",
    title: "Story Sells — The Storytelling Playbook",
    description:
      "76 frameworks. 30 books. 191 pages. The workbook that teaches you how to make people care when you speak.",
    images: ["/og-image.jpg"],
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: "#0F0E0D",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${poppins.variable} ${dmSans.variable} ${dmSerifDisplay.variable} ${jetbrainsMono.variable}`}
    >
      <body className="min-h-screen bg-background text-foreground antialiased">
        {children}

        {/* Google Analytics (GA4) — loaded after page becomes interactive
            so it never blocks paint or LCP. */}
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
          strategy="afterInteractive"
        />
        <Script id="ga-init" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_ID}');
          `}
        </Script>

        {/* Meta Pixel base code. PageView fires automatically on init.
            InitiateCheckout and Purchase events are fired manually from
            buy-button.tsx and the /thank-you page. */}
        <Script id="meta-pixel" strategy="afterInteractive">
          {`
            !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window,document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', '${META_PIXEL_ID}');
            fbq('track', 'PageView');
          `}
        </Script>
        <noscript>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            height="1"
            width="1"
            style={{ display: "none" }}
            src={`https://www.facebook.com/tr?id=${META_PIXEL_ID}&ev=PageView&noscript=1`}
            alt=""
          />
        </noscript>
      </body>
    </html>
  );
}
