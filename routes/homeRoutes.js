import { Router } from "express";
import homeController from "../containers/homeContainer.js"

const homeRoutes = Router()

homeRoutes.get("/", homeController.getHome)
homeRoutes.get("/readme", homeController.getReadme)

export default homeRoutes