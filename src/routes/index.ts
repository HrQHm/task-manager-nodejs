import { Router } from "express";
import { tasksRouter } from "./taskRoutes";

const router = Router();

router.use("/tasks", tasksRouter);

export { router };