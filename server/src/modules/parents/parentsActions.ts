import type { RequestHandler } from "express";
import parentsRepository from "./parentsRepository";

const browse: RequestHandler = async (req, res) => {
  const result = await parentsRepository.readAll();
  res.json(result);
};

export default { browse };
