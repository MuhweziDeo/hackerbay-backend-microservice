import app from "./app";
import { port } from "./config";
import { logger } from "./middleware/logger";

app.listen(port, () => {
  logger.info(`App running on ${port}`);
});
