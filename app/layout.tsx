import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Sidebar from "@/components/Sidebar"; // Yan menümüzü çağırdık

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Öğrenci Otomasyonu",
  description: "Next.js ile geliştirildi",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr">
      <body className={`${inter.className} bg-gray-50 flex h-screen overflow-hidden`}>
        
        {/* SOL MENÜ (Sadece burada çağırıyoruz, her yerde çıkıyor) */}
        <Sidebar />

        {/* SAĞ TARAF: SAYFA İÇERİĞİ */}
        {/* md:ml-64 diyerek menünün genişliği kadar sağa ittik */}
        <main className="flex-1 md:ml-64 overflow-y-auto h-full w-full">
            {children}
        </main>
        
      </body>
    </html>
  );
}