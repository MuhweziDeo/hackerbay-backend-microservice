import { Router } from "express";
import { celebrate, Joi, Segments } from "celebrate";
import { createThumbnail } from "./thumbnail-controller";
import { isAuthenticated } from "../middleware";

const thumbnailRouter = Router();

thumbnailRouter.post(
  "/",
  isAuthenticated,
  celebrate({
    [Segments.BODY]: Joi.object().keys(
      {
        url: Joi.string()
          .uri()
          .required()
          .pattern(/\.(jpg|jpeg|tiff|png)$/i)
      },
      { abortEarly: false }
    )
  }),
  createThumbnail
);

export default thumbnailRouter;
