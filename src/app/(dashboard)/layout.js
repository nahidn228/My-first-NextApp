import { Geist, Geist_Mono } from "next/font/google";
import "./../globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "First Next App",
  description: "My first next js app",
};

export default function HomeLayout({ children }) {
  return (
    <>
      <main
        className={`${geistSans.variable} ${geistMono.variable} antialiased grid grid-cols-12`}
      >
        <div className="col-span-2 bg-amber-700 min-h-screen">side bar</div>
        <div className="col-span-10">{children}</div>
      </main>
    </>
  );
}
