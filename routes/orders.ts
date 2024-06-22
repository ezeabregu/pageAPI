import { Router } from "express";
import { getOrders, createOrder } from "../controllers/orders";
import validateJWT from "../middlewares/validateJWT";
import { collectErrors } from "../middlewares/collectErrors";
import { check } from "express-validator";

const router = Router();

router.get("/", [validateJWT, collectErrors], getOrders);

router.post(
  "/",
  [
    validateJWT,
    check("price", "El precio es obligatorio").not().isEmpty(),
    check("shippingCost", "El consto de envío es obligatorio").not().isEmpty(),
    check("total", "El precio total es obligatorio").not().isEmpty(),
    check("shippingDetails", "Los detalles de envío son obligatorios")
      .not()
      .isEmpty(),
    check("items", "El array de productos es obligatorio").not().isEmpty(),
    collectErrors,
  ],
  createOrder
);

export default router;
