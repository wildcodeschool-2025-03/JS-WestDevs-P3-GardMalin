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

export default { browse, add };
