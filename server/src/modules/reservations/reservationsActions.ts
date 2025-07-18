import type { RequestHandler } from "express";
import reservationsRepository from "./reservationsRepository";

const browse: RequestHandler = async (req, res) => {
  const result = await reservationsRepository.readAll();
  res.json(result);
};

const read: RequestHandler = async (req, res) => {
  try {
    const result = await reservationsRepository.readById(req.params.id);

    if (result) {
      res.json(result);
    } else {
      res.status(404).send("Réservation non trouvée");
    }
  } catch (err) {
    res.status(500);
  }
};

const add: RequestHandler = async (req, res) => {
  try {
    const { kid_id, nursery_id, date, is_validated } = req.body;
    const newReservation = await reservationsRepository.create({
      kid_id,
      nursery_id,
      date,
      is_validated,
    });
    console.info(newReservation);

    res.status(201).json("Votre place est bien réservée");
  } catch (err) {
    res.status(500).json("Erreur lors de la création de la réservation");
  }
};

const readByParentID: RequestHandler = async (req, res) => {
  try {
    const { userId } = req.params;
    const reservations =
      await reservationsRepository.readByParentUserId(userId);
    res.json(reservations);
  } catch (err) {
    console.error("Erreur lors de la récupération des réservations :", err);
    res
      .status(500)
      .json({ error: "Erreur lors de la récupération des réservations" });
  }
};

export default { browse, read, add, readByParentID };
