import { Router } from "express"
import { authToken } from "../middlewares/auth.js"
import petController from "../containers/petContainer.js"

const petRoutes = Router()

petRoutes.use(authToken)

petRoutes.post("/", petController.addPet)
petRoutes.get("/me", petController.getMyPets)
petRoutes.put("/:id", petController.updatePet)
petRoutes.delete("/:id", petController.deletePet)

export default petRoutes