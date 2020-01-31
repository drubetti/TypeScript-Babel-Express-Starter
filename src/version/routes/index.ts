import { Router } from 'express';
import version from '../middlewares/version';

const router = Router();

router.get('/', version);

export default router;
