import express from 'express'
import cors from 'cors'

const router = express.Router();
router.use(
  cors({
    origin:'http://localhost:5173',
    credentials:false,
  })
)
router.use(express.json())

export default router
