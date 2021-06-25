import { Router } from "express";

import { AuthenticateUserController } from "./controllers/AuthenticateUserController";
import { CreateComplimentController } from "./controllers/CreateComplimentController";
import { CreateTagController } from "./controllers/CreateTagController";
import { CreateUserController } from "./controllers/CreateUserController";
import { ensureAdmin } from "./middlewares/ensureAdmin";

const router = Router();

const authenticateUserController = new AuthenticateUserController();
const createComplimentController = new CreateComplimentController()
const createTagController = new CreateTagController();
const createUserController = new CreateUserController();

// Authentication
router.post("/login", authenticateUserController.handle);

// Users
router.post("/users", createUserController.handle);

// Tags
router.post("/tags", ensureAdmin, createTagController.handle);

// Compliments
router.post("/compliments", createComplimentController.handle);

export { router };