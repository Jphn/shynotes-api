import INotesRepository from '../../repositories/INotesRepository.ts';

export class GetNoteByNameUseCase {
	public constructor(
		private notesRepository: INotesRepository,
	) {}

	public async execute(name: string) {
		const note = await this.notesRepository.findByNoteName(name);

		if (!note) throw new Error('Note doesn\'t exists.');

		return note;
	}
}
