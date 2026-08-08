import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Auratech | Management and Energy Engineering Services",
  description:
    "Auratech turns data, systems and processes into measurable business results through management and energy engineering services.",
  alternates: {
    canonical: "/en",
    languages: {
      "tr-TR": "/",
      "en": "/en",
    },
  },
};

export default function EnglishLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}
