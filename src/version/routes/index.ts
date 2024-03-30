import { Router } from 'express';
import { celebrate as validateRequest } from 'celebrate';
import sendVersion from '../middlewares/sendVersion';
import versionRequestSchema from '../schemas/versionRequestSchema';

const router = Router();

router.get('/', validateRequest(versionRequestSchema), sendVersion);

export default router;
