import { MongoNotesRepository } from '../../repositories/implementations/MongoNotesRepository.ts';
import { GetNoteByNameController } from './GetNoteByNameController.ts';
import { GetNoteByNameUseCase } from './GetNoteByNameUseCase.ts';

const mongoNotesRepository = new MongoNotesRepository();

const getNoteByNameUseCase = new GetNoteByNameUseCase(mongoNotesRepository);

const getNoteByNameController = new GetNoteByNameController(
	getNoteByNameUseCase,
);

export { getNoteByNameController, getNoteByNameUseCase };
