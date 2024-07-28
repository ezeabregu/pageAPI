import { Schema, model, Model } from "mongoose";

export interface ILibro {
  id: number;
  title: string;
  img: string;
  price: number;
}

const LibroSchema = new Schema<ILibro>({
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

LibroSchema.methods.toJSON = function () {
  const { __v, _id, ...libro } = this.toObject();
  return libro;
};

const Libro: Model<ILibro> = model<ILibro>("Libro", LibroSchema);
export default Libro;
