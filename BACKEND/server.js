import express from 'express'
import cors from 'cors'
import "dotenv/config"
import multer from 'multer';
import connectDB from './config/db.js';
import dns from 'dns';
dns.setServers(["1.1.1.1", "8.8.8.8"])
const app = express()
const PORT = process.env.PORT || 3000;

// middleware

app.use(cors())
app.use(express.json())
app.use(multer().none())

// Route

app.get("/", (req, res) => res.send("server is running"))
await connectDB();
app.listen(PORT, () => console.log(`Server running on port ${PORT}`))