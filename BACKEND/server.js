import express from 'express'
import cors from 'cors'
import "dotenv/config"
import multer from 'multer';
import connectDB from './config/db.js';
import dns from 'dns';
dns.setServers(["1.1.1.1", "8.8.8.8"])
const app = express()
const PORT = process.env.PORT || 3000;
import authRouter from './routes/auth.routes.js';
import employeesRouter from './routes/employee.route.js';
import profileRouter from './routes/profile.route.js';
import attendanceRouter from './routes/attendance.routes.js';
// middleware

app.use(cors())
app.use(express.json())
app.use(multer().none())

// Route

app.get("/", (req, res) => res.send("server is running"))
app.use('/api/auth', authRouter)
app.use('/api/employees', employeesRouter)
app.use('/api/profile', profileRouter)
app.use('/api/attendance', attendanceRouter)
await connectDB();
app.listen(PORT, () => console.log(`Server running on port ${PORT}`))