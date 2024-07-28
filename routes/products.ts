import { Router } from "express";
import { collectErrors } from "../middlewares/collectErrors";
import { getProducts } from "../controllers/products";

const router = Router();

router.get("/", [collectErrors], getProducts);

export default router;
