import { Router } from 'express';
import applicantRoute from './applicantRoute';

const router = Router();

router.use('/applicants', applicantRoute);

export default router;