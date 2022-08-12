import { InMemoryNotesRepository } from '../../tests/repositories/implementations/InMemoryNotesRepository.ts';
import { UpdateNoteByNameUseCase } from './UpdateNoteByNameUseCase.ts';

Deno.test('> [Update Note by Name] User can update an existing note', async () => {
	// PREPARE
	const inMemoryNotesRepository = new InMemoryNotesRepository();
	const updateNoteByNameUseCase = new UpdateNoteByNameUseCase(
		inMemoryNotesRepository,
	);
	const payload = {
		name: 'example-note-name',
		content: 'new content',
	};

	// ACT
	await updateNoteByNameUseCase.execute(payload.name, payload.content);

	// ASSERT
});
