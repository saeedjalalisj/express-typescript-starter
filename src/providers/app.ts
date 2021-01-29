/**
 * creating app instance
 */
import Express from './express';
import Log from '../utils/log'

class App {
    public loadServer(): void {
        Log.info('Running Server...');
        Express.init();
    }
}

export default new App();