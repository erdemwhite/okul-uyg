import { NextResponse } from "next/server";
import dbConnect from "@/lib/db";
import Yemek from "@/models/Yemek"; // Az önce yaptığın modeli çağırıyoruz

// GET: Yemek listesini çek
export async function GET() {
  try {
    await dbConnect();
    // Tüm yemekleri getir, tarihe göre sırala
    const yemekler = await Yemek.find({}).sort({ tarih: 1 }); 
    return NextResponse.json(yemekler);
  } catch (error) {
    return NextResponse.json({ error: "Veri çekilemedi" }, { status: 500 });
  }
}

// POST: Yeni yemek ekle
export async function POST(request: Request) {
  try {
    await dbConnect();
    const body = await request.json(); // Gelen veriyi oku
    const yeniYemek = await Yemek.create(body); // Veritabanına yaz
    return NextResponse.json(yeniYemek, { status: 201 });
  } catch (error) {
    return NextResponse.json({ error: "Kaydedilemedi" }, { status: 500 });
  }
}

export async function DELETE(request: Request) {
  try {
    await dbConnect();

    // Frontend'den silinecek ID'yi alıyoruz
    const { id } = await request.json();

    // MongoDB'den o ID'ye sahip kaydı bul ve sil
    await Yemek.findByIdAndDelete(id);

    return NextResponse.json({ message: "Silindi!" }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ message: "Hata!" }, { status: 500 });
  }
}