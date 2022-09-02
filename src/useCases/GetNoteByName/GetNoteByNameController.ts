import { RouterContext } from 'oak';
import { GetNoteByNameUseCase } from './GetNoteByNameUseCase.ts';

export class GetNoteByNameController {
	constructor(
		private getNoteByNameUseCase: GetNoteByNameUseCase,
	) {}

	public async handle(
		{ params, response }: RouterContext<any, { name: string }>,
	) {
		try {
			const name = params.name;

			const note = await this.getNoteByNameUseCase.execute(
				name,
			);

			response.status = 200;
			return response.body = note;
		} catch (error) {
			response.status = 204;
			return response.body = {
				message: error.message || 'Unexpected error.',
			};
		}
	}
}
