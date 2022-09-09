import { Documents } from "@prisma/client";

import { checkUser } from "../utils/autUtils";
import * as repository from "../repositories/documentsRepository";

export type documentData = Omit<Documents, "id" | "createdAt">;

export async function create(documents: documentData, userId: number) {
  const document = await repository.searchByTypeAndUserId(documents.type, userId);

  if (document)
    throw { type: "conflict", message: "There is already a document registered with this type."};

  const newExpiresDate = new Date(documents.dateExpires)
  const newEmmissionDate = new Date(documents.dateEmitted)

  return repository.create({...documents, userId, dateExpires: newExpiresDate, dateEmitted: newEmmissionDate});
}

export async function getDocumentsUser(userId: number) {
  const documents = await repository.getDocumentsUser(userId);
  return documents;
}

export async function getDocument(documentsId: number, userId: number) {
  const documents = await returnObject(documentsId);
  checkUser(documents.userId, userId);

  return documents;
}

export async function deleteDocument(documentsId: number, userId: number) {
  const documents = await returnObject(documentsId);
  checkUser(documents.userId, userId);

  await repository.deleteDocument(documentsId);
}

async function returnObject(documentsId: number) {
  const documents = await repository.getDocument(documentsId);
  if (!documents) throw { type: "NotFound", message: "Document not found." };

  return documents;
}
