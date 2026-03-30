import type { Metadata } from "next";
import { Geist, Geist_Mono, Raleway, Lora } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const lora = Lora({
  variable: "--font-lora",
  subsets: ["latin"],
  weight: ["400", "600", "700"],
});

const raleway = Raleway({ 
  subsets: ["latin"],
  variable: "--font-raleway",
  weight: ["300", "400", "700"],
})

export const metadata: Metadata = {
  title: "Ashley",
  description: "Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`
          ${geistSans.variable}
          ${geistMono.variable}
          ${raleway.variable}
          ${lora.variable}
          antialiased
        `}
      >
        {children}
      </body>
    </html>
  );
}
