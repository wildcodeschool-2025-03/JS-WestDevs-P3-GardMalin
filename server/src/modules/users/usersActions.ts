import type { RequestHandler } from "express";
import usersRepository from "./usersRepository";

const browse: RequestHandler = async (req, res) => {
  const result = await usersRepository.readAll();
  res.json(result);
};

const add: RequestHandler = async (req, res) => {
  try {
    const user = await usersRepository.create(req.body);

    if (user) {
      res
        .status(201)
        .json("Contragulations, your account has been created successfully !");
    } else {
      res.status(404).json("An error occured during the registration");
    }
  } catch (err) {
    res.sendStatus(500);
  }
};

const destroy: RequestHandler = async (req, res) => {
  const deleteParent = await usersRepository.delete(req.params.id);

  if (deleteParent) {
    res.status(200).json("A profile user has been successfully deleted !");
  } else {
    res.status(404).json("Impossible to delete a profile user");
  }
};

export default { browse, add, destroy };
