import { Router } from 'https://deno.land/x/oak/mod.ts';
import { getUserDetails, createUser } from '../controllers/userController.ts';
// import { simpleMiddleware } from "../middlewares/testMiddleware.ts";

const router = new Router();

router.get('/user/:id', getUserDetails);
router.post('/user', createUser);

export default router;
