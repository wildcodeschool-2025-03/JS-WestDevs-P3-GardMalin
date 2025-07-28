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
      res.status(404).send();
    }
  } catch (err) {
    res.status(500);
  }
};

const readByUserId: RequestHandler = async (req, res) => {
  try {
    const result = await parentsRepository.readByUserId(req.params.userId);

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
  const id = Number.parseInt(req.params.id);

  const { firstname, lastname, street, postal_code, city, phone_number } =
    req.body;

  if (!req.body) {
    res.sendStatus(400);
    return;
  }

  try {
    const affectedRows = await parentsRepository.update({
      id,
      firstname,
      lastname,
      street,
      postal_code,
      city,
      phone_number,
      user_id: 0,
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

const add: RequestHandler = async (req, res) => {
  try {
    const {
      firstname,
      lastname,
      street,
      postal_code,
      city,
      phone_number,
      user_id,
    } = req.body;

    if (!firstname || !lastname || !postal_code || !city || !user_id) {
      res.status(400).json({ error: "Missing required fields" });
      return;
    }

    const newParent = await parentsRepository.create(req.body);

    if (newParent) {
      res.status(201).json("Congratulations, your account has been created");
    } else {
      res
        .status(400)
        .json({ error: "Something went wrong during registration" });
    }
  } catch (err) {
    res.status(500).json({ error: "Internal server error", details: err });
  }
};

const destroy: RequestHandler = async (req, res) => {
  try {
    const deleteParent = await parentsRepository.delete(req.params.id);

    if (deleteParent) {
      res.status(200).json("A profile parent has been successfully deleted !");
    } else {
      res.status(404).json("Impossible to delete a profile parent");
    }
  } catch (err) {
    res.status(500);
  }
};

export default { browse, read, readByUserId, edit, add, destroy };
