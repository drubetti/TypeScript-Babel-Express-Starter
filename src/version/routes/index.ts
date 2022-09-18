import { Router } from 'express';
import version from '../middlewares/version.js';

const router = Router();

router.get('/', version);

export default router;
