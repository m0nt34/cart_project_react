import express from 'express'
import apiServices from '../services/apiServices.js';
const router = express.Router();

router.get('/games',apiServices.get)
router.get('/pages',apiServices.getPagesLength)

export default router  