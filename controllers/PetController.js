class PetController {
  constructor(service) {
    this.petService = service
  }

  addPet = async (req, res) => {
    try {
      const { name } = req.body
      if (!name) throw new Error("Complete el nombre de la mascota")

      const pet = await this.petService.setPet({
        userId: req.user.id,
        name,
      })

      res.status(201).send({ success: true, message: pet })
    } catch (error) {
      res.status(400).send({ success: false, message: error.message })
    }
  }

  updatePet = async (req, res) => {
    try {
      const { id } = req.params
      const { name } = req.body
      if (!name) throw new Error("Complete el nombre de la mascota")

      const pet = await this.petService.updatePet({
        petId: id,
        userId: req.user.id,
        name,
      })

      res.status(200).send({ success: true, message: pet })
    } catch (error) {
      res.status(400).send({ success: false, message: error.message })
    }
  }

  deletePet = async (req, res) => {
    try {
        const { id } = req.params
        await this.petService.deletePet({
        petId: id,
        userId: req.user.id,
        })

        res.status(200).send({ success: true, message: "Mascota eliminada" })
    } catch (error) {
        res.status(400).send({ success: false, message: error.message })
    }
  }

  getMyPets = async (req, res) => {
    try {
        console.log("🚀 ~ PetController ~ req.user.id:", req.user.id)
        const pets = await this.petService.getPetsByUser(req.user.id)
        res.status(200).send({ success: true, message: pets })
    } catch (error) {
        res.status(400).send({ success: false, message: error.message })
    }
  }
}

export default PetController