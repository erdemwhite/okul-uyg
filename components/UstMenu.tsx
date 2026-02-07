"use client";
import Link from "next/link";

export default function UstMenu() {
  return (
    // "hidden md:flex": Mobilde GİZLE (hidden), Orta ve üstü ekranda GÖSTER (flex)
    <div className="hidden md:flex bg-[#003366] text-white h-16 items-center justify-between px-10 shadow-md">
      
      {/* Sol: Logo ve İsim */}
      <div className="flex items-center gap-2">
        <div className="text-2xl">🎓</div>
        <h1 className="font-bold text-lg tracking-wide">BURSA ULUDAĞ ÜNİVERSİTESİ</h1>
      </div>

      {/* Orta: Linkler */}
      <div className="flex gap-8 text-sm font-medium">
        <Link href="/" className="hover:text-blue-300 transition">Ana Sayfa</Link>
        <Link href="/sinav-sonuclari" className="hover:text-blue-300 transition">Sınav Sonuçları</Link>
        <Link href="/ders-programi" className="hover:text-blue-300 transition">Ders Programı</Link>
        <Link href="/duyurular" className="hover:text-blue-300 transition">Duyurular</Link>
        <Link href="/yemek-listesi" className="hover:text-blue-300 transition">Yemek Listesi</Link>
      </div>

      {/* Sağ: Profil Ufaklık */}
      <div className="flex items-center gap-3 bg-[#002244] py-1 px-3 rounded-full">
        <span className="text-xs font-bold">Erdem K.</span>
        <div className="w-8 h-8 bg-gray-200 rounded-full text-blue-900 flex items-center justify-center font-bold text-xs">
          EK
        </div>
      </div>

    </div>
  );
}