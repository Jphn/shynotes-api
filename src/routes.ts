import { Router } from 'oak';
import { createNoteController } from './useCases/CreateNote/index.ts';
import { getAppInfosController } from './useCases/GetAppInfos/index.ts';
import { getNoteByNameController } from './useCases/GetNoteByName/index.ts';
import { updateNoteByNameController } from './useCases/UpdateNoteByName/index.ts';

const router = new Router();

router.get('/', (ctx) => getAppInfosController.handle(ctx));

router.get('/notes/:name', (ctx) => getNoteByNameController.handle(ctx));
router.put('/notes/:name', (ctx) => updateNoteByNameController.handle(ctx));
router.post('/notes', (ctx) => createNoteController.handle(ctx));

export { router };
