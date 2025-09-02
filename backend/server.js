import express from 'express'
import dotenv from 'dotenv'
import cors from 'cors'
import connectDB from './config/db.js'
import productRoutes from './routes/productRoutes.js'
import authRoutes from './routes/authRoutes.js'
import userRoutes from './routes/userRoutes.js';
import { errorHandler } from './middleware/errorHandler.js'

dotenv.config()

const PORT = process.env.PORT || 5000
const app = express()
app.use(cors())
app.use(express.json())

connectDB()

app.use('/api/products', productRoutes)
app.use('/api/auth', authRoutes)
app.use('/api/users', userRoutes);

app.use(errorHandler)

app.listen(PORT, () => console.log(`backend is running on port ${PORT}`))
