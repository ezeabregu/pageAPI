import { Router } from "express";
import { register, login, verifyUser } from "../controllers/auth";
import { check } from "express-validator";
import { collectErrors } from "../middlewares/collectErrors";
import { mailExist } from "../helpers/validationsDB";
import cors from "cors";

const router = Router();

router.post(
  "/register",
  cors(),
  [
    check("name", "El nombre es obligatorio.").not().isEmpty(),
    check("email", "El correo electrónico es obligatorio.").isEmail(),
    check(
      "password",
      "La contraseña debe ser de 6 caracteres mínimo."
    ).isLength({ min: 6 }),
    check("email").custom(mailExist),
    collectErrors,
  ],
  register
);

router.post(
  "/login",
  cors(),
  [
    check("email", "El correo electrónico es obligatorio.").not().isEmpty(),
    check("email", "El correo electrónico no es válido.").isEmail(),
    check("password", "El password debe ser de 6 caracteres mínimo.").isLength({
      min: 6,
    }),
    collectErrors,
  ],
  login
);

router.patch(
  "/verify",
  cors(),
  [
    check("email", "El mail es obligatorio").not().isEmpty(),
    check("email", "El mail no es válido").isEmail(),
    check("code").not().isEmpty(),
    collectErrors,
  ],
  verifyUser
);

export default router;
