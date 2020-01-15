import { Router } from "express";
import { celebrate, Joi, Segments } from "celebrate";
import { patchDocument } from "./patch-controller";
import { isAuthenticated } from "../middleware";

const validOperations = ["add", "copy", "remove", "test", "move", "replace"];
const jsonRouter = Router();

jsonRouter.patch(
  "",
  isAuthenticated,
  celebrate(
    {
      [Segments.BODY]: Joi.object().keys({
        document: Joi.object().required(),
        patch: Joi.array()
          .items(
            Joi.object().keys({
              op: Joi.string()
                .required()
                .valid(...validOperations),
              path: Joi.string().required(),
              value: Joi.string().required()
            })
          )
          .min(1)
          .required()
      })
    },
    { abortEarly: false }
  ),
  patchDocument
);

export default jsonRouter;
