import { assertExists } from 'https://deno.land/std@0.149.0/testing/asserts.ts';
import { InMemoryNotesRepository } from '../../tests/repositories/implementations/InMemoryNotesRepository.ts';
import { CreateNoteUseCase } from './CreateNoteUseCase.ts';

Deno.test('> [Create Note] User can create a note', async () => {
	// PREPARE
	const inMemoryNotesRepository = new InMemoryNotesRepository();
	const createNoteUseCase = new CreateNoteUseCase(inMemoryNotesRepository);
	const payload = {
		name: 'valid-note-name',
		content: 'valid content \n here',
	};

	// ACT
	await createNoteUseCase.execute(payload);

	// ASSERT
	assertExists(inMemoryNotesRepository.notes[0]);
});
