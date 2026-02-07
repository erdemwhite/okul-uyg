"use client";
import DersKarti from "@/components/DersKarti";

export default function DersProgrami(){

const dersler = [
    {id:1, dersIsmi: "Matematik I", gun:"Pazartesi", saat:10, derslik:"D101"},
    {id:2, dersIsmi: "Temel Fizik", gun:"Salı", saat:12, derslik:"F202"},
    {id:3, dersIsmi: "Genel Kimya", gun:"Çarşamba", saat:14, derslik:"K303"},
    {id:4, dersIsmi: "Bilgisayar Programlama", gun:"Perşembe", saat:16, derslik:"B404"},
    {id:5, dersIsmi: "İngilizce I", gun:"Cuma", saat:10, derslik:"E505"},
    {id:6, dersIsmi: "Türk Dili I", gun:"Cuma", saat:12, derslik:"T606"},
]

    return(
        <div className="p-4 max-w-7xl mx-auto">
            <div className="flex items-center gap-4 mb-6">
                 <h1 className="text-2xl font-bold text-[#003366]">Ders Programı</h1>
                 
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {dersler.map((ders)=>(
                    <DersKarti
                     key={ders.id} 
                     dersIsmi={ders.dersIsmi}
                     gun={ders.gun}
                     saat={ders.saat}
                     derslik={ders.derslik}
                    />
                ))}
            </div>
        </div>


    )




}