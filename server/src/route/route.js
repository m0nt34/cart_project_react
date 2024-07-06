import express from 'express'
import services from '../services/services.js';
import apiRoutes from './apiRoutes.js'
const router = express.Router();

router.post('/newGame',services.add)

router.use('/get',apiRoutes)
export default router 