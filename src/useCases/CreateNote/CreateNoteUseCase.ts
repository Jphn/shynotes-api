import Note from '../../entities/Note.ts';
import INotesRepository from '../../repositories/INotesRepository.ts';
import ICreateNoteDTO from './CreateNoteDTO.ts';

export class CreateNoteUseCase {
	constructor(
		private notesRepository: INotesRepository,
	) {}

	public async execute(data: ICreateNoteDTO) {
		const noteAlreadyExists = await this.notesRepository.findByNoteName(
			data.name,
		);

		if (noteAlreadyExists) throw new Error('Note already exists.');

		const note = new Note(data);

		await this.notesRepository.save(note);
	}
}
