import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Auratech | Yönetim ve Enerji Mühendisliği Hizmetleri",
  description:
    "Auratech; veriyi, sistemleri ve süreçleri ölçülebilir iş sonuçlarına dönüştüren yönetim ve enerji mühendisliği şirketidir.",
  other: {
    "codex-preview": "development",
  },
  icons: {
    icon: {
      url: "/auratech-a-favicon-v2.png",
      type: "image/png",
      sizes: "512x512",
    },
    shortcut: "/auratech-a-favicon-v2.png",
    apple: "/auratech-a-favicon-v2.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
