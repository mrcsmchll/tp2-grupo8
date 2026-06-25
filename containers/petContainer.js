import PetController from "../controllers/PetController.js"
import PetService from "../services/PetService.js"
import { Pet } from "../Models/index.js"

const petService = new PetService(Pet)
const petController = new PetController(petService)

export default petController