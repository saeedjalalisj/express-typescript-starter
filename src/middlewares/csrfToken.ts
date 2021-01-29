import { Application } from 'express';
import lusca from 'lusca';
import Log from '../utils/log';

class CsrfToken {
    public static mount(_express: Application): Application {
        Log.info('enable security options');
        _express.set('trust proxy', 1);
        _express.use(lusca.xframe('SAMEORIGIN'));
        _express.use(lusca.xssProtection(true));

        return _express;
    }
}

export default CsrfToken;