import mongoose from "mongoose";

const YemekSchema = new mongoose.Schema(
  {
    tarih: {
      type: Date,
      default: Date.now,
    },
    gun: {
      type: String, // Pazartesi, Salı vs.
      required: true,
    },
    corba: {
      type: String,
      required: true,
    },
    anaYemek: {
        type: String,
        required: true,
    },
    yanYemek: {
        type: String,
        required: true,
    },
    kalori: {
        type: Number,
        required: true,
    }

  },
  { timestamps: true }
);

export default mongoose.models.Yemek || mongoose.model("Yemek", YemekSchema);