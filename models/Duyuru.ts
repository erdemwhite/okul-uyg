import mongoose from "mongoose";

const DuyuruSchema = new mongoose.Schema(
  {
    baslik: {
      type: String,
      required: [true, "Lütfen duyuru başlığı girin."], // Zorunlu alan
      maxlength: [100, "Başlık 100 karakterden uzun olamaz."],
    },
    icerik: {
      type: String,
      required: true,
    },
    tarih: {
      type: Date,
      default: Date.now, // Tarih girilmezse otomatik şu anı al
    },
    onemli: {
      type: Boolean,
      default: false, // Varsayılan olarak önemli değil
    },
  },
  { timestamps: true } // Oluşturulma ve güncellenme tarihlerini otomatik tutar
);

// Next.js'te model tekrar tekrar derlenmesin diye kontrol ekliyoruz:
export default mongoose.models.Duyuru || mongoose.model("Duyuru", DuyuruSchema);