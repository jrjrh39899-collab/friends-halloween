import type { Metadata } from "next";
import { Cinzel_Decorative, Cormorant_Garamond, Inter } from "next/font/google";
import "./globals.css";

const cinzel = Cinzel_Decorative({
  weight: ["400", "700", "900"],
  subsets: ["latin"],
  variable: "--font-cinzel",
  display: "swap",
});

const cormorant = Cormorant_Garamond({
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin", "cyrillic"],
  variable: "--font-cormorant",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin", "cyrillic"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "С Хеллоуином, Банда! 🎃👻 Всем моим друзьям и знакомым",
  description: "Самое зажигательное и атмосферное хеллоуинское поздравление для всех моих близких, друзей и знакомых!",
  icons: {
    icon: "data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='.9em' font-size='90'>🎃</text></svg>",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="ru"
      className={`${cinzel.variable} ${cormorant.variable} ${inter.variable} scroll-smooth`}
    >
      <body className="min-h-screen bg-[var(--bg)] text-[var(--text)] font-sans antialiased overflow-x-hidden selection:bg-orange-500/30 selection:text-orange-200">
        {children}
      </body>
    </html>
  );
}
