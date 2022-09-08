import { Notes } from "@prisma/client";

import { checkUser } from "../utils/autUtils";
import * as notesRepository from "../repositories/notesRepository";

export type notesData = Omit<Notes, 'id' | 'createdAt'>;

export async function create(note: Notes) {
  const { title, userId } = note;
  const noteExists = await notesRepository.searchByTitleAndUserId(title, userId);

  if (noteExists)
    throw { type: "conflict", message: "There is already a note registered with this title." };

  await notesRepository.create(note);
}

export async function getAll(userId: number) {
  return notesRepository.getAll(userId);
}

export async function getById(notesId: number, userId: number) {
  const notes = await returnObject(notesId);

  checkUser(userId, notes.userId);
  return notes;
}

export async function deleteNote(notesId: number, userId: number) {
  const notes = await returnObject(notesId);

  checkUser(userId, notes.userId);
  await notesRepository.deleteNote(notesId);
}

async function returnObject(notesId: number) {
  const notes = await notesRepository.getById(notesId);
  if (!notes) throw { type: "NoteNotFound", message: "Note not found." };

  return notes;
}