import type { RequestHandler } from "express";
import usersRepository from "./usersRepository";

const browse: RequestHandler = async (req, res) => {
  const result = await usersRepository.readAll();
  res.json(result);
};

export default { browse };
