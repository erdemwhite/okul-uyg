"use client";
import { useRouter } from "next/navigation";

export default function YemekItem({ yemek }: { yemek: any }) {
  const router = useRouter();

  const sil = async () => {
    if (!confirm("Bu yemeği silmek istediğine emin misin kanka?")) return;

    try {
      const response = await fetch("/api/yemekler", {
        method: "DELETE",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ id: yemek._id }),
      });

      if (response.ok) {
        router.refresh();
      } else {
        alert("Silinemedi!");
      }
    } catch (error) {
      console.error("Silme hatası:", error);
    }
  };

  return (
    <div className="bg-white p-5 rounded-xl shadow-sm border border-gray-100 flex justify-between items-start gap-4 hover:shadow-md transition group">
      
      {/* Sol taraf: w-full yerine flex-1 yaptık ki butonu sıkıştırmasın */}
      <div className="flex gap-4 items-start flex-1">
        
        {/* Yeşil Çizgi */}
        <div className="mt-1 min-w-[12px] h-3 rounded-full bg-green-500"></div>
        
        <div className="flex-1">
          <h4 className="font-bold text-gray-800 text-base md:text-lg">{yemek.gun}</h4>
          
          {/* Çorba */}
          {yemek.corba && (
            <div className="mt-2 text-sm text-gray-600">
              <span className="text-xs text-gray-400 uppercase font-bold tracking-wider">🍜 Çorba</span>
              <p className="font-semibold text-gray-800">{yemek.corba}</p>
            </div>
          )}

          {/* Ana Yemek */}
          {yemek.anaYemek && (
            <div className="mt-2 text-sm text-gray-600">
              <span className="text-xs text-gray-400 uppercase font-bold tracking-wider">🥘 Ana Yemek</span>
              <p className="font-semibold text-gray-800">{yemek.anaYemek}</p>
            </div>
          )}

          {/* Yan Yemek */}
          {yemek.yanYemek && (
            <div className="mt-2 text-sm text-gray-600">
              <span className="text-xs text-gray-400 uppercase font-bold tracking-wider">🥗 Yan Yemek</span>
              <p className="font-semibold text-gray-800">{yemek.yanYemek}</p>
            </div>
          )}

          {/* Kalori ve Tarih */}
          <div className="mt-3 pt-3 border-t border-gray-100 flex items-center justify-between">
            <span className="text-xs text-gray-400">
              {new Date(yemek.tarih).toLocaleDateString("tr-TR")}
            </span>
            {yemek.kalori && (
              <span className="text-xs font-bold text-orange-600 bg-orange-100 px-3 py-1 rounded-lg">
                🔥 {yemek.kalori} kcal
              </span>
            )}
          </div>
        </div>
      </div>

      {/* Sağ taraf: Sil Butonu */}
      {/* Not: 'opacity-0' ve 'group-hover' sildiğin için buton ARTIK HEP GÖRÜNÜR olacak. Bence böyle kalsın, garanti olur. */}
      <button 
        onClick={sil}
        className="text-gray-400 hover:text-red-500 hover:bg-red-50 p-2 rounded-lg transition duration-200 flex-shrink-0"
        title="Sil"
      >
        🗑️
      </button>

    </div>
  );
}