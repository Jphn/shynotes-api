import INotesRepository from '../../repositories/INotesRepository.ts';

export default class DeleteNoteByNameUseCase {
	constructor(
		private notesRepository: INotesRepository,
	) {}

	public async execute(name: string) {
		await this.notesRepository.deleteNoteByName(name);
	}
}
