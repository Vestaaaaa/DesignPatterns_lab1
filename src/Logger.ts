import * as pino from "pino";

const logger = (pino as any).default({
  level: "info",
});

export default logger;
