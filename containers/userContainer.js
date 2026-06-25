import UserController from "../controllers/UserController.js"
import UserService from "../services/UserService.js"
import {User} from "../Models/index.js"

const userService = new UserService(User)
const userController = new UserController(userService)

export default userController;
