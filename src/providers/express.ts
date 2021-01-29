/**
 * creating express instance
 * load database
 * load env
 * load middleware
 */

import express, {Application} from 'express';
import Config from './config'
import Middlewares from '../middlewares'
import Log from '../utils/log'
import Router from '../middlewares/router';

class Express {
    public express: express.Application;

    constructor () {
        this.express = express();
        this.mountDotEnv();
		this.mountMiddlewares();
		this.mountRouters();
    }

    private mountDotEnv (): void {
		this.express = Config.init(this.express);
    }
    
    private mountMiddlewares (): void {
		this.express = Middlewares.init(this.express);
    }

    private mountRouters (): void {
        this.express = Router.init();
    }
    
    public init (): Application {
		const port: number = Config.load().port;

		// Start the server on the specified port
		this.express.listen(port, () => {
			return Log.info(`Server :: Running @ 'http://localhost:${port}'`);
		});
		return this.express;
	}
}

export default new Express();