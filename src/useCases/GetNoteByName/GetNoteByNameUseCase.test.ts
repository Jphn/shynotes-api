import {
	assertExists,
	assertObjectMatch,
} from 'https://deno.land/std@0.149.0/testing/asserts.ts';
import { InMemoryNotesRepository } from '../../tests/repositories/implementations/InMemoryNotesRepository.ts';
import { GetNoteByNameUseCase } from './GetNoteByNameUseCase.ts';

Deno.test('> [Get Note By Name] User can get a valid note', async () => {
	// PREPARE
	const inMemoryNotesRepository = new InMemoryNotesRepository();
	const payload = {
		name: 'note-name',
		content: 'content',
	};
	inMemoryNotesRepository.save(payload);
	const getNoteByNameUseCase = new GetNoteByNameUseCase(
		inMemoryNotesRepository,
	);

	// ACT
	const response = await getNoteByNameUseCase.execute('note-name');

	// ASSERT
	assertExists(response);
	assertObjectMatch(response, payload);
});
