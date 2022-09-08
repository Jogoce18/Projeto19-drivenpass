import connection from "../config/db";
import { notesData } from "../services/notesService";

export async function searchByTitleAndUserId(title: string, userId: number) {
  const note = await connection.notes.findFirst({
    where: {
      title,
      userId,
    },
  });

  return note;
}

export async function create(note: notesData){
  return await connection.notes.create({
    data: {
      ...note,
    },
  });
}

export async function getAll(userId: number){
  return await connection.notes.findMany({
    where: {
      userId,
    },
  });
}

export async function getById(id: number){
  return await connection.notes.findFirst({
    where: {
      id,
    },
  });
}

export async function deleteNote(id: number){
  return await connection.notes.delete({
    where: {
      id,
    },
  });
}