import { assertObjectMatch } from 'https://deno.land/std@0.150.0/testing/asserts.ts';
import { GetAppInfosUseCase } from './GetAppInfosUseCase.ts';

Deno.test('> [Get App Infos] Test if returns app infos', () => {
	// PREPARE
	const sut = new GetAppInfosUseCase();

	// ACT
	const response = sut.execute();

	// ASSERT
	assertObjectMatch(response, {
		author: 'João Pedro Holanda Neves',
		github: 'github.com/Jphn',
	});
});
