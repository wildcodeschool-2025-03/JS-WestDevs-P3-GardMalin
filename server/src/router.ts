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
import nurserysActions from "./modules/nurserys/nurserysActions";
import parentsActions from "./modules/parents/parentsActions";
import usersActions from "./modules/users/usersActions";

router.get("/kids", kidsActions.browse);
router.get("/nurserys", nurserysActions.browse);
router.get("/parents", parentsActions.browse);
router.get("/users", usersActions.browse);

/* ************************************************************************* */

export default router;
