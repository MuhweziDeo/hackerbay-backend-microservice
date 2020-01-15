import { Router } from "express";
import { celebrate, Joi, Segments } from "celebrate";
import { loginUser } from "./authentication-controller";

const authRouter = Router();

authRouter.post(
  "/login",
  celebrate(
    {
      [Segments.BODY]: Joi.object().keys({
        username: Joi.string()
          .required()
          .trim()
          .min(4),
        password: Joi.string()
          .trim()
          .required()
      })
    },
    { abortEarly: false }
  ),
  loginUser
);

export default authRouter;
