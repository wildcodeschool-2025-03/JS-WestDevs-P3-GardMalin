import type { RequestHandler } from "express";
import nurseriesRepository from "./nurseriesRepository";

const browse: RequestHandler = async (req, res) => {
  if (req.query.reservationDate) {
    const result = await nurseriesRepository.readByDate(
      req.query.reservationDate.toString(),
    );
    res.json(result);
  } else {
    const result = await nurseriesRepository.readAll();
    res.json(result);
  }
};

const read: RequestHandler = async (req, res) => {
  try {
    const result = await nurseriesRepository.readById(req.params.id);

    if (result) {
      res.json(result);
    } else {
      res.status(404).send("This ID doesn't exist !");
    }
  } catch {
    res.sendStatus(500);
  }
};

const readByUserId: RequestHandler = async (req, res) => {
  try {
    const result = await nurseriesRepository.readByUserId(req.params.id);

    if (result) {
      res.json(result);
    } else {
      res.status(404).send("This ID doesn't exist !");
    }
  } catch {
    res.sendStatus(500);
  }
};

export default { browse, read, readByUserId };
