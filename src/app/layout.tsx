import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import App from "./App";
import { Toaster } from "react-hot-toast";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Cart",
  description: "Shopping Cart",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <App>
          <Toaster/>
          {children}
        </App></body>
    </html>
  );
}
