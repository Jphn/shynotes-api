import { assertEquals } from 'https://deno.land/std@0.149.0/testing/asserts.ts';
import { InMemoryNotesRepository } from '../../tests/repositories/implementations/InMemoryNotesRepository.ts';
import DeleteNoteByNameUseCase from './DeleteNoteByNameUseCase.ts';

Deno.test('> [Delete Note By Name] User can delete a note', async () => {
	// PREPARE
	const inMemoryNotesRepository = new InMemoryNotesRepository();
	const deleteNoteByNameUseCase = new DeleteNoteByNameUseCase(
		inMemoryNotesRepository,
	);
	const payload = {
		name: 'example-name',
		content: 'example-content',
	};
	await inMemoryNotesRepository.save(payload);

	// ACT
	await deleteNoteByNameUseCase.execute(payload.name);

	// ASSERT
	assertEquals(inMemoryNotesRepository.notes, []);
});
