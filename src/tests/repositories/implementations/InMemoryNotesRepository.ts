import Note from '../../../entities/Note.ts';
import INotesRepository from '../../../repositories/INotesRepository.ts';

export class InMemoryNotesRepository implements INotesRepository {
	public notes: Array<Note> = [];

	public async save(note: Note) {
		await this.notes.push(note);
	}

	public async findByNoteName(name: string) {
		return await this.notes.find((element) => element.name === name) ??
			undefined;
	}

	public async updateContentByName(
		name: string,
		content: string,
	) {
	}

	public async deleteNoteByName(name: string) {
		this.notes = await this.notes.filter((value) => {
			return value.name !== name;
		});
	}
}
