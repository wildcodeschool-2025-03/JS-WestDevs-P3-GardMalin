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
    console.error("Error creating parent:", err);
    res.status(500).json({ error: "Internal server error", details: err });
  }
};

const destroy: RequestHandler = async (req, res) => {
  const deleteParent = await parentsRepository.delete(req.params.id);

  if (deleteParent) {
    res.status(200).json("A profile parent has been successfully deleted !");
  } else {
    res.status(404).json("Impossible to delete a profile parent");
  }
};

export default { browse, read, add, destroy };
