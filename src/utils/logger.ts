import pino from "pino";

//todo: add value constant
export const logger = pino({
  name: 'app-name',
  level: 'debug'
});