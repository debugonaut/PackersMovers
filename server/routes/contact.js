import { Router } from 'express';
import rateLimiter from '../middleware/rateLimiter.js';
import { validateContact } from '../middleware/validator.js';
import { sendEnquiry } from '../services/emailService.js';

const router = Router();

router.post('/', [rateLimiter, ...validateContact], async (req, res, next) => {
  try {
    const { name, phone, service, message } = req.body;
    await sendEnquiry({ name, phone, service, message });

    res.status(200).json({
      success: true,
      message:
        'Your enquiry has been received. We will contact you shortly.',
    });
  } catch (error) {
    next(error);
  }
});

export default router;
