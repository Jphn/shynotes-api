import { Application } from 'https://deno.land/x/oak@v10.6.0/mod.ts';
import 'https://deno.land/x/dotenv@v3.2.0/load.ts';
import router from './routes.ts';

const app = new Application();

app.use(router.routes());
app.use(router.allowedMethods());

export default app;
