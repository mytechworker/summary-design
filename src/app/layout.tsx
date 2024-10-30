import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const hankenGroteskMedium = localFont({
  src: "./fonts/static/HankenGrotesk-Medium.ttf",
  weight: "500",
  variable: "--font-hanken-grotesk-500",
});

const hankenGroteskBold = localFont({
  src: "./fonts/static/HankenGrotesk-Bold.ttf",
  weight: "700",
  variable: "--font-hanken-grotesk-700",
});

const hankenGroteskExtraBold = localFont({
  src: "./fonts/static/HankenGrotesk-ExtraBold.ttf",
  weight: "800",
  variable: "--font-hanken-grotesk-800",
});

export const metadata: Metadata = {
  title: "Summary",
  description: "Summary card design",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${hankenGroteskMedium.variable} ${hankenGroteskBold.variable} ${hankenGroteskExtraBold.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
