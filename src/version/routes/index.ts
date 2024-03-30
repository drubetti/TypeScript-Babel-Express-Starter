import { Router } from 'express';
import { celebrate as validateRequest } from 'celebrate';
import sendVersion from '../middlewares/sendVersion.js';
import versionRequestSchema from '../schemas/versionRequestSchema.js';

const router = Router();

router.get('/', validateRequest(versionRequestSchema), sendVersion);

export default router;
