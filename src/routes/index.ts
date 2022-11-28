import { Router, Request, Response } from 'express';
const router = Router();

router.get('/status', (req: Request, res: Response) => {
  res.status(200).json({
    message: 'server is running',
  });
});

const handleCall = (req: Request, res: Response) => {
  return res.status(200).end();
};
router.get('/', handleCall);

export default router;
