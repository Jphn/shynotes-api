import { client } from '../../database.ts';
import { MongoNotesRepository } from '../../repositories/implementations/MongoNotesRepository.ts';
import { CreateNoteController } from './CreateNoteController.ts';
import { CreateNoteUseCase } from './CreateNoteUseCase.ts';

const mongoNotesRepository = new MongoNotesRepository(client);

const createNoteUseCase = new CreateNoteUseCase(mongoNotesRepository);

const createNoteController = new CreateNoteController(createNoteUseCase);

export { createNoteController, createNoteUseCase };
