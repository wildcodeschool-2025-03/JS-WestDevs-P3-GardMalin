import type { RequestHandler } from "express";
import reservationsRepository from "./reservationsRepository";

const browse: RequestHandler = async (req, res) => {
  const date = req.query.date as string;
  const nurseryIdStr = req.query.nurserie_id as string;

  if (!date || !nurseryIdStr) {
    res.status(400).json({ error: "Paramètres manquants" });
    return;
  }

  const nurseryId = Number.parseInt(nurseryIdStr, 10);

  if (Number.isNaN(nurseryId)) {
    res.status(400).json({ error: "Paramètre nurserie_id invalide" });
    return;
  }

  const result = await reservationsRepository.readAll(date, nurseryId);
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

const readByNurseryId: RequestHandler = async (req, res) => {
  try {
    const nurseryId = Number.parseInt(req.params.nurseryId, 10);
    const result = await reservationsRepository.readByNurseryId(nurseryId);
    res.json(result);
  } catch (err) {
    console.error("Erreur lors de la récupération des réservations :", err);
    res
      .status(500)
      .json({ error: "Erreur lors de la récupération des réservations" });
  }
};

const readReservationsByNurseryAndDate: RequestHandler = async (req, res) => {
  try {
    const nurseryId = Number.parseInt(req.params.nurseryId, 10);
    const { date } = req.query;

    if (!date || typeof date !== "string") {
      res.status(400).json({ error: "Date manquante ou invalide" });
      return;
    }

    const result =
      await reservationsRepository.readReservationsByNurseryAndDate(
        nurseryId,
        date,
      );
    res.json(result);
  } catch (err) {
    console.error(err);
    res
      .status(500)
      .json({ error: "Erreur lors de la récupération des réservations" });
  }
};

export default {
  browse,
  read,
  add,
  readByParentID,
  readByUserId,
  readByNurseryId,
  readReservationsByNurseryAndDate,
};
