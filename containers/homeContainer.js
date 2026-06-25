import HomeController from "../controllers/HomeController.js"
import HomeService from "../services/HomeService.js"

const homeService = new HomeService()
const homeController = new HomeController(homeService)

export default homeController
