import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const hankenGrotesk = localFont({
  src: "./fonts/HankenGrotesk-VariableFont_wght.ttf",
  display: "swap",
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
      <body className={`${hankenGrotesk.className} antialiased`}>
        {children}
      </body>
    </html>
  );
}
