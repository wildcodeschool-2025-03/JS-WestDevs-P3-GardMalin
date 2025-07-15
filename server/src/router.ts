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

router.get("/nurseries", nurseriesActions.browse);

router.get("/parents", parentsActions.browse);
router.get("/parents/:id", parentsActions.read);

router.get("/reservations", reservationsActions.browse);
router.get("/reservations", reservationsActions.read);
router.post("/reservations", reservationsActions.add);

router.get("/users", usersActions.browse);
router.post(
  "/user",
  validation.userValidation,
  auth.hashPassword,
  usersActions.add,
);

router.post("/login", validation.userValidation, auth.login);

/* ************************************************************************* */

export default router;
