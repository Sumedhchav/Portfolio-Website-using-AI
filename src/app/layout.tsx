import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import { Toaster } from "sonner";

const poppins = Poppins({ 
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"]
});

export const metadata: Metadata = {
  title: "Sumedh Chavan | Data Analyst",
  description: "Portfolio of Sumedh Chavan, Data Analyst",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${poppins.className} bg-[#f9fafb] text-gray-900 antialiased`}>
        <Navbar />
        {children}
        <Toaster position="bottom-right" richColors />
      </body>
    </html>
  );
}
