import { Wifi } from "@prisma/client";

import { checkUser } from "../utils/autUtils";
import * as passUtils from "../utils/encryptUtils";
import * as wifiRepository from "../repositories/wifiRepository";

export type wifiData = Omit<Wifi, 'id' | 'createdAt'>;

export async function create(wifi: wifiData) {
  const hashedPassword = passUtils.encryptSecurityPass(wifi.password);
  await wifiRepository.create({ ...wifi, password: hashedPassword });
}

export async function getWifisUser(userId: number) {
  const wifis =  await wifiRepository.getWifisUser(userId);
  return passUtils.decryptObjectsPass(wifis);
}

export async function getWifi(wifiId: number, userId: number) {
  const wifi = await returnObject(wifiId);
  checkUser(wifi.userId, userId);

  return passUtils.decryptObjectsPass([wifi]);
}

export async function deleteWifi(wifiId: number, userId: number) {
  const wifi = await returnObject(wifiId);
  checkUser(wifi.userId, userId);

  await wifiRepository.deleteWifi(wifiId, userId);
}

async function returnObject(wifiId: number) {
  const wifi = await wifiRepository.getWifi(wifiId);
  if (!wifi)  throw { type: "NotFound", message: "Wifi not found." };
  
  return wifi;
}