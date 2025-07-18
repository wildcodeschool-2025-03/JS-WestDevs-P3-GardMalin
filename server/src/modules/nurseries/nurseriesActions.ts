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

const add: RequestHandler = async (req, res) => {
  try {
    const nursery = await nurseriesRepository.create(req.body);

    if (nursery) {
      res.status(201).json("Congratulation your nursery has been created !");
    } else {
      res
        .status(404)
        .json(
          "Sorry, but it seems you made a mistake registering your establishment.",
        );
    }
  } catch (err) {
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

const edit: RequestHandler = async (req, res) => {
  try {
    const result = await nurseriesRepository.update(req.body, req.params.id);

    if (result) {
      res.status(201).json(`${req.body.name} has been updated successfully`);
    } else {
      res.status(404).json("This nursery doesn't exist");
    }
  } catch (err) {
    res.status(500).json("Internal server error");
  }
};

const destroy: RequestHandler = async (req, res) => {
  const deleteNursery = await nurseriesRepository.delete(req.params.id);

  if (deleteNursery) {
    res.status(200).json("A nursery has been successfully deleted !");
  } else {
    res.status(404).json("Impossible to delete a nursery");
  }
};

export default { browse, read, add, readByUserId, edit, destroy };
