import Link from "next/link";
import dbConnect from "@/lib/db";
import Yemek from "@/models/Yemek";
import YemekItem from "@/components/YemekItem";

// Veritabanından yemekleri çeken fonksiyon
async function getYemekler() {
  try {
    await dbConnect();
    // Tarihe göre sırala (Bugün en üstte olsun dersen tarih: 1 yerine -1 yap)
    const yemekler = await Yemek.find({}).sort({ tarih: 1 }).lean();
    return JSON.parse(JSON.stringify(yemekler));
  } catch (error) {
    console.error("Yemek listesi çekilemedi:", error);
    return [];
  }
}

export default async function YemekListesiPage() {
  const yemekler = await getYemekler();

  return (
    <div className="p-6 max-w-4xl mx-auto">
      
      {/* Üst Başlık ve Ekle Butonu */}
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-3xl font-bold text-[#003366]">🍲 Yemek Listesi</h1>
          <p className="text-gray-500 mt-1">Haftalık yemek programını buradan takip edebilirsin.</p>
        </div>
        
        {/* Ekleme Butonu */}
        <Link 
          href="/yemek-ekle" 
          className="bg-[#003366] text-white px-5 py-3 rounded-xl font-bold hover:bg-blue-900 transition flex items-center gap-2 shadow-lg"
        >
          <span>➕</span> Yemek Ekle
        </Link>
      </div>

      {/* --- LİSTE ALANI --- */}
      <div className="space-y-4">
        
        {yemekler.length === 0 ? (
          <div className="text-center p-10 bg-gray-50 rounded-2xl border-2 border-dashed border-gray-300">
            <p className="text-xl text-gray-500">Henüz yemek listesi eklenmemiş. 🍽️</p>
            <p className="text-sm text-gray-400 mt-2">Sağ üstteki butondan ekleyebilirsin.</p>
          </div>
        ) : (
          yemekler.map((yemek: any) => (
            <YemekItem key={yemek._id} yemek={yemek} />
          ))
        )}

      </div>
    </div>
  );
}