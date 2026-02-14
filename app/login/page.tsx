"use client";
import React, { useState} from "react";
import { useRouter } from "next/navigation";

export default function LoginPage(){  
    const [email, setEmail] = useState("");
    const [password, setPassword]= useState("");
    const router = useRouter();


const handleLogin =(e: React.FormEvent)=>{
    e.preventDefault();
    console.log("Giriş yapılıyor")
    router.push("/");
}

return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-blue-100 to-indigo-200 p-4">
      <div className="w-full max-w-md bg-white/80 backdrop-blur-md rounded-2xl shadow-xl overflow-hidden">
        
        {/* Üst Kısım (Header) */}
        <div className="bg-indigo-600 p-8 text-center">
          <h1 className="text-3xl font-bold text-white tracking-wide">Hoş Geldiniz</h1>
          <p className="text-indigo-200 mt-2 text-sm">Yemek Listesi Yönetim Paneli</p>
        </div>

        {/* Form Alanı */}
        <div className="p-8">
          <form onSubmit={handleLogin} className="space-y-6">
            
            {/* Email */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Email Adresi</label>
              <input
                type="email"
                required
                className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-200 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 outline-none transition-all"
                placeholder="admin@okul.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            {/* Şifre */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Şifre</label>
              <input
                type="password"
                required
                className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-200 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 outline-none transition-all"
                placeholder="••••••••"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>

            {/* Giriş Butonu */}
            <button
              type="submit"
              className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-3 rounded-lg transition-colors shadow-lg hover:shadow-indigo-500/30"
            >
              Giriş Yap
            </button>

          </form>

          <div className="mt-6 text-center text-xs text-gray-400">
            © 2026 Okul Otomasyon Sistemi
          </div>
        </div>
      </div>
    </div>
  );






}
