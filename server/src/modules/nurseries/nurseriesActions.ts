import type { RequestHandler } from "express";
import nurseriesRepository from "./nurseriesRepository";

const browse: RequestHandler = async (req, res) => {
  const result = await nurseriesRepository.readAll();
  res.json(result);
};

export default { browse };
