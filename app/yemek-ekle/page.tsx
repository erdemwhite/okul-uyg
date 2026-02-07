"use client"
import {useState} from "react"
import { useRouter } from "next/navigation";

export default function YemekEkle(){
    const router = useRouter();

    const [formData, setFormData] = useState({
        gun:"",
        corba:"",
        anaYemek:"",
        yanYemek:"",
        kalori:0,
      });
      const [yukleniyor, setYukleniyor] = useState(false);

      const kaydet = async (e: React.FormEvent)=>{
        e.preventDefault();
        setYukleniyor(true);

        try {
            const response = await fetch("/api/yemekler", {
                method: "POST",
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify(formData),
            });
            if(response.ok){
                alert("✅ Yemek başarıyla eklendi!");
                router.push("/"); 
                router.refresh(); 
            }else{
                alert("❌ Bir hata oluştu!");
            }
        }catch(error){
            console.error(error);
            alert("Bağlantı hatası!");
        }finally {
            setYukleniyor(false);
        }
      };

      const gunler = ["Pazartesi", "Salı", "Çarşamba", "Perşembe", "Cuma", "Cumartesi", "Pazar"];

      return (
        <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
          {/* Decorator Elements */}
          <div className="fixed inset-0 overflow-hidden pointer-events-none">
            <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-pulse"></div>
            <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-pulse"></div>
          </div>

          <div className="relative container mx-auto px-4 py-8 md:py-12">
            {/* Header */}
            <div className="text-center mb-8 md:mb-12">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-2 md:mb-3">
                Yemek Ekle
              </h1>
              <p className="text-slate-400 text-sm md:text-base">Günlük yemek menüsüne yeni yemek ekleyin</p>
            </div>

            {/* Form Container */}
            <div className="max-w-2xl mx-auto">
              <div className="bg-white/10 backdrop-blur-xl rounded-2xl border border-white/20 shadow-2xl p-6 md:p-8 lg:p-10">
                <form onSubmit={kaydet} className="space-y-6 md:space-y-8">
                  
                  {/* Gün Seçimi */}
                  <div className="form-group">
                    <label htmlFor="gun" className="block text-white font-semibold text-sm md:text-base mb-3 pl-1">
                      📅 Gün Seçin
                    </label>
                    <select
                      id="gun"
                      value={formData.gun}
                      onChange={(e) => setFormData({...formData, gun: e.target.value})}
                      required
                      className="w-full px-4 py-3 bg-white/5 border-2 border-white/20 rounded-xl text-white placeholder-slate-400 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/30 transition-all duration-300 text-sm md:text-base"
                    >
                      <option value="" className="bg-slate-800">Gün seçiniz...</option>
                      {gunler.map((g) => (
                        <option key={g} value={g} className="bg-slate-800">{g}</option>
                      ))}
                    </select>
                  </div>

                  {/* Çorba */}
                  <div className="form-group">
                    <label htmlFor="corba" className="block text-white font-semibold text-sm md:text-base mb-3 pl-1">
                      🥣 Çorba
                    </label>
                    <input
                      id="corba"
                      type="text"
                      placeholder="Örn: Yayla Çorbası"
                      value={formData.corba}
                      onChange={(e) => setFormData({...formData, corba: e.target.value})}
                      className="w-full px-4 py-3 bg-white/5 border-2 border-white/20 rounded-xl text-white placeholder-slate-400 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/30 transition-all duration-300 text-sm md:text-base"
                    />
                  </div>

                  {/* Ana Yemek */}
                  <div className="form-group">
                    <label htmlFor="anaYemek" className="block text-white font-semibold text-sm md:text-base mb-3 pl-1">
                      🍖 Ana Yemek
                    </label>
                    <input
                      id="anaYemek"
                      type="text"
                      placeholder="Örn: Kıymalı Pilav"
                      value={formData.anaYemek}
                      onChange={(e) => setFormData({...formData, anaYemek: e.target.value})}
                      required
                      className="w-full px-4 py-3 bg-white/5 border-2 border-white/20 rounded-xl text-white placeholder-slate-400 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/30 transition-all duration-300 text-sm md:text-base"
                    />
                  </div>

                  {/* Yan Yemek */}
                  <div className="form-group">
                    <label htmlFor="yanYemek" className="block text-white font-semibold text-sm md:text-base mb-3 pl-1">
                      🥗 Yan Yemek
                    </label>
                    <input
                      id="yanYemek"
                      type="text"
                      placeholder="Örn: Salatası"
                      value={formData.yanYemek}
                      onChange={(e) => setFormData({...formData, yanYemek: e.target.value})}
                      className="w-full px-4 py-3 bg-white/5 border-2 border-white/20 rounded-xl text-white placeholder-slate-400 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/30 transition-all duration-300 text-sm md:text-base"
                    />
                  </div>

                  {/* Kalori */}
                  <div className="form-group">
                    <label htmlFor="kalori" className="block text-white font-semibold text-sm md:text-base mb-3 pl-1">
                      🔥 Kalori (kcal)
                    </label>
                    <input
                      id="kalori"
                      type="number"
                      placeholder="Örn: 450"
                      value={formData.kalori}
                      onChange={(e) => setFormData({...formData, kalori: parseFloat(e.target.value) || 0})}
                      className="w-full px-4 py-3 bg-white/5 border-2 border-white/20 rounded-xl text-white placeholder-slate-400 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/30 transition-all duration-300 text-sm md:text-base"
                    />
                  </div>

                  {/* Buttons */}
                  <div className="flex flex-col sm:flex-row gap-3 md:gap-4 pt-4 md:pt-6">
                    <button
                      type="submit"
                      disabled={yukleniyor}
                      className="flex-1 px-6 py-3 md:py-4 bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white font-semibold rounded-xl transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed shadow-lg hover:shadow-xl transform hover:scale-105 text-sm md:text-base"
                    >
                      {yukleniyor ? "⏳ Kaydediliyor..." : "✅ Yemek Ekle"}
                    </button>
                    <button
                      type="button"
                      onClick={() => router.push("/")}
                      className="flex-1 px-6 py-3 md:py-4 bg-white/10 hover:bg-white/20 text-white font-semibold rounded-xl border-2 border-white/20 transition-all duration-300 shadow-lg hover:shadow-xl text-sm md:text-base"
                    >
                      ❌ İptal Et
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      )
}