import { Model, where } from "sequelize"
import { generateToken, verifyToken } from "../utils/jwt.js"

class UserService {

    constructor(user){
        this.user = user
    }

    setUser =  async ({ name, email, password }) => {
        let user = await this.user.findOne({
            where: {email}
        })

        if (user) throw new Error("El email ya existe")

        user = await this.user.create({ name, email, password })
        return user
    }

    getUserById = async (id) => {
        const user = await this.user.findOne({
            where: id,
            attributes: ["id", "name", "email", "password"],
            individualHooks: true
        })

        if (!user) throw new Error("No se encontro el usuario")

        return user
    }

    login = async ({ email, password }) => {
        const user = await this.user.findOne({
            where: { email },
            attributes: ["id", "name", "email", "password"],
        })

        if (!user) throw new Error("Usuario no encontrado")

        const isValidPassword = await this.user.isValidPassword(password, user.password)

        if (!isValidPassword) throw new Error("Contraseña incorrecta")

        const payload = {
            id: user.id,
            name: user.name,
            roleId: user.roleId,
        }

        const token = generateToken(payload)
        return { token, id: user.id }
    }

    me = async (payload) => {
        const user = verifyToken(payload)
        return user
    }

    updateById = async ({id, name, email, password}) => {
        let user = await this.user.findOne({where: {id}, attributes: ["id"]})
        
        if (!user) throw Error("No se encontro el usuario")

        let updatedData = {}
        if (name) updatedData.name = name
        if (email) updatedData.email = email
        if (password) updatedData.password = password

        user = await this.user.update(updatedData, {
            where: {id},
            individualHooks: true
        })

        user = await this.user.findOne({
            where: {id},
            attributes: ["id", "name", "email", "password"]
        })
        
        return user
    }

    deleteById = async (id) => {
        let existe = await this.user.findOne({where: id, attributes: ["id"]})
        
        if (!existe) throw Error("No se encontro el usuario")
            
        const user = await this.user.destroy({where: id})
        return user
    }

}

export default UserService