import { NextResponse } from 'next/server';

// Bu bizim sahte veritabanımız
export async function GET() {
  const yemekListesi = [
    {
      id: 1,
      gun: "Pazartesi",
      tarih: "15.01.2026",
      menu: ["Mercimek Çorbası", "Orman Kebabı", "Pirinç Pilavı", "Ayran"],
      kalori: 850
    },
    {
      id: 2,
      gun: "Salı",
      tarih: "16.01.2026",
      menu: ["Ezogelin Çorbası", "Izgara Köfte", "Bulgur Pilavı", "Kemalpaşa Tatlısı"],
      kalori: 920
    },
    {
      id: 3,
      gun: "Çarşamba",
      tarih: "17.01.2026",
      menu: ["Domates Çorbası", "Tavuk Sote", "Makarna", "Meyve"],
      kalori: 780
    },
    {
      id: 4,
      gun: "Perşembe",
      tarih: "18.01.2026",
      menu: ["Yayla Çorbası", "Kuru Fasulye", "Şehriyeli Pilav", "Turşu"],
      kalori: 890
    },
    {
      id: 5,
      gun: "Cuma",
      tarih: "19.01.2026",
      menu: ["Mantar Çorbası", "Balık Tava", "Roka Salatası", "Helva"],
      kalori: 750
    },
  ];

  // Gerçekçi olsun diye 1 saniye bekletelim (Loading ekranını görmek için)
  await new Promise(resolve => setTimeout(resolve, 1000));

  return NextResponse.json(yemekListesi);
}