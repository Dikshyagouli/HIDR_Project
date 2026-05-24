import type { Metadata } from "next";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import { Toaster } from "react-hot-toast";
import Header from "@/components/layout/Header";

export const metadata: Metadata = {
  title: "HIDR Nepal",
  description: "Research and innovation for a sustainable, empowered Nepal.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full flex flex-col bg-white">
        <ClerkProvider>
          <Header />
          {children}
        </ClerkProvider>

        <Toaster toastOptions={{ duration: 1500 }} />
      </body>
    </html>
  );
}