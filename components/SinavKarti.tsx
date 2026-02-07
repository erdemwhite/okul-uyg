interface SinavKartiProps {
  dersAdi: string;
  vize: number;
  final: number;
  sinifOrtalamasi: number;
}


export default function SinavKarti({ dersAdi, vize, final, sinifOrtalamasi }: SinavKartiProps) {
  
  
  const ogrenciNotu = (vize * 0.4) + (final * 0.6);
  const renk = ogrenciNotu >= 50 ? "text-green-600" : "text-red-600";
  const fark = Number(ogrenciNotu - sinifOrtalamasi).toFixed(1);
  const farkRenk = ogrenciNotu >= sinifOrtalamasi ? "border-green-500 bg-green-100" : "border-red-500 bg-red-100";

  return (
    <div className="border p-4 rounded-xl shadow-md bg-white mb-4">
    
      <h3 className="font-bold text-lg mb-2">{dersAdi}</h3>
      
      
      <div className="mb-4">
        <div className={`text-3xl font-bold ${renk}`}>
          {ogrenciNotu.toFixed(1)} <span className="text-sm text-gray-400">/ 100</span>
        </div>
        
        
        <div className="w-full h-2 bg-gray-200 rounded-full mt-2 overflow-hidden">
             <div 
               style={{ width: `${ogrenciNotu}%` }} 
               className={`h-full ${ogrenciNotu >= 50 ? 'bg-green-500' : 'bg-red-500'}`}
             ></div>
        </div>
      </div>

      
      <div className="bg-gray-50 p-3 rounded-lg flex justify-between items-center text-sm">
        <span className="text-gray-500">Sınıf Ortalaması:</span>
        <span className="font-bold text-gray-700">{sinifOrtalamasi}</span>
      </div>

      <div className={` p-2 border rounded-lg flex justify-between items-center  ${farkRenk}`}>
        
            <span>Fark : {fark}</span>

        
      </div>
      
    </div>
  );
}