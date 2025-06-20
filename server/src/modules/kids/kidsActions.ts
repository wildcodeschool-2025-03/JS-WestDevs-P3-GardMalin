import type { RequestHandler } from "express";
import kidsRepository from "./kidsRepository";

const browse: RequestHandler = async (req, res) => {
  const result = await kidsRepository.readAll();
  res.json(result);
};

export default { browse };
