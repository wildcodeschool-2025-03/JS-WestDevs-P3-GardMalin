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

const edit: RequestHandler = async (req, res) => {
  const id = Number.parseInt(req.params.id);

  const { gender, firstname, lastname, age, walker, allergy, handicap } =
    req.body;

  if (!req.body) {
    res.sendStatus(400);
    return;
  }

  try {
    const affectedRows = await kidsRepository.update({
      id,
      gender,
      firstname,
      lastname,
      age,
      walker,
      allergy,
      handicap,
      parent_id: 0,
    });

    if (affectedRows === 0) {
      res.sendStatus(404);
    } else {
      res.sendStatus(204);
    }
  } catch (err) {
    res.sendStatus(500);
  }
};

const destroy: RequestHandler = async (req, res) => {
  try {
    const deleteKid = await kidsRepository.delete(req.params.id);

    if (deleteKid) {
      res.status(200).json("A profile kid has been successfully deleted !");
    } else {
      res.status(404).json("Impossible to delete a profile kid");
    }
  } catch (err) {
    res.status(500);
  }
};

export default { browse, add, read, readByUserId, edit, destroy };
