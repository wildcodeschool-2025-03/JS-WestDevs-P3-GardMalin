import argon2 from "argon2";
import type { RequestHandler } from "express";
import usersRepository from "../modules/users/usersRepository";

const login: RequestHandler = async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await usersRepository.readByEmail(email);

    if (!user) {
      throw new Error("This user doesn't exist");
    }

    const isPasswordValid = await argon2.verify(user.password, password);

    if (!isPasswordValid) {
      throw new Error("Invalid password");
    }
  } catch (err) {
    res.sendStatus(500);
  }
};

export default { login };
