import express from 'express';
import { phoneNumber } from '../controllers/phoneNumber.controller.js';

const router = express.Router();

router.post('/', phoneNumber);

export default router;
