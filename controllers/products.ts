import { Response, Request } from "express";
import Product from "../models/product";

export const getProducts = async (req: Request, res: Response) => {
  const products = await Product.find();
  res.status(200).json({
    products,
  });
};
