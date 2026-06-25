class PetService {
  constructor(pet) {
    this.pet = pet
  }

  setPet = async ({ userId, name }) => {
    const existing = await this.pet.findOne({ where: { name, userId } })
    if (existing) throw new Error("La mascota ya existe para este usuario")

    return this.pet.create({ name, userId })
  }

  updatePet = async ({ petId, userId, name }) => {
    const pet = await this.pet.findOne({ where: { id: petId, userId } })
    if (!pet) throw new Error("No se encontró la mascota")

    await pet.update({ name })
    return pet
  }

  deletePet = async ({ petId, userId }) => {
    const pet = await this.pet.findOne({ where: { id: petId, userId } })
    if (!pet) throw new Error("No se encontró la mascota")

    await pet.destroy()
    return pet
  }

  getPetsByUser = async (userId) => {
    return this.pet.findAll({
      where: { userId },
      attributes: ["id", "name", "userId"],
    })
  }
}

export default PetService