import { RouterContext } from 'https://deno.land/x/oak@v10.6.0/router.ts';
import { UpdateNoteByNameUseCase } from './UpdateNoteByNameUseCase.ts';

export class UpdateNoteByNameController {
	constructor(
		private updateNoteByNameUseCase: UpdateNoteByNameUseCase,
	) {}

	public async handle(
		{ request, params, response }: RouterContext<
			'/notes/:name',
			{ name: string }
		>,
	) {
		try {
			const { content } = await request.body({ type: 'json' }).value;

			await this.updateNoteByNameUseCase.execute(params.name, content);

			return response.status = 202;
		} catch (error) {
			response.status = 406;
			return response.body = { error: error.message || 'Unexpected error.' };
		}
	}
}
