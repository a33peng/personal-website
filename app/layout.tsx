import type { Metadata } from "next";
import { Raleway } from "next/font/google";
import "./globals.css";

const raleway = Raleway({ 
  subsets: ["latin"],
  variable: "--font-raleway",
  weight: ["300", "400", "700"],
})

export const metadata: Metadata = {
  title: "Ashley",
  description: "Portfolio",
  icons: {
    icon: '/petal.png', 
  },
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
          antialiased
        `}
      >
        {children}
      </body>
    </html>
  );
}
