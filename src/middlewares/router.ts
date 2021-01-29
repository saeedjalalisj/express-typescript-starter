import {createExpressServer} from 'routing-controllers';
import {Application} from 'express';
import { UserController } from '../modules/users/users.controller';

class Router {
    public static init() : Application {
        return createExpressServer({
            controllers: [UserController]
        });
    }
}

export default Router;