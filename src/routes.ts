import { Router } from "express";

import { AuthenticateUserController } from "./controllers/AuthenticateUserController";
import { CreateComplimentController } from "./controllers/CreateComplimentController";
import { CreateTagController } from "./controllers/CreateTagController";
import { CreateUserController } from "./controllers/CreateUserController";
import { ListTagsController } from "./controllers/ListTagsController";
import { ListUserReceivedComplimentsController } from "./controllers/ListUserReceivedComplimentsController";
import { ListUsersController } from "./controllers/ListUsersController";
import { ListUserSentComplimentsController } from "./controllers/ListUserSentComplimentsController";
import { ensureAdmin } from "./middlewares/ensureAdmin";
import { ensureAuthenticated } from "./middlewares/ensureAuthenticated";

const router = Router();

const authenticateUserController = new AuthenticateUserController();
const createComplimentController = new CreateComplimentController()
const createTagController = new CreateTagController();
const createUserController = new CreateUserController();
const listTagsController = new ListTagsController();
const listUserReceivedComplimentsController = new ListUserReceivedComplimentsController();
const listUsersController = new ListUsersController();
const listUserSentComplimentsController = new ListUserSentComplimentsController();

// Authentication
router.post("/login", authenticateUserController.handle);

// Users
router.post("/users", createUserController.handle);
router.get("/users", ensureAuthenticated, listUsersController.handle);
router.get("/users/compliments/sent", ensureAuthenticated, listUserSentComplimentsController.handle);
router.get("/users/compliments/received", ensureAuthenticated, listUserReceivedComplimentsController.handle);

// Tags
router.post("/tags", ensureAuthenticated, ensureAdmin, createTagController.handle);
router.get("/tags", ensureAuthenticated, listTagsController.handle);

// Compliments
router.post("/compliments", ensureAuthenticated, createComplimentController.handle);

export { router };