import { Schema, model, Model } from "mongoose";

export interface Product {
  id: number;
  title: string;
  img: string;
  price: number;
}

const ProductSchema = new Schema<Product>({
  id: {
    type: Number,
    required: [true, "El número identificar es obligatorio."],
  },
  title: {
    type: String,
    required: [true, "El título es obligatorio."],
  },
  img: {
    type: String,
    required: [true, "La dirección de la imagen es obligatoria."],
  },
  price: {
    type: Number,
    required: [true, "El precio del producto es obligatorio."],
  },
});

ProductSchema.methods.toJSON = function () {
  const { _id, ...product } = this.toObject();
  return product;
};

const Product: Model<Product> = model<Product>("Product", ProductSchema);
export default Product;
