"use client";

import { KindeProvider } from "@kinde-oss/kinde-auth-nextjs";
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

// export const metadata = {
//   title: "First Next App",
//   description: "My first next js app",
// };

export default function RootLayout({ children }) {
  return (
    <KindeProvider>
      <html lang="en">
        <body
          className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        >
          <main className="min-h-screen">{children}</main>
        </body>
      </html>
    </KindeProvider>
  );
}
