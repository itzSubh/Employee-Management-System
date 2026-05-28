import {Router} from 'express'
import { getProfile, updateProfile } from '../controllers/Profile.controller.js';
import { protect } from '../middleware/auth.middleware.js';
const profileRouter = Router();

profileRouter.get("/", protect, getProfile);
profileRouter.post("/", protect, updateProfile);

export default profileRouter;