import { Router } from "express";
import auth from "../middlewares/auth.js";
import userController from "../containers/userContainer.js"

const userRoutes = Router()

userRoutes.post("/signup", userController.setUser)
userRoutes.get("/:id", auth, userController.getUserById)

export default userRoutes