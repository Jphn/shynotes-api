import { Context } from 'oak';
import { CreateNoteUseCase } from './CreateNoteUseCase.ts';

export class CreateNoteController {
	constructor(
		public createNoteUseCase: CreateNoteUseCase,
	) {}

	public async handle(context: Context) {
		try {
			const { name, content } = await context.request.body({ type: 'json' })
				.value;

			await this.createNoteUseCase.execute({
				name: name,
				content: content,
			});

			return context.response.status = 201;
		} catch (error) {
			context.response.status = 400;
			return context.response.body = {
				message: error.message || 'Unexpected error.',
			};
		}
	}
}
