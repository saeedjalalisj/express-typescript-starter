import { Application } from 'express';
import expressPinoLogger from 'express-pino-logger';
import bodyParser from 'body-parser';
import compression from 'compression';
import helmet from 'helmet';
import cors from 'cors';
import Log from '../utils/log'
import { logger } from '../utils/logger';

class Http {
    public static mount(_express: Application): Application {
        Log.info('config http middleware');
        _express.use(expressPinoLogger({ logger }));
        _express.use(bodyParser.json());
        _express.use(bodyParser.urlencoded({ extended: true }));
        _express.use(compression());
        _express.use(helmet());
        _express.use(cors());
        return _express;
    }
}

export default Http;