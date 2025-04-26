import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import SessionProvider from "next-auth/react"
import AuthProvider from "@/context/AuthProvider";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="">
      <head>
        <title>TanishSaxena.in</title>
      </head>
      <body
        className= {`antialiased   text-white bg-[#F9F6EE] scrollbar scrollbar-white`}
      >
        <AuthProvider>
        {children}
        </AuthProvider>
      </body>
    </html>
  );
}

