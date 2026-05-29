import {Router} from "express";
import { protect } from "../middleware/auth.middleware";
import { getDashboard } from "../controllers/Dashboard.controller";

const dashboardRouter = Router()

dashboardRouter.get('/', protect, getDashboard)

export default dashboardRouter;