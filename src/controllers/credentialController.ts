import { Request, Response } from 'express';
import * as service from '../services/credentialService';

export async function create(req: Request, res: Response) {
  const userId = Number(res.locals.user.id);

  await service.create(req.body, userId);
  res.sendStatus(201);
}

export async function getCredentialsUser(_req: Request, res: Response) {
  const userId = Number(res.locals.user.id);

  const credentials = await service.getCredentialsUser(userId);
  res.send(credentials);
}

export async function getCredential(req: Request, res: Response) {
  const credentialId = Number(req.params.id);
  const userId = Number(res.locals.user.id);

  const credential = await service.getCredential(credentialId, userId);
  res.send(credential);
}

export async function deleteCredential(req: Request, res: Response) {
  const credentialId = Number(req.params.id);
  const userId = Number(res.locals.user.id);

  await service.deleteCredential(credentialId, userId);
  res.sendStatus(204);
}