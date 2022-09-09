import { Request, Response } from "express";

import * as wifiService from "../services/wifiService";

export async function create(req: Request, res: Response){
  await wifiService.create(req.body);
  res.sendStatus(201);
}

export async function getWifisUser(req: Request, res: Response){
  const userId = Number(res.locals.user.id);

  const wifis = await wifiService.getWifisUser(userId);
  res.send(wifis);
}

export async function getWifi(req: Request, res: Response){
  const wifiId = Number(req.params.wifiId);
  const userId = Number(res.locals.user.id);

  const wifi = await wifiService.getWifi(wifiId, userId);
  res.send(wifi);
}

export async function deleteWifi(req: Request, res: Response){
  const wifiId = Number(req.params.wifiId);
  const userId = Number(res.locals.user.id);

  await wifiService.deleteWifi(wifiId, userId);
  res.sendStatus(204);
}