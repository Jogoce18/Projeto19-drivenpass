import { Credentials } from "@prisma/client";

import { checkUser } from "../utils/autUtils";
import * as passUtils from "../utils/encryptUtils";
import * as repository from "../repositories/credentialsRepository";

export type credendialData = Omit<Credentials, "id" | "createdAt" >

export async function create(credentials: credendialData, userId: number) {
  const credential = await repository.searchByTitleAndUserId(credentials.title, userId);
  if (credential)
    throw { type: "conflict", message: "There is already a credential registered with this title."};
  
  const hashedPassword = passUtils.encryptSecurityPass(credentials.password); 
  return repository.create({ ...credentials, userId, password: hashedPassword });
}

export async function getCredentialsUser(userId: number) {
  const credentials = await repository.getCredentialsUser(userId);
  return passUtils.decryptObjectsPass(credentials);
}

export async function getCredential(credencialsId: number, userId: number) {
  const credential = await returnObject(credencialsId);
  checkUser(credential.userId, userId);

  return passUtils.decryptObjectsPass([credential]);
}

export async function deleteCredential(credencialsId: number, userId: number) {
  const credential = await returnObject(credencialsId);
  checkUser(credential.userId, userId);

  await repository.deleteCredential(credencialsId);
}

async function returnObject(credencialsId: number) {
  const credential = await repository.getCredential(credencialsId);
  if (!credential) throw { type: "NotFound", message: "Credential not found." };

  return credential;
}