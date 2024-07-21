import { NextFunction, Request, Response } from "express";
import jwt, { JwtPayload } from "jsonwebtoken";
import User, { IUser } from "../models/user";

const validateJWT = async (req: Request, res: Response, next: NextFunction) => {
  const token = req.headers["x-token"] as string;

  if (!token) {
    res.status(401).json({
      msg: "No hay token en la peticion.",
    });
    return;
  }
  try {
    const secretKey = process.env.KEY as string;
    const payload = jwt.verify(token, secretKey) as JwtPayload;
    const { id } = payload;
    const userConfirm: IUser | null = await User.findById(id);
    if (!userConfirm) {
      res.status(404).json({
        msg: "El usuario no se ha encontrado en la base de datos.",
      });
      return;
    }
    req.body.userConfirm = userConfirm;
    next();
  } catch (error) {
    console.log(error);
    res.status(401).json({
      msg: "Token no válido.",
    });
  }
};

export default validateJWT;
