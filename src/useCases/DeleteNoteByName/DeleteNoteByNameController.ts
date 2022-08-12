import { RouterContext } from 'oak';
import DeleteNoteByNameUseCase from './DeleteNoteByNameUseCase.ts';

export default class DeleteNoteByNameController {
	constructor(
		private deleteNoteByNameUseCase: DeleteNoteByNameUseCase,
	) {}

	public async handle(
		{ params, response }: RouterContext<any, { name: string }>,
	) {
		try {
			await this.deleteNoteByNameUseCase.execute(params.name);

			return response.status = 204;
		} catch (error) {
			return response.status = 404;
		}
	}
}
