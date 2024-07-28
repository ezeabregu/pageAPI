import { Router } from "express";
import { collectErrors } from "../middlewares/collectErrors";
import { createLibro, getLibros } from "../controllers/libros";

const router = Router();

router.get("/", getLibros);

router.post("/", createLibro);

export default router;
