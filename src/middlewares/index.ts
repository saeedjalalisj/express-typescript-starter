import { Application } from "express";
import Http from './http';
import CsrfToken from './csrfToken';

class Middlewares {
    public static init(_express: Application) : Application {
        _express = Http.mount(_express);
        _express = CsrfToken.mount(_express);
        return _express;
    }
}

export default Middlewares;