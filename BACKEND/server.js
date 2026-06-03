import express from 'express'
import cors from 'cors'
import "dotenv/config"
import multer from 'multer';
import connectDB from './config/db.js';
import { serve } from "inngest/express";
import { inngest, functions } from "./inngest/index.js"
import dns from 'dns';
dns.setServers(["1.1.1.1", "8.8.8.8"])
const app = express()
const PORT = process.env.PORT || 3000;
import authRouter from './routes/auth.routes.js';
import employeesRouter from './routes/employee.route.js';
import profileRouter from './routes/profile.route.js';
import attendanceRouter from './routes/attendance.routes.js';
import leaveRouter from './routes/leave.routes.js';
import payslipRouter from './routes/payslip.routes.js';
import dashboardRouter from './routes/dashboard.routes.js';
// middleware
const allowedOrigins = (origin, callback) => {
  const whitelist = [
    'http://localhost:5173',
    'http://localhost:3000',
    process.env.FRONTEND_URL
  ].filter(Boolean);

  // Allow all Vercel deployments and localhost for development
  if (!origin || 
      origin.includes('localhost') || 
      origin.includes('vercel.app') ||
      whitelist.includes(origin)) {
    callback(null, true);
  } else {
    callback(new Error('CORS not allowed'));
  }
};

app.use(cors({
  origin: allowedOrigins,
  credentials: true,
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization']
}))
app.use(express.json())
app.use(multer().none())

// Route

app.get("/", (req, res) => res.send("server is running!!!"))
app.use('/api/auth', authRouter)
app.use('/api/employees', employeesRouter)
app.use('/api/profile', profileRouter)
app.use('/api/attendance', attendanceRouter)
app.use('/api/leave', leaveRouter)
app.use('/api/payslips', payslipRouter)
app.use('/api/dashboard', dashboardRouter)
app.use("/api/inngest", serve({ client: inngest, functions }));
await connectDB();
app.listen(PORT, () => console.log(`Server running on port ${PORT}`))