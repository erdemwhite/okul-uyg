import { NextResponse } from "next/server";
import dbConnect from "@/lib/db";
import Duyuru from "@/models/Duyuru"; // Yeni oluşturduğumuz modeli çağırdık

export async function GET() {
  try {
    await dbConnect();

    // Veritabanına yeni bir kayıt ekleyelim
    const yeniDuyuru = await Duyuru.create({
      baslik: "İlk Veritabanı Duyurusu! 🎉",
      icerik: "Bu duyuru MongoDB üzerinden geliyor kanka. Sistem çalışıyor!",
      onemli: true,
    });

    return NextResponse.json(
      { message: "✅ Duyuru başarıyla eklendi!", veri: yeniDuyuru },
      { status: 201 }
    );
  } catch (error: any) {
    return NextResponse.json(
      { message: "❌ Hata oluştu", error: error.message },
      { status: 500 }
    );
  }
}