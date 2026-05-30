import { Router } from 'express';
import { protect, protectAdmin } from '../middleware/auth.middleware.js';
import { createPayslip, getPayslip, getPayslipById } from '../controllers/Payslip.controller.js';

const payslipRouter = Router();

payslipRouter.post('/', protect, protectAdmin, createPayslip)
payslipRouter.get('/', protect, getPayslip)
payslipRouter.get('/:id', protect, getPayslipById)

export default payslipRouter;