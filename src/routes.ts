import { Router } from "express";

import { CreateUserController } from "./controllers/CreateUserController";
import { CreateTagController } from "./controllers/CreateTagController";
import { ensureAdmin } from "./middlewares/ensureAdmin";

const router = Router();

const createUserController = new CreateUserController();
const createTagController = new CreateTagController();

// Users
router.post("/users", createUserController.handle);

// Tags
router.post("/tags", ensureAdmin, createTagController.handle);

export { router };