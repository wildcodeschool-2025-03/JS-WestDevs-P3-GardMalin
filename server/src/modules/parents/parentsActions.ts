import type { RequestHandler } from "express";
import parentsRepository from "./parentsRepository";

const browse: RequestHandler = async (req, res) => {
  const result = await parentsRepository.readAll();
  res.json(result);
};

const read: RequestHandler = async (req, res) => {
  try {
    const result = await parentsRepository.readById(req.params.id);

    if (result) {
      res.json(result);
    } else {
      res.status(404).json();
    }
  } catch (err) {
    res.status(500);
  }
};

export default { browse, read };
