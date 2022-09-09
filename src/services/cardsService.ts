import { Cards } from "@prisma/client";

import { checkUser } from "../utils/autUtils";
import * as passUtils from "../utils/encryptUtils";
import * as repository from "../repositories/cardsRepository";

export type cardsData = Omit<Cards, "id" | "createdAt">;

export async function create(card: cardsData, userId: number) {
  const searchCard = await repository.searchByTitleAndUserId(
    card.title,
    userId
  );
  if (searchCard)
    throw { type: "conflict", message: "There is already a card registered with this title." };

  const hashedPassword = passUtils.encryptSecurityPass(card.password);
  return repository.create({ ...card, userId, password: hashedPassword });
}

export async function getCardsUser(userId: number) {
  const cards = await repository.getCardsUser(userId);
  return passUtils.decryptObjectsPass(cards);
}

export async function getCard(cardId: number, userId: number) {
  const card = await returnObject(cardId);
  checkUser(card.userId, userId);

  return passUtils.decryptObjectsPass([card]);
}

export async function deleteCard(cardId: number, userId: number) {
  const card = await returnObject(cardId);
  checkUser(card.userId, userId);

  await repository.deleteCard(cardId);
}

async function returnObject(cardId: number) {
  const card = await repository.getCard(cardId);
  if (!card) throw { type: "NotFound", message: "Card not found." };

  return card;
}