import express from "express";
import morgan from "morgan";
import { errors } from "celebrate";
import { apiPrefix } from "./config";
import authRoutes from "./authentication";
import patchRoutes from "./json-patch";

const app = express();

app.use(express.json());
app.use(morgan("combined"));

// Routes
app.use(`${apiPrefix}/auth`, authRoutes);
app.use(`${apiPrefix}/patch`, patchRoutes);

app.use(errors());
app.get(apiPrefix, (req, res) =>
  res.send({
    message: "Version 0.1"
  })
);

app.use("*", (req, res) =>
  res.status(404).send({
    message: "URL not Found"
  })
);

export default app;
