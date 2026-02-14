import Link from "next/link";
import dbConnect from "@/lib/db";
import Duyuru from "@/models/Duyuru";
import Yemek from "@/models/Yemek";
import DuyuruItem from "@/components/DuyuruItem";
import YemekItem from "@/components/YemekItem";

// Veritabanından verileri çeken fonksiyon
async function getDuyurular() {
  try {
    await dbConnect();
    // En son eklenen 3 duyuruyu getir (tarihe göre tersten sırala)
    const duyurular = await Duyuru.find({}).sort({ tarih: -1 }).limit(3).lean();
    return JSON.parse(JSON.stringify(duyurular));
  } catch (error) {
    console.error("Duyuru çekme hatası:", error);
    return [];
  }
}

// Yemekleri çeken fonksiyon
async function getYemekler() {
  try {
    await dbConnect();
    // En son eklenen 3 yemeği getir (tarihe göre tersten sırala)
    const yemekler = await Yemek.find({}).sort({ tarih: -1 }).limit(3).lean();
    return JSON.parse(JSON.stringify(yemekler));
  } catch (error) {
    console.error("Yemek çekme hatası:", error);
    return [];
  }
}

export default async function Home() {
  // Verileri çekelim
  const duyurular = await getDuyurular();
  const yemekler = await getYemekler();

  return (
    <div className="flex flex-col gap-6">
      
      {/* --- MAVİ ÜST KISIM (Welcome Header) --- */}
      <div className="bg-[#003366] text-white p-6 rounded-3xl shadow-lg flex flex-col md:flex-row md:items-center md:justify-between gap-6">
        
        {/* Profil ve Selamlama */}
        <div className="flex items-center gap-4">
          <div className="w-16 h-16 bg-white text-[#003366] rounded-full flex items-center justify-center font-bold text-2xl border-4 border-blue-400 shadow-md">
             EK
          </div>
          <div>
             <h2 className="text-2xl font-bold">Merhaba, Erdem! 👋</h2>
             <p className="opacity-80 text-sm md:text-base">Bilgisayar Mühendisliği - 1. Sınıf</p>
          </div>
        </div>

        {/* İstatistikler */}
        <div className="flex gap-4">
            <div className="bg-[#004080] p-3 rounded-xl min-w-[100px] text-center shadow-inner">
                <div className="text-xs opacity-70 mb-1">Ortalama</div>
                <div className="font-bold text-2xl">3.45</div>
            </div>
            <div className="bg-[#004080] p-3 rounded-xl min-w-[100px] text-center shadow-inner">
                <div className="text-xs opacity-70 mb-1">Kredi</div>
                <div className="font-bold text-2xl">30</div>
            </div>
        </div>

      </div>

      {/* --- MENU GRID (Butonlar) --- */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        
        {/* Sınav Sonuçları */}
        <Link href="/sinav-sonuclari" className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 flex flex-col items-center hover:shadow-lg hover:-translate-y-1 transition duration-300 group">
          <div className="w-14 h-14 bg-yellow-50 text-yellow-600 rounded-full flex items-center justify-center text-2xl mb-3 group-hover:bg-yellow-500 group-hover:text-white transition shadow-sm">
            📊
          </div>
          <h3 className="font-bold text-gray-700 text-center">Sınav Sonuçları</h3>
        </Link>

        {/* Ders Programı */}
        <Link href="/ders-programi" className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 flex flex-col items-center hover:shadow-lg hover:-translate-y-1 transition duration-300 group">
           <div className="w-14 h-14 bg-blue-50 text-blue-600 rounded-full flex items-center justify-center text-2xl mb-3 group-hover:bg-blue-600 group-hover:text-white transition shadow-sm">
            📅
          </div>
          <h3 className="font-bold text-gray-700 text-center">Ders Programı</h3>
        </Link>

        {/* Yemek Listesi */}
        <Link href="/yemek-listesi" className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 flex flex-col items-center hover:shadow-lg hover:-translate-y-1 transition duration-300 group">
           <div className="w-14 h-14 bg-red-50 text-red-600 rounded-full flex items-center justify-center text-2xl mb-3 group-hover:bg-red-600 group-hover:text-white transition shadow-sm">
            🍲
          </div>
          <h3 className="font-bold text-gray-700 text-center">Yemek Listesi</h3>
        </Link>

        {/* Duyurular Linki */}
        <Link href="/duyurular" className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 flex flex-col items-center hover:shadow-lg hover:-translate-y-1 transition duration-300 group">
           <div className="w-14 h-14 bg-purple-50 text-purple-600 rounded-full flex items-center justify-center text-2xl mb-3 group-hover:bg-purple-600 group-hover:text-white transition shadow-sm">
            📢
          </div>
          <h3 className="font-bold text-gray-700 text-center">Duyurular</h3>
        </Link>

      </div>

      {/* --- MONGODB DUYURULAR ALANI --- */}
      <div className="mt-4">
        <div className="flex items-center justify-between mb-4">
  <h3 className="text-xl font-bold text-[#003366] flex items-center gap-2">
    <span>🔔</span> Son Duyurular
  </h3>
  <Link href="/duyuru-ekle" className="text-sm bg-blue-100 text-[#003366] px-4 py-2 rounded-lg font-bold hover:bg-blue-200 transition flex items-center gap-1">
    <span>➕</span> Yeni Ekle
  </Link>
</div>

        <div className="space-y-3">
          {duyurular.length === 0 ? (
            <div className="text-center p-8 bg-gray-50 rounded-xl border border-dashed border-gray-300 text-gray-500">
              Henüz duyuru eklenmemiş.
            </div>
          ) : (
            <div className="space-y-3">
  {duyurular.length === 0 ? (
    <div className="text-center p-8 bg-gray-50 rounded-xl border border-dashed border-gray-300 text-gray-500">
      Henüz duyuru eklenmemiş.
    </div>
  ) : (
    duyurular.map((duyuru: any) => (
      // Artık tüm işi bu bileşen yapıyor 👇
      <DuyuruItem key={duyuru._id} duyuru={duyuru} />
    ))
  )}
</div>
          )}
        </div>
      </div>

      {/* --- SON YEMEKLER ALANI --- */}
      <div className="mt-8">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-xl font-bold text-[#003366] flex items-center gap-2">
            <span>🍲</span> Bu Hafta Yemekler
          </h3>
          <Link href="/yemek-ekle" className="text-sm bg-green-100 text-green-700 px-4 py-2 rounded-lg font-bold hover:bg-green-200 transition flex items-center gap-1">
            <span>➕</span> Yemek Ekle
          </Link>
        </div>

        <div className="space-y-3">
          {yemekler.length === 0 ? (
            <div className="text-center p-8 bg-gray-50 rounded-xl border border-dashed border-gray-300 text-gray-500">
              Henüz yemek eklenmemiş.
            </div>
          ) : (
            <div className="space-y-3">
              {yemekler.map((yemek: any) => (
                <YemekItem key={yemek._id} yemek={yemek} />
              ))}
            </div>
          )}
        </div>
      </div>

    </div>
  );
}