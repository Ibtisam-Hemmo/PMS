import { Router } from 'express';
import adminRouter from './adminRoutes';
import authRouter from './authRoutes';
import pharmaciesRouter from './pharamcies';

const router = Router();

router.use(authRouter);
router.use(adminRouter);
router.use(pharmaciesRouter);

export default router;
