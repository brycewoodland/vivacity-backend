import { Router } from 'express';
import { getApplicantInformation } from '../controllers/applicantController';

const router = Router();

router.get('/awesome/applicant', getApplicantInformation);

export default router;