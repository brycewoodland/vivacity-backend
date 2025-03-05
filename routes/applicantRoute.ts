console.log('Inside applicantRoute.js');
import { Router } from 'express';
import getApplicantInformation  from '../controllers/applicantController';

const router = Router();

console.log('Registering GET / route for applicant information.');
router.get('/awesome/applicant', getApplicantInformation);

export default router;