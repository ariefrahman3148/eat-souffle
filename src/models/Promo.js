import mongoose from "mongoose";

const PromoSchema = new mongoose.Schema(
  {
    customer: {
      type: String,
      required: true,
      default: null,
      maxlength: 60,
    },
    tipe: {
      type: String,
      required: true,
      maxlength: 60,
    },
    dateClaim: {
      type: Date,
      default: null,
    },
    status: {
      type: String,
      default: "Open",
    },
    kode: {
      type: String,
      required:true
    },
  },
  { timestamps: true }
);

export default mongoose.models.Promo || mongoose.model("Promo", PromoSchema);