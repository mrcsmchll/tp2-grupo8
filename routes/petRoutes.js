import { Router } from "express"
import { authToken } from "../middlewares/auth.js"
import petController from "../containers/petContainer.js"

const petRoutes = Router()

petRoutes.use(authToken)

petRoutes.post("/", petController.addPet)
petRoutes.put("/:id", petController.updatePet)
petRoutes.delete("/:id", petController.deletePet)
petRoutes.get("/me", petController.getMyPets)

export default petRoutes