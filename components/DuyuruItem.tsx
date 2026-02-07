"use client"; // Burası çok önemli, butona tıklayabilmek için
import { useRouter } from "next/navigation";

export default function DuyuruItem({ duyuru }: { duyuru: any }) {
  const router = useRouter();

  const sil = async () => {
    // Kullanıcıya emin misin diye soralım
    if (!confirm("Bu duyuruyu silmek istediğine emin misin kanka?")) return;

    try {
      // API'ye silme isteği at
      const response = await fetch("/api/duyurular", {
        method: "DELETE",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ id: duyuru._id }), // Silinecek ID'yi gönderiyoruz
      });

      if (response.ok) {
        // Başarılıysa sayfayı yenile ki duyuru ekrandan gitsin
        router.refresh();
      } else {
        alert("Silinemedi!");
      }
    } catch (error) {
      console.error("Silme hatası:", error);
    }
  };

  return (
    <div className={`bg-white p-5 rounded-xl shadow-sm border border-gray-100 flex justify-between items-start gap-4 hover:shadow-md transition group ${duyuru.onemli ? 'border-l-4 border-l-red-500' : ''}`}>
      
      {/* Sol taraf: İçerik */}
      <div className="flex gap-4 items-start w-full">
        <div className={`mt-1 min-w-[10px] h-3 rounded-full ${duyuru.onemli ? 'bg-red-500' : 'bg-blue-500'}`}></div>
        <div>
          <h4 className="font-bold text-gray-800 text-lg">{duyuru.baslik}</h4>
          <p className="text-gray-600 text-sm mt-1 mb-2 line-clamp-2">{duyuru.icerik}</p>
          <span className="text-xs text-gray-400 bg-gray-50 px-2 py-1 rounded-md">
            {new Date(duyuru.tarih).toLocaleDateString("tr-TR")}
          </span>
        </div>
      </div>

      {/* Sağ taraf: Sil Butonu (Sadece üzerine gelince görünür yapalım havalı olsun) */}
      <button 
        onClick={sil}
        className="opacity-0 group-hover:opacity-100 transition text-gray-300 hover:text-red-500 p-2"
        title="Sil"
      >
        🗑️
      </button>

    </div>
  );
}