import { NextResponse } from "next/server";
import dbConnect from "@/lib/db";
import Duyuru from "@/models/Duyuru";

export async function POST(request: Request) {
  try {
    await dbConnect();

    // Frontend'den gelen veriyi (body) okuyoruz
    const body = await request.json();
    
    // Gelen veriyi kullanarak yeni duyuru oluşturuyoruz
    const yeniDuyuru = await Duyuru.create(body);

    return NextResponse.json(
      { message: "Duyuru başarıyla kaydedildi!", veri: yeniDuyuru },
      { status: 201 }
    );
  } catch (error: any) {
    return NextResponse.json(
      { message: "Kaydederken hata oluştu!", error: error.message },
      { status: 500 }
    );
  }
}

export async function DELETE(request: Request) {
  try {
    await dbConnect();

    // Frontend'den silinecek ID'yi alıyoruz
    const { id } = await request.json();

    // MongoDB'den o ID'ye sahip kaydı bul ve sil
    await Duyuru.findByIdAndDelete(id);

    return NextResponse.json({ message: "Silindi!" }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ message: "Hata!" }, { status: 500 });
  }
}