import { Request, Response } from "express";

import * as service from "../services/documentsService";

export async function create(req: Request, res: Response) {
  const userId = Number(res.locals.user.id);

  await service.create(req.body, userId);
  res.sendStatus(201);
}

export async function getDocumentUser(req: Request, res: Response) {
  const userId = Number(res.locals.user.id);

  const document = await service.getDocumentsUser(userId);
  res.send(document);
}

export async function getDocument(req: Request, res: Response) {
  const documentId = Number(req.params.id);
  const userId = Number(res.locals.user.id);

  const document = await service.getDocument(documentId, userId);
  res.send(document);
}

export async function deleteDocument(req: Request, res: Response) {
  const documentId = Number(req.params.id);
  const userId = Number(res.locals.user.id);

  await service.deleteDocument(documentId, userId);
  res.sendStatus(204);
}
