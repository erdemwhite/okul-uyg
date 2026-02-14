"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Sidebar(){
    const pathname = usePathname();
    

    if (pathname === "/login") {
        return null; // Eğer login sayfasındaysak, menüyü çizme!
       }

    const menuler = [
        {
            isim : "Ana Sayfa",
            adres:"/dashboard",
            ikon : (
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5"><path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" /></svg>  
            ),
        },
        {
            isim: "Sınav Sonuçları",
            adres: "/sinav-sonuclari",
            ikon: (
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5"><path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0l-8 -8z" /></svg>
            ),
        },
        {
            isim: "Ders Programı",
            adres: "/ders-programi",
            ikon: (
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5"><path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5" /></svg>
            ),
        },
        {
            isim: "Duyurular",
            adres: "/duyurular",
            ikon: (
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5"><path strokeLinecap="round" strokeLinejoin="round" d="M10.34 15.84c-.688-.06-1.386-.09-2.09-.09H7.5a4.5 4.5 0 110-9h.75c.704 0 1.402-.03 2.09-.09m0 9.18c.253.962.584 1.892.985 2.783.247.55.06 1.21-.463 1.511l-.657.38c-.551.318-1.26.117-1.527-.461a20.845 20.845 0 01-1.44-4.282m3.102.069a18.03 18.03 0 01-.59-4.59c0-1.586.205-3.124.59-4.59m0 9.18a23.848 23.848 0 018.835 2.535M10.34 6.66a23.847 23.847 0 018.835-2.535m0 0A23.74 23.74 0 0018.795 3m.38 1.125a23.91 23.91 0 011.014 5.395m-1.014 8.855c-.118.38-.245.754-.38 1.125m.38-1.125a23.91 23.91 0 001.014-5.395m0-3.467c.006.896.014 1.794.014 2.697 0 .903-.008 1.801-.014 2.697m-4.565-5.394a23.946 23.946 0 01-2.022-2.316" /></svg>
            ),
        },
        {
            isim: "Yemek Listesi",
            adres: "/yemek-listesi",
            ikon: (
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5"><path strokeLinecap="round" strokeLinejoin="round" d="M8.25 18.75a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 01-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h1.125c.621 0 1.126-.504 1.126-1.125V14.25m-17.25 4.5a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h1.125c.621 0 1.125-.504 1.125-1.125V14.25m-17.25 4.5a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0" /></svg>
        ),
        }
    ];

    return(
        // Mobilde gizli (hidden), PC'de solda sabit (md:flex)
    <aside className="hidden md:flex flex-col w-64 bg-[#003366] text-white h-screen fixed left-0 top-0 overflow-y-auto">
      
      {/* LOGO ALANI */}
      <div className="p-6 border-b border-blue-800 flex items-center gap-3">
        <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-[#003366] font-bold text-xl">
          Ü
        </div>
        <div className="font-bold text-lg tracking-wide">ÖĞRENCİ OTOMASYONU</div>
      </div>

      {/* MENÜ LİNKLERİ */}
      <nav className="flex-1 p-4 space-y-2">
        {menuler.map((item) => (
          <Link
            key={item.adres}
            href={item.adres}
            className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-colors duration-200 ${
              pathname === item.adres
                ? "bg-blue-500 text-white shadow-md font-medium" // Aktif Sayfa Rengi
                : "text-blue-100 hover:bg-blue-800 hover:text-white" // Pasif Sayfa Rengi
            }`}
          >
            {item.ikon}
            {item.isim}
          </Link>
        ))}
      </nav>

      {/* ALT KISIM: PROFİL */}
      <div className="p-4 border-t border-blue-800">
        <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center font-bold">
                EK
            </div>
            <div>
                <div className="text-sm font-bold">Erdem Kuşcu</div>
                <div className="text-xs text-blue-200">Bilgisayar Müh.</div>
            </div>
        </div>
      </div>
    </aside>

    );
}