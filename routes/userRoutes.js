import { Router } from "express"
import { authApiKey } from "../middlewares/auth.js"
import userController from "../containers/userContainer.js"

const userRoutes = Router()

userRoutes.get("/me", userController.me)
userRoutes.get("/:id", authApiKey, userController.getUserById)
userRoutes.post("/signup", userController.setUser)
userRoutes.post("/login", userController.login)
userRoutes.put("/:id", authApiKey, userController.updateUser)
userRoutes.delete("/:id", authApiKey, userController.deleteUser)

export default userRoutes