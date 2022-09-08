import connection from "../config/db";

import { credendialData } from "../services/credentialService";

export async function searchByTitleAndUserId(title: string, userId: number) {
  return connection.credentials.findFirst({
    where: {
      title,
      userId
    }
  });
}

export async function create(credentials: credendialData) {
  return connection.credentials.create({
    data: credentials,
  });
}

export async function getCredentialsUser(userId: number) {
  return connection.credentials.findMany({
    where: {
      userId,
    },
  });
}

export async function getCredential(credencialsId: number) {
  return connection.credentials.findFirst({
    where: {
      id: credencialsId,
    },
  });
}

export async function deleteCredential(credencialsId: number) {
  return connection.credentials.delete({
    where: {
      id: credencialsId,
    },
  });
}