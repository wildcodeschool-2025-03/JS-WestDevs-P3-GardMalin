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
import usersActions from "./modules/users/usersActions";
import auth from "./utils/auth";

router.get("/kids", kidsActions.browse);
router.get("/nurseries", nurseriesActions.browse);
router.get("/parents", parentsActions.browse);
router.get("/users", usersActions.browse);
router.get("/parents/:id", parentsActions.read);

router.post("/user", auth.hashPassword, usersActions.add);
router.post("/login", auth.login);

/* ************************************************************************* */

export default router;
