import type { Metadata } from "next";
import { Raleway, Lora } from "next/font/google";
import "./globals.css";

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
