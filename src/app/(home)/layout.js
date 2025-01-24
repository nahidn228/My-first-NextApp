import Footer from "@/component/Footer";
import Navbar from "@/component/Navbar";
import { Geist, Geist_Mono } from "next/font/google";
import { AuthProvider } from "../AuthProvider";
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
    <AuthProvider>
      <main
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navbar />
        <section className="min-h-screen">{children}</section>
        <Footer />
      </main>
    </AuthProvider>
  );
}
