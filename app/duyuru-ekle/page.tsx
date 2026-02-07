"use client"; // Form olduğu için Client Component olmak zorunda
import { useState } from "react";
import { useRouter } from "next/navigation"; // Sayfa yönlendirmesi için

export default function DuyuruEkle() {
  const router = useRouter();
  
  // Form verilerini tutacağımız değişkenler
  const [formData, setFormData] = useState({
    baslik: "",
    icerik: "",
    onemli: false,
  });
  const [yukleniyor, setYukleniyor] = useState(false);

  // Form gönderilince çalışacak fonksiyon
  const kaydet = async (e: React.FormEvent) => {
    e.preventDefault(); // Sayfanın yenilenmesini engelle
    setYukleniyor(true);

    try {
      // API'ye veriyi gönderiyoruz
      const response = await fetch("/api/duyurular", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        alert("✅ Duyuru başarıyla eklendi!");
        router.push("/"); // Ana sayfaya geri dön
        router.refresh(); // Ana sayfadaki verileri yenile
      } else {
        alert("❌ Bir hata oluştu!");
      }
    } catch (error) {
      console.error(error);
      alert("Bağlantı hatası!");
    } finally {
      setYukleniyor(false);
    }
  };

  return (
    <div className="max-w-2xl mx-auto mt-10 p-8 bg-white rounded-2xl shadow-lg border border-gray-100">
      <h1 className="text-3xl font-bold text-[#003366] mb-6 flex items-center gap-3">
        📢 Yeni Duyuru Ekle
      </h1>

      <form onSubmit={kaydet} className="flex flex-col gap-5">
        
        {/* Başlık Alanı */}
        <div>
          <label className="block text-gray-700 font-bold mb-2">Duyuru Başlığı</label>
          <input
            type="text"
            required
            placeholder="Örn: Vize Sınav Tarihleri Açıklandı"
            className="w-full p-4 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
            value={formData.baslik}
            onChange={(e) => setFormData({ ...formData, baslik: e.target.value })}
          />
        </div>

        {/* İçerik Alanı */}
        <div>
          <label className="block text-gray-700 font-bold mb-2">İçerik</label>
          <textarea
            required
            rows={4}
            placeholder="Duyuru detaylarını buraya yazın..."
            className="w-full p-4 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
            value={formData.icerik}
            onChange={(e) => setFormData({ ...formData, icerik: e.target.value })}
          />
        </div>

        {/* Önemli mi? Checkbox */}
        <div className="flex items-center gap-3 bg-gray-50 p-4 rounded-xl cursor-pointer" onClick={() => setFormData({ ...formData, onemli: !formData.onemli })}>
          <div className={`w-6 h-6 border-2 rounded-md flex items-center justify-center transition ${formData.onemli ? 'bg-red-500 border-red-500' : 'border-gray-400'}`}>
            {formData.onemli && <span className="text-white font-bold">✓</span>}
          </div>
          <span className="text-gray-700 font-medium select-none">Bu duyuru <span className="text-red-500 font-bold">ÖNEMLİ</span> olarak işaretlensin</span>
        </div>

        {/* Kaydet Butonu */}
        <button
          type="submit"
          disabled={yukleniyor}
          className="bg-[#003366] text-white py-4 rounded-xl font-bold text-lg hover:bg-[#002244] transition active:scale-95 disabled:opacity-50"
        >
          {yukleniyor ? "Kaydediliyor..." : "Duyuruyu Yayınla 🚀"}
        </button>

      </form>
    </div>
  );
}