import Note from '../../entities/Note.ts';
import INotesRepository from '../INotesRepository.ts';
import { Collection, MongoClient } from 'mongo';

export class MongoNotesRepository implements INotesRepository {
	private notesCollection: Collection<Note>;

	public constructor(client: MongoClient) {
		this.notesCollection = client.database(Deno.env.get('MONGO_DATABASE'))
			.collection<Note>(
				'notes',
			);
	}

	public async findByNoteName(name: string): Promise<Note | undefined> {
		return await this.notesCollection.findOne({ name: name });
	}

	public save(note: Note): void {
		this.notesCollection.insertOne(note);
	}
}
