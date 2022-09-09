import { DocumentType } from "@prisma/client";
import connection from "../config/db";

import { documentData } from "../services/documentsService";


export async function searchByTypeAndUserId(type: DocumentType, userId: number) {
  return connection.documents.findFirst({
    where: {
      type,
      userId,
    },
  });
}

export async function create(documents: documentData) {
  return connection.documents.create({
    data: documents,
  });
}

export async function getDocumentsUser(userId: number) {
  return connection.documents.findMany({
    where: {
      userId,
    },
  });
}

export async function getDocument(documentsId: number) {
  return connection.documents.findFirst({
    where: {
      id: documentsId,
    },
  });
}

export async function deleteDocument(documentsId: number) {
  return connection.documents.delete({
    where: {
      id: documentsId,
    },
  });
}
