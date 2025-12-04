"use client";

import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import { AuthProvider } from "@/lib/auth-context";
import { usePathname } from "next/navigation";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

function LayoutContent({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const isInvestorPortal = pathname?.startsWith('/investors') && pathname !== '/investors';

  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <head>
        <title>Balvia Properties</title>
        <meta name="description" content="Multifamily Developer and Operator" />
      </head>
      <body className="antialiased bg-background text-foreground font-sans flex flex-col min-h-screen">
        {!isInvestorPortal && <Navbar />}
        <main className={!isInvestorPortal ? "flex-grow pt-20" : "flex-grow"}>
          {children}
        </main>
        {!isInvestorPortal && <Footer />}
      </body>
    </html>
  );
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <AuthProvider>
      <LayoutContent>{children}</LayoutContent>
    </AuthProvider>
  );
}
