import { Router } from "express";
import homeRoutes from "./homeRoutes.js"
import userRoutes from "./userRoutes.js"
import petRoutes from "./petRoutes.js"

const router = Router();

router.use("/", homeRoutes)
router.use("/readme", homeRoutes)
router.use("/user", userRoutes)
router.use("/pet", petRoutes)

export default router