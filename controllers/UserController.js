class UserController {
    constructor(service) {
        this.userService = service
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

}

export default UserController;