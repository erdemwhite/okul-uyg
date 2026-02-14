"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function RegisterPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!email || !password) {
      alert("Lütfen tüm alanları doldurun!");
      return;
    }

    try {
      const res = await fetch("/api/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      const data = await res.json();

      if (data.success) {
        alert("Kayıt Başarılı! Şimdi giriş yapabilirsiniz.");
        router.push("/"); // Giriş sayfasına yönlendir
      } else {
        alert(data.message);
      }
    } catch (error) {
      alert("Bir hata oluştu.");
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-blue-100 p-4">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-xl p-8 space-y-6">
        
        {/* Başlık */}
        <div className="text-center bg-blue-600 -mx-8 -mt-8 p-6 rounded-t-2xl mb-6">
          <h2 className="text-3xl font-bold text-white">Kayıt Ol</h2>
          <p className="text-blue-100 mt-2">Yeni hesap oluştur</p>
        </div>

        {/* Form */}
        <form onSubmit={handleRegister} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">Email Adresi</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="mt-1 w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
              placeholder="ornek@okul.com"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Şifre</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="mt-1 w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
              placeholder="••••••••"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-4 rounded-lg transition-colors duration-200 shadow-md"
          >
            Hesap Oluştur
          </button>
        </form>

        {/* Giriş Yap Linki */}
        <div className="text-center text-sm text-gray-500 mt-4">
          Zaten hesabın var mı?{" "}
          <Link href="/" className="text-blue-600 font-bold hover:underline">
            Giriş Yap
          </Link>
        </div>

        <div className="text-center text-xs text-gray-400 mt-8">
          © 2026 Okul Otomasyon Sistemi
        </div>
      </div>
    </div>
  );
}