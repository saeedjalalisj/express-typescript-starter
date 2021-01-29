import { Application } from 'express';
import * as path from 'path';
import * as dotenv from 'dotenv';   

//todo: add return types
class Config {
    public static load(): any {
        dotenv.config({ path: path.join(__dirname, '../../.env') });
        const url = process.env.APP_URL || `http://localhost:${process.env.PORT}`;
		const port = process.env.PORT || 4040;
        return {
            url,
            port
        }
    }
    public static init (_express: Application): Application {
		_express.locals.app = this.load();
		return _express;
	}
}

export default Config;