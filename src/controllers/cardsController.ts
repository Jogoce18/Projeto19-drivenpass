import { Request, Response } from "express";

import * as service from "../services/cardsService";

export async function create(req: Request, res: Response) {
  const userId = Number(res.locals.user.id);

  await service.create(req.body, userId);
  res.sendStatus(201);
}

export async function getCardsUser(_req: Request, res: Response) {
  const userId = Number(res.locals.user.id);

  const cards = await service.getCardsUser(userId);
  res.send(cards);
}

export async function getCard(req: Request, res: Response) {
  const cardId = Number(req.params.id);
  const userId = Number(res.locals.user.id);

  const card = await service.getCard(cardId, userId);
  res.send(card);
}

export async function deleteCard(req: Request, res: Response) {
  const cardId = Number(req.params.id);
  const userId = Number(res.locals.user.id);

  await service.deleteCard(cardId, userId);
  res.sendStatus(204);
}