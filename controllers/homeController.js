class HomeController {
    constructor(service) {
        this.homeService = service
    }

    getHome = async (req, res) => {
        try {
            res.status(200).send({succes: true, message: "Bienvenid@!"})
        } catch (error) {
            res.status(400).send({succes: false, message: error.message})
        }
    }

    getReadme = async (req, res) => {
        try{
            const data = await this.homeService.getReadme()
            res.status(200).type("text/markdown").send(data)
        } catch(error){
            res.status(400).send({succes: false, message: error.message})
        }
    }

}

export default HomeController