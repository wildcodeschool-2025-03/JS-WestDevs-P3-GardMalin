import type { RequestHandler } from "express";
import kidsRepository from "./kidsRepository";

const browse: RequestHandler = async (req, res) => {
  const result = await kidsRepository.readAll();
  res.json(result);
};

const add: RequestHandler = async (req, res) => {
  try {
    const kid = await kidsRepository.create(req.body);

    if (kid) {
      res
        .status(201)
        .json("Congratulation your kid has been created in your profile !");
    } else {
      res
        .status(404)
        .json("You are doing a mistake during your registration kid ");
    }
  } catch (err) {
    res.sendStatus(500);
  }
};

const read: RequestHandler = async (req, res) => {
  try {
    const result = await kidsRepository.readById(req.params.id);

    if (result) {
      res.json(result);
    } else {
      res.status(404).send("This ID doesn't exist !");
    }
  } catch {
    res.sendStatus(500);
  }
};

const readByUserId: RequestHandler<{ userId: string }> = async (req, res) => {
  const { userId } = req.params;

  try {
    const kids = await kidsRepository.readByUserId(Number(userId));
    res.status(200).json(kids);
  } catch (err) {
    res.sendStatus(500);
  }
};

export default { browse, add, read, readByUserId };
