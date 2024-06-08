import express from 'express';
import { signin, signup } from '../controllers/auth.controllers.js';
import { google } from '../controllers/auth.controllers.js';

const router = express.Router();

router.post('/signup', signup);
router.post('signin', signin);
router.post('/google', google);

export default router;