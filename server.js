import { app } from "./src/app.js";
import { logger } from "./src/logger/logger.js";

app.listen(process.env.PORT, (err) => {
  logger.info(`Server is Running on PORT ${process.env.PORT}`);
});
