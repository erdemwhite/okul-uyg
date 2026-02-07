"use client";
import { useState } from "react";

export default function Duyurular() {
  
  // 1. STATE: Hangi duyurunun açık olduğunu tutan hafıza
  // Başlangıçta 'null' yani hiçbiri açık değil.
  const [acikId, setAcikId] = useState<number | null>(null);

  // SAHTE VERİ
  const duyurular = [
    {
      id: 1,
      baslik: "Final Sınav Takvimi Açıklandı",
      kategori: "Akademik",
      tarih: "18.01.2026",
      icerik: "2025-2026 Güz Dönemi final sınav takvimi ÖBS sistemi üzerinde yayınlanmıştır. Sınav yerlerinizi kontrol etmeyi unutmayınız. Mazeret sınavları için başvurular 20 Ocak'ta başlayacaktır."
    },
    {
      id: 2,
      baslik: "Kampüs Yemekhane Kartlarında Güncelleme",
      kategori: "İdari",
      tarih: "16.01.2026",
      icerik: "Yemekhane turnike sistemlerinde yapılacak bakım nedeniyle 20 Ocak Pazartesi günü kart yüklemeleri sadece online sistem üzerinden yapılabilecektir. Gişeler kapalı olacaktır."
    },
    {
      id: 3,
      baslik: "Bahar Şenliği Organizasyon Komitesi Başvuruları",
      kategori: "Etkinlik",
      tarih: "15.01.2026",
      icerik: "Bu yıl düzenlenecek Bahar Şenliği'nde görev almak isteyen öğrenci kulüpleri ve bireysel gönüllüler için başvurular SKS Daire Başkanlığına yapılacaktır. Son başvuru tarihi 1 Şubat."
    },
    {
      id: 4,
      baslik: "Kütüphane Çalışma Saatleri Değişikliği",
      kategori: "Genel",
      tarih: "12.01.2026",
      icerik: "Final haftası sebebiyle merkez kütüphanemiz 7/24 hizmet verecektir. Lütfen sessizlik kurallarına azami özen gösteriniz. Çay ve kahve ikramı gece 00:00 - 02:00 arasında yapılacaktır."
    }
  ];

  // Tıklama olayını yöneten fonksiyon
  const tiklamaYonet = (id: number) => {
    // Eğer zaten açık olana tıkladıysa kapatsın (null yapsın)
    // Değilse o duyuruyu açsın
    if (acikId === id) {
      setAcikId(null);
    } else {
      setAcikId(id);
    }
  };

  return (
    <div className="p-4 max-w-3xl mx-auto">
      <h1 className="text-2xl font-bold text-[#003366] mb-6 flex items-center gap-2">
        📢 Duyurular
      </h1>

      <div className="flex flex-col gap-4">
        {duyurular.map((duyuru) => (
          
          // HER BİR DUYURU KUTUSU
          <div 
            key={duyuru.id} 
            className={`bg-white rounded-xl shadow-sm border transition-all duration-300 overflow-hidden ${
                acikId === duyuru.id ? "border-blue-400 ring-2 ring-blue-100" : "border-gray-200"
            }`}
          >
            
            {/* Üst Kısım (Tıklanabilir Alan) */}
            <button 
              onClick={() => tiklamaYonet(duyuru.id)}
              className="w-full flex items-center justify-between p-5 text-left bg-white hover:bg-gray-50 transition"
            >
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-1">
                   {/* Kategori Etiketi */}
                   <span className="text-[10px] uppercase font-bold tracking-wider px-2 py-1 bg-gray-100 text-gray-600 rounded">
                     {duyuru.kategori}
                   </span>
                   <span className="text-xs text-gray-400">{duyuru.tarih}</span>
                </div>
                <h2 className="font-bold text-gray-800 text-lg">{duyuru.baslik}</h2>
              </div>

              {/* Ok İkonu (Açıksa dönecek) */}
              <div className={`transition-transform duration-300 ${acikId === duyuru.id ? "rotate-180" : ""}`}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5 text-gray-400">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                </svg>
              </div>
            </button>

            {/* Gizli İçerik (Sadece ID eşleşirse görünür) */}
            {acikId === duyuru.id && (
              <div className="p-5 pt-0 text-gray-600 text-sm leading-relaxed border-t border-dashed border-gray-100 mt-2 animate-in slide-in-from-top-2 fade-in duration-300">
                <br/>
                {duyuru.icerik}
                
                {/* Altına sahte bir buton koyalım */}
                <div className="mt-4">
                    <button className="text-blue-600 font-medium hover:underline text-xs flex items-center gap-1">
                        Detaylı İncele →
                    </button>
                </div>
              </div>
            )}

          </div>

        ))}
      </div>
    </div>
  );
}