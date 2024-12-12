import { Request, Response } from 'express';

export const getApplicantInformation = async(req: Request, res: Response) => {
    res.send('Applicant Information');
};

