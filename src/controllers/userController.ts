import { Request, Response } from "express";
import * as userService from "../services/userService";

export async function register(req: Request, res: Response) {
  await userService.register(req.body);
  res.sendStatus(201);
}

export async function login(req: Request, res: Response) {
  const { email, password } = req.body;

  const user = await userService.login({ email, password });
  res.send(user);
}