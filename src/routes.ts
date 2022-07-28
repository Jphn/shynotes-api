import { Router } from 'https://deno.land/x/oak@v10.6.0/mod.ts';
import { createNoteController } from './useCases/CreateNote/index.ts';
import { getAppInfosController } from './useCases/GetAppInfos/index.ts';

const router = new Router();

router.get('/', (ctx) => getAppInfosController.handle(ctx));
router.post('/notes', (ctx) => createNoteController.handle(ctx));

export default router;
