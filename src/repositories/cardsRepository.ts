import connection from '../config/db';

import { cardsData } from './../services/cardsService';

export async function searchByTitleAndUserId(title: string, userId: number) {
  return connection.cards.findFirst({
    where: {
      title,
      userId,
    },
  });
}

export async function create(card: cardsData) {
  return connection.cards.create({
    data: card,
  });
}

export async function getCardsUser(userId: number) {
  return connection.cards.findMany({
    where: {
      userId,
    },
  });
}

export async function getCard(cardId: number) {
  return connection.cards.findFirst({
    where: {
      id: cardId,
    },
  });
}

export async function deleteCard(cardId: number) {
  return connection.cards.delete({
    where: {
      id: cardId,
    },
  });
}
