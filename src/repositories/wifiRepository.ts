import connection from "../config/db";
import { wifiData } from "../services/wifiService";

export async function create(wifi: wifiData) {
  return connection.wifi.create({
    data: wifi
  });
}

export async function searchByTitleAndUserId(title: string, userId: number) {
  return connection.wifi.findFirst({
    where: {
      title,
      userId
    }
  });
}

export async function getWifisUser(userId: number) {
  return connection.wifi.findMany({
    where: {
      userId
    }
  });
}

export async function getWifi(wifiId: number) {
  return connection.wifi.findFirst({
    where: {
      id: wifiId
    }
  });
}

export async function deleteWifi(wifiId: number, userId: number) {
  return connection.wifi.delete({
    where: {
      id: wifiId,
    }
  });
}