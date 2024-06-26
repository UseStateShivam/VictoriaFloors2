import express from 'express';
import { flatWiseData } from '../controllers/flatWiseData.controller.js';

const router = express.Router();

router.post('/', flatWiseData)

export default router;
