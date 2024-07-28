import { Response, Request } from "express";
import Libro, { ILibro } from "../models/libro";

export const getLibros = async (req: Request, res: Response) => {
  const libros = await Libro.find({});
  res.status(200).json({
    libros,
  });
};

export const createLibro = async (req: Request, res: Response) => {
  const librosData: ILibro = req.body;
  const { id, title, img, price } = librosData;

  const libroInDB = await Libro.findOne({ id: id });

  if (libroInDB) {
    res.json({ msg: "Libro ya registrado con ese ID." });
    return;
  }

  const libro = new Libro({ id, title, img, price });
  await libro.save();
  res.status(200).json({
    msg: "Libro cargado con éxito.",
    libro,
  });
};
