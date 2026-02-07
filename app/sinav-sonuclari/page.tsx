"use client"
import SinavKarti from "@/components/SinavKarti"

export default function SinavSonuclari(){
    const dersler = [
        {id:1, dersAdi:"Matematik I", vize:10, final:10, sinifOrtalamasi:68.5},
        {id:2, dersAdi:"Temel Fizik", vize:19, final:76, sinifOrtalamasi:68.5},
        {id:3, dersAdi:"Genel Kimya", vize:85, final:70, sinifOrtalamasi:68.5},
        {id:4, dersAdi:"Bilgisayar Programlama", vize:61, final:76, sinifOrtalamasi:68.5},
        {id:5, dersAdi:"İngilizce I", vize:92, final:96, sinifOrtalamasi:68.5},
        {id:6, dersAdi:"Türk Dili I", vize:96, final:100, sinifOrtalamasi:68.5},
    ]

    return(
        // DÜZELTME BURADA: max-w-lg yerine max-w-7xl yazdık (Daha geniş olsun diye)
        <div className="p-4 max-w-7xl mx-auto">
            
            <div className="flex items-center gap-4 mb-6">
                 <h1 className="text-2xl font-bold text-[#003366]">Sınav Sonuçları</h1>
            </div>

            <div className="flex border-b mb-6">
                <div className="px-4 py-2 border-b-2 border-blue-600 text-blue-600 font-bold cursor-pointer">
                    Yarıyıl Sonu
                </div>
                <div className="px-4 py-2 text-gray-400 cursor-pointer">
                      Ara Sınav
                </div>
            </div>

            {/* Grid yapısı gayet güzel, sadece alan dardı, şimdi düzeldi */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {dersler.map((ders)=>(
                    <SinavKarti
                      key={ders.id}
                      dersAdi={ders.dersAdi}
                      vize={ders.vize}
                      final={ders.final}
                      sinifOrtalamasi={ders.sinifOrtalamasi}
                    />
                ))}
            </div>

      </div>
    )
}