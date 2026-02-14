import dbConnect from "@/lib/db";
import User from "@/models/User";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  // 1. Veritabanına bağlan
  await dbConnect();

  try {
    // 2. Kullanıcıdan gelen email ve şifreyi al
    const { email, password } = await request.json();

    // 3. Veritabanında bu email var mı diye bak
    const user = await User.findOne({ email });

    // 4. Kullanıcı yoksa veya şifre yanlışsa hata ver
    if (!user || user.password !== password) {
      return NextResponse.json(
        { success: false, message: "Email veya şifre hatalı!" },
        { status: 401 }
      );
    }

    // 5. Her şey doğruysa başarı mesajı dön
    return NextResponse.json({ success: true, message: "Giriş başarılı!" });

  } catch (error) {
    return NextResponse.json(
      { success: false, message: "Sunucu hatası!" },
      { status: 500 }
    );
  }
}