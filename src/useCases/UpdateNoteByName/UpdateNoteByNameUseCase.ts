import INotesRepository from '../../repositories/INotesRepository.ts';

export class UpdateNoteByNameUseCase {
	constructor(
		private notesRepository: INotesRepository,
	) {}

	public async execute(name: string, content: string) {
		await this.notesRepository.updateContentByName(name, content);
	}
}
