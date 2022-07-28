import { Application } from 'oak';
import router from './routes.ts';
import 'dotenv';

const app = new Application();

app.use(router.routes());
app.use(router.allowedMethods());

export default app;
