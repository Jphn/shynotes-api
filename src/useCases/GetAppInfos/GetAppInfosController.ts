import { Context } from 'oak';
import { GetAppInfosUseCase } from './GetAppInfosUseCase.ts';

export class GetAppInfosController {
	constructor(
		private getAppInfosUseCase: GetAppInfosUseCase,
	) {}

	handle(context: Context) {
		return context.response.body = this.getAppInfosUseCase.execute();
	}
}
