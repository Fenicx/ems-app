import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Space_Grotesk } from "next/font/google";
import "./globals.css";

const jakarta = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
});

export const metadata: Metadata = {
  title: "POMO Botanicals — Wild Harvested Sparkling Craft Soda",
  description:
    "Fermented with cold-extracted heirloom fruits, wild mountain herbs, and crisp alpine spring water. Low sugar, vibrant effervescence.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${jakarta.variable} ${spaceGrotesk.variable} scroll-smooth antialiased`}
    >
      <body className="min-h-screen bg-[#F5F7F2] text-[#222926] font-sans selection:bg-[#F3E97A] selection:text-[#13221C]">
        {children}
      </body>
    </html>
  );
}
