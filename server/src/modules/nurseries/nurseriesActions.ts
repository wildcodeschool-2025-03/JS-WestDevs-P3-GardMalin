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

export default { browse };
