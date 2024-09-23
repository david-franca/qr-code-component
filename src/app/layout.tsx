import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { Providers } from "./providers";

const outfitBold = localFont({
  src: "./fonts/Outfit-Bold.ttf",
  variable: "--font-outfit-bold",
  weight: "700",
});
const outfitRegular = localFont({
  src: "./fonts/Outfit-Regular.ttf",
  variable: "--font-outfit-regular",
  weight: "400",
});

export const metadata: Metadata = {
  title: "QR Code Component",
  description:
    "This is a solution to the QR code component challenge on Frontend Mentor.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <link rel="icon" href="/img/favicon.png" type="image/png" sizes="32x32" />
      <body className={`${outfitBold.variable} ${outfitRegular.variable}`}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
