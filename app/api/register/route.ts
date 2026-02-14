import dbConnect from "@/lib/db";
import User from "@/models/User";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  await dbConnect();
  
  try {
    const { email, password } = await request.json();

    // 1. Bu email zaten kayıtlı mı diye bak
    const userVarMi = await User.findOne({ email });
    
    if (userVarMi) {
      return NextResponse.json(
        { success: false, message: "Bu email adresi zaten kullanılıyor!" },
        { status: 400 }
      );
    }

    // 2. Kayıtlı değilse yeni kullanıcı oluştur
    const newUser = await User.create({ email, password });

    return NextResponse.json({ success: true, message: "Kayıt başarılı! Giriş yapabilirsiniz." });

  } catch (error) {
    return NextResponse.json(
      { success: false, message: "Kayıt olurken bir hata oluştu." },
      { status: 500 }
    );
  }
}