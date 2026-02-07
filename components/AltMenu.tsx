"use client";
import Link from "next/link";
import { usePathname } from "next/navigation"; // Hangi sayfada olduğumuzu anlamak için

export default function AltMenu() {
  const pathname = usePathname(); // Şu anki sayfanın adresini alır

  // Aktif sayfa rengini ayarlamak için yardımcı fonksiyon
  const isActive = (path: string) => pathname === path ? "text-blue-400 opacity-100" : "text-white opacity-60";

  return (
    <div className="fixed bottom-0 left-0 w-full h-20 z-50 md:hidden">
      
      {/* Arka Planın Kendisi */}
      <div className="absolute bottom-0 w-full h-16 bg-[#0f172a] shadow-lg flex justify-between items-center px-10 rounded-t-2xl">
        
        {/* --- SOL BUTON: NOTLAR --- */}
        <Link href="/sinav-sonuclari" className={`flex flex-col items-center gap-1 ${isActive("/sinav-sonuclari")}`}>
          {/* Notlar İkonu (SVG) */}
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
          </svg>
          <span className="text-[10px] font-medium">Notlar</span>
        </Link>

        {/* --- SAĞ BUTON: DUYURULAR --- */}
        <Link href="/duyurular" className={`flex flex-col items-center gap-1 ${isActive("/duyurular")}`}>
          {/* Duyuru İkonu (SVG) */}
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M10.34 15.84c-.688-.06-1.386-.09-2.09-.09H7.5a4.5 4.5 0 110-9h.75c.704 0 1.402-.03 2.09-.09 1.85-.163 3.86.563 5.375 1.94 1.516 1.376 2.156 3.757 1.625 5.864-.532 2.107-2.656 3.766-5.375 3.766zM20.25 10.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z" />
          </svg>
          <span className="text-[10px] font-medium">Duyuru</span>
        </Link>

      </div>

      {/* --- ORTA BUTON (EV) - ABSOLUTE İLE ÇİVİLEME --- */}
      {/* Bu buton diğerlerinden bağımsız, ekranın tam ortasına yerleşir */}
      <div className="absolute left-1/2 -translate-x-1/2 -top-2">
        <Link href="/" className="flex items-center justify-center w-16 h-16 bg-[#0f172a] rounded-full border-[6px] border-gray-100 shadow-2xl">
          {/* Ev İkonu (SVG) */}
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-8 h-8 text-white">
            <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
          </svg>
        </Link>
      </div>

    </div>
  );
}