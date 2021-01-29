import { Application } from 'express';
import expressPinoLogger from "express-pino-logger";
import Log from '../utils/log'
import { logger } from '../utils/logger';

class Http {
    public static mount(_express: Application): Application {
        Log.info('config http middleware');
        _express.use(expressPinoLogger({ logger }));
        return _express;
    }
}

export default Http;