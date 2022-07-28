import { GetAppInfosController } from './GetAppInfosController.ts';
import { GetAppInfosUseCase } from './GetAppInfosUseCase.ts';

const getAppInfosUseCase = new GetAppInfosUseCase();

const getAppInfosController = new GetAppInfosController(getAppInfosUseCase);

export { getAppInfosController, getAppInfosUseCase };
