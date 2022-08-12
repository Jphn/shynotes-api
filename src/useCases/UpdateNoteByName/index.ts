import { MongoNotesRepository } from '../../repositories/implementations/MongoNotesRepository.ts';
import { UpdateNoteByNameController } from './UpdateNoteByNameController.ts';
import { UpdateNoteByNameUseCase } from './UpdateNoteByNameUseCase.ts';

const mongoNotesRepository = new MongoNotesRepository();
const updateNoteByNameUseCase = new UpdateNoteByNameUseCase(
	mongoNotesRepository,
);
const updateNoteByNameController = new UpdateNoteByNameController(
	updateNoteByNameUseCase,
);

export { updateNoteByNameController, updateNoteByNameUseCase };
