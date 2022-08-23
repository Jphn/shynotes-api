import 'dotenv';
import { Application } from 'oak';
import { oakCors } from 'cors';
import { router } from './routes.ts';

const app = new Application();

app.use(oakCors({
	origin: '*',
}));

app.use(router.routes());
app.use(router.allowedMethods());

export default app;
