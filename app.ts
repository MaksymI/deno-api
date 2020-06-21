import snowlight, {
    IRequest,
    IResponse,
} from 'https://deno.land/x/snowlight/mod.ts';
import userRoute from './routers/userRoute.ts';
import { APP_HOST, APP_PORT } from './keys/appConstants.ts';
const app = snowlight();

/**
 *  In-built Middlewares to Parse the Request Body
 * */
app.use(app.json());

/**
 *  In-built Middlewares to Parse the URL-Encoded format
 * */
app.use(app.urlencoded());

/**
 *  Simple GET API - for Testing
 * */
app.get('/', async (req: IRequest, res: IResponse) => {
    res.send('Hello world!');
});

/**
 *  Middleware to link user-routes
 * */
app.use(userRoute);

/**
 * Error Handling Middleware
 */

app.listen(
    {
        port: APP_PORT,
    },
    () => console.log(`Server started at ${APP_HOST}/${APP_PORT}! 🔥`)
);
