/**
 * creating app instance
 */
import Express from './express';
import Log from '../utils/log'
import { useContainer } from 'routing-controllers';
import { Container } from 'typedi';

useContainer(Container);

class App {
    public loadServer(): void {
        Log.info('Running Server...');
        Express.init();
    }
}

export default new App();