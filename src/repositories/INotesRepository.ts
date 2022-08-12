import Note from '../entities/Note.ts';

export default interface INotesRepository {
	findByNoteName(name: string): Promise<Note | undefined>;
	save(note: Note): Promise<void>;
	updateContentByName(name: string, content: string): Promise<void>;
	deleteNoteByName(name: string): Promise<void>;
}
