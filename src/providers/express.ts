/**
 * creating express instance
 * load database
 * load env
 * load middleware
 */

import express from 'express';
import Config from './config'
import Middlewares from '../middlewares'
import Log from '../utils/log'

class Express {
    public express: express.Application;

    constructor () {
        this.express = express();
        this.mountDotEnv();
		this.mountMiddlewares();
    }

    private mountDotEnv (): void {
		this.express = Config.init(this.express);
    }
    
    private mountMiddlewares (): void {
		this.express = Middlewares.init(this.express);
    }
    
    public init (): void {
		const port: number = Config.load().port;

		// Start the server on the specified port
		this.express.listen(port, () => {
			return Log.info(`Server :: Running @ 'http://localhost:${port}'`);
		});
	}
}

export default new Express();