import express from "express";
import morgan from "morgan";
import { apiPrefix } from "./config";

const app = express();

app.use(express.json());
app.use(morgan("combined"));

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
