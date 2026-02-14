"use client";
import { usePathname } from "next/navigation";
import { Inter } from "next/font/google";
import "./globals.css";
import Sidebar from "@/components/Sidebar";

const inter = Inter({ subsets: ["latin"] });

// Not: "use client" olduğu için metadata'yı buradan kaldırdık, hata vermesin diye.

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname = usePathname();
  // Eğer adres "/login" ise bu değişken true olur
  const isLoginPage = pathname === "/login";

  return (
    <html lang="tr">
      <body className={`${inter.className} bg-gray-50 flex h-screen overflow-hidden`}>
        
        {/* 1. DÜZELTME: Eğer Login sayfasındaysak Sidebar'ı GİZLE (render etme) */}
        {!isLoginPage && <Sidebar />}

        {/* 2. DÜZELTME: Login sayfasındaysak 'md:ml-64' boşluğunu verme, tam ekran olsun */}
        <main 
          className={`flex-1 overflow-y-auto h-full w-full ${
            isLoginPage ? "" : "md:ml-64"
          }`}
        >
            {children}
        </main>
        
      </body>
    </html>
  );
}