import { Router } from "express";
import homeRoutes from "./homeRoutes.js"
import userRoutes from "./userRoutes.js"
const router = Router();

router.use("/", homeRoutes)
router.use("/readme", homeRoutes)
router.use("/user", userRoutes)

export default router