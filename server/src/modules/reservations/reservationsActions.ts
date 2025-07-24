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

    if (!kid_id || !nursery_id || !date || typeof is_validated !== "boolean") {
      res.status(400).json({ error: "Champs manquants ou invalides" });
      return;
    }

    res.status(201).json({
      message: "Votre place est bien réservée",
    });
  } catch (err) {
    console.error("Erreur lors de la création de la réservation :", err);
    res.status(500).json("Erreur lors de la création de la réservation");
  }
};

const readByUserId: RequestHandler = async (req, res) => {
  try {
    const userId = Number.parseInt(req.params.userId, 10);
    const result = await reservationsRepository.readByUserId(userId);
    res.json(result);
  } catch (err) {
    console.error(err);
    res
      .status(500)
      .json(
        "Erreur lors de la récupération des réservations de l'utilisateur.",
      );
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

export default { browse, read, add, readByParentID, readByUserId };
