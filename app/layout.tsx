import type { Metadata, Viewport } from "next";
import { Epilogue, Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";

const epilogue = Epilogue({
  variable: "--font-epilogue",
  subsets: ["latin"],
  weight: ["700", "800", "900"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  weight: ["600"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://thatstorysells.in"),
  title: "Story Sells — 76 Storytelling Frameworks from 30 Books | ₹499",
  description:
    "A fillable PDF workbook with 76 storytelling frameworks distilled from 30 books. Built for marketers, PMs, salespeople who want to get heard. ₹499.",
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
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  themeColor: "#0f0e0d",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${epilogue.variable} ${inter.variable} ${spaceGrotesk.variable}`}
    >
      <body className="min-h-screen bg-canvas text-ink antialiased">
        {children}
      </body>
    </html>
  );
}
