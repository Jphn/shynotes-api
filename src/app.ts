import 'dotenv';
import { Application } from 'oak';
import { router } from './routes.ts';

const app = new Application();

app.use(router.routes());
app.use(router.allowedMethods());

export default app;
