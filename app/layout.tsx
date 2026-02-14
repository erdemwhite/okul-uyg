"use client";

import { usePathname } from "next/navigation";
import { Inter } from "next/font/google";
import "./globals.css";
import Sidebar from "@/components/Sidebar";

// 1. Toastify importlarını ekledik
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname = usePathname();

  // Menünün gizleneceği sayfalar: Ana sayfa (Login) ve Kayıt Ol (Register)
  const isLoginPage = pathname === "/" || pathname === "/register";

  return (
    <html lang="tr">
      <body className={`${inter.className} bg-gray-50 flex h-screen overflow-hidden`}>
        
        {/* 2. Bildirim Kutusu: Buraya ekledik ki her sayfada çalışsın */}
        <ToastContainer 
          position="top-right" 
          autoClose={3000} 
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
        />

        {/* Sidebar: Eğer giriş sayfasındaysak gösterme */}
        {!isLoginPage && <Sidebar />}

        {/* Ana İçerik: Giriş sayfasındaysak tam ekran, değilse soldan boşluk bırak */}
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