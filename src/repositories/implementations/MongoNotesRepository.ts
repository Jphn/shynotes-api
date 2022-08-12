import Note from '../../entities/Note.ts';
import INotesRepository from '../INotesRepository.ts';
import { database } from '../../database.ts';

export class MongoNotesRepository implements INotesRepository {
	private notesCollection = database.collection<Note>('notes');

	public async findByNoteName(name: string): Promise<Note | undefined> {
		return await this.notesCollection.findOne({ name: name });
	}

	public async save(note: Note): Promise<void> {
		await this.notesCollection.insertOne(note);
	}

	public async updateContentByName(
		name: string,
		content: string,
	): Promise<void> {
		if (!(await this.findByNoteName(name))) throw new Error('Note not found.');

		await this.notesCollection.updateOne({ name: name }, {
			$set: {
				content: content,
			},
		});
	}
}
