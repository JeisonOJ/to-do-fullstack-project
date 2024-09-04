import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Header from "./components/Header";
import "./globals.css";
import "boxicons/css/boxicons.min.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "To-do App",
  description: "Add, edit, and delete tasks",
  keywords: [
    "todo",
    "task",
    "to-do",
    "list",
    "note",
    "nextjs",
    "react",
    "typescript",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} flex flex-col min-h-screen`}>
        <Header />
        <main className="flex-grow bg-gradient-to-r from-purple-100 to-pink-100">{children}</main>
      </body>
    </html>
  );
}
