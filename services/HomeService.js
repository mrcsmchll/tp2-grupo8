import fs from "fs/promises"

class HomeService {

    README_PATH = "./README.md"

    getReadme = async () => {
        const data = await fs.readFile(this.README_PATH, "utf-8")
        return data
    }

}

export default HomeService;