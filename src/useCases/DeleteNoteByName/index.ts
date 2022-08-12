import { MongoNotesRepository } from '../../repositories/implementations/MongoNotesRepository.ts';
import DeleteNoteByNameController from './DeleteNoteByNameController.ts';
import DeleteNoteByNameUseCase from './DeleteNoteByNameUseCase.ts';

const mongoNotesRepository = new MongoNotesRepository();
const deleteNoteByNameUseCase = new DeleteNoteByNameUseCase(
	mongoNotesRepository,
);
const deleteNoteByNameController = new DeleteNoteByNameController(
	deleteNoteByNameUseCase,
);

export { deleteNoteByNameController, deleteNoteByNameUseCase };
