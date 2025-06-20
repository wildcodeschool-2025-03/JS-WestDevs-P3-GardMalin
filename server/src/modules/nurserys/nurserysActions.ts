import type { RequestHandler } from "express";
import nurserysRepository from "./nurserysRepository";

const browse: RequestHandler = async (req, res) => {
  const result = await nurserysRepository.readAll();
  res.json(result);
};

export default { browse };
