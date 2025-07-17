import express from "express";

const router = express.Router();

/* ************************************************************************* */
// Define Your API Routes Here
/* ************************************************************************* */

// Define item-related routes
import itemActions from "./modules/item/itemActions";

router.get("/items", itemActions.browse);
router.get("/items/:id", itemActions.read);
router.post("/items", itemActions.add);

import kidsActions from "./modules/kids/kidsActions";
import nurseriesActions from "./modules/nurseries/nurseriesActions";
import parentsActions from "./modules/parents/parentsActions";
import reservationsActions from "./modules/reservations/reservationsActions";
import usersActions from "./modules/users/usersActions";
import auth from "./utils/auth";
import validation from "./utils/validation";

router.get("/kids", kidsActions.browse);
router.post("/kids", kidsActions.add);
router.get("/kids/:id", kidsActions.read);
router.get("/kids/by-user/:userId", kidsActions.readByUserId);

router.get("/nurseries", nurseriesActions.browse);
router.get("/nurseries/:id", nurseriesActions.read);
router.get("/nurseries/by-user/:id", nurseriesActions.readByUserId);

router.get("/parents", parentsActions.browse);
router.post("/parents", parentsActions.add);
router.get("/parents/:id", parentsActions.read);
router.delete("/parents/:id", parentsActions.destroy);

router.get("/reservations", reservationsActions.browse);
router.get("/reservationsone", reservationsActions.read);
router.get("/reservations/:id", reservationsActions.read);
router.post("/reservations", reservationsActions.add);

router.get("/users", usersActions.browse);
router.post(
  "/user",
  validation.userValidation,
  auth.hashPassword,
  usersActions.add,
);
router.delete("/user/:id", usersActions.destroy);

router.post("/login", validation.userValidation, auth.login);
router.post("/logout", auth.logout);
router.get("/refresh", auth.refreshToken);

/* ************************************************************************* */

export default router;
