import { celebrate as validateRequest } from 'celebrate';
import { Router } from 'express';
import sendVersion from '../middlewares/sendVersion';
import versionRequestSchema from '../schemas/versionRequestSchema';

const router = Router();

router.get('/', validateRequest(versionRequestSchema), sendVersion);

export default router;
