class UserController {
    constructor(service) {
        this.userService = service
    }
    
    setUser = async (req, res) => {
        try {
            const {name, email, password} = req.body
            if (!name || !email || !password) throw new Error("Complete los campos name, email y password")

            const user = await this.userService.setUser({name, email, password})

            res.status(201).send({succes: true, message: user})
        } catch (error) {
            res.status(400).send({succes: false, message: error.message})
        }
            
    }

    getUserById = async (req, res) => {
        try {
            const id = req.params            

            const user = await this.userService.getUserById(id)

            res.status(200).send({succes: true, message: user})
        } catch (error) {
            res.status(400).send({succes: false, message: error.message})
        }
    }

    login = async (req, res) => {
        try {
            const { email, password } = req.body

            if ( !email || !password) throw new Error("Complete los campos email y password")

            const user = await this.userService.login({ email, password})
            
            res.cookie("payload", user.token)
            res.status(200).send({ success: true, message: user.id })
        } catch (error) {
            res.status(400).send({ success: false, message: error.message })
        }
    }
    
    me = async (req, res) => {
        try {
            const {payload} = req.cookies
            const user = await this.userService.me(payload)
            res.status(200).send({ success: true, message: user})
        } catch (error) {
            res.status(400).send({ success: false, message: error.message })
        }
    }

    updateUser = async (req, res) => {
        try {
            const { id, name, email, password } = req.body

            if ( !id ) throw new Error("Id vacio")
            if ( !name && !email && !password) throw new Error("Complete alguno de los campos name, email y password")

            const user = await this.userService.updateById({id, name, email, password})
            res.status(200).send({ success: true, message: "Usuario actualizado", data: user})
        } catch (error) {
            res.status(400).send({ success: false, message: error.message })
        }
    }

    deleteUser = async (req, res) => {
        try {
            const id = req.params
            const user = await this.userService.deleteById(id)
            res.status(200).send({ success: true, message: "Usuario eliminado"})
        } catch (error) {
            res.status(400).send({ success: false, message: error.message })
        }
    }

}

export default UserController