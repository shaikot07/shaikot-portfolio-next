import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Toaster } from "sonner";
import NavBar from "@/Components/NavBar";
import NavBarTow from "@/Components/NavBarTow";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html suppressHydrationWarning={true} lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
           <header>
          <NavBar />
          {/* <NavBarTow /> */}
        </header>
        {children}
         {/* Sonner toast */}
         <Toaster />
      </body>
       
    </html>
  );
}
