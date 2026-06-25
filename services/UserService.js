import { Model, where } from "sequelize"

class UserService {

    constructor(user){
        this.user = user
    }

    getUserById = async (id) => {
        const user = await this.user.findOne({
            where: id,
            attributes: ["id", "name", "email", "password"]
        })

        if (!user) throw new Error("No se encontro el usuario")

        return user
    }

    setUser =  async ({ name, email, password }) => {
        let user = await this.user.findOne({
            where: {email}
        })

        if (user) throw new Error("El email ya existe")

        user = await this.user.create({ name, email, password });
        return user;
    }

}

export default UserService;