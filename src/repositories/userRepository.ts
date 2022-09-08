import connection from "../config/db";
import { userData } from "../services/userService";

export async function search(param: string, value: string | number) {
  return connection.user.findFirst({
    where: {
      [param]: value,
    },
  });
}

export async function create(user: userData) {
  return connection.user.create({
    data: {
      ...user,
    },
  });
}

export async function countAll(userId: number) {
  const countWifis = await connection.wifi.count({ where: { userId } });
  const countNotes = await connection.notes.count({ where: { userId } });
  const countCards = await connection.cards.count({ where: { userId } });
  const countDocuments = await connection.documents.count({ where: { userId } });
  const countCredentials = await connection.credentials.count({ where: { userId } });

  const count = {
    wifis: countWifis,
    notes: countNotes,
    cards: countCards,
    documents: countDocuments,
    credentials: countCredentials,
  };

  return count;
}

export async function countAll2(userId: number) {
  let count = {};
  await Promise.all([
    connection.wifi.count({ where: { userId } }),
    connection.notes.count({ where: { userId } }),
    connection.cards.count({ where: { userId } }),
    connection.documents.count({ where: { userId } }),
    connection.credentials.count({ where: { userId } }),
  ]).then(([wifis, notes, cards, documents, credentials]) => {
    count = {
      wifis,
      notes,
      cards,
      documents,
      credentials,
    };
  });
  return count;
}