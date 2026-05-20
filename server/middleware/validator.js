import { body, validationResult } from 'express-validator';

export const validateContact = [
  // 1. name — required, trimmed, not empty, max 100, letters + spaces only
  body('name')
    .trim()
    .notEmpty()
    .withMessage('Name is required.')
    .isLength({ max: 100 })
    .withMessage('Name must be at most 100 characters.')
    .matches(/^[a-zA-Z\s]+$/)
    .withMessage('Name must contain only letters and spaces.'),

  // 2. phone — required, trimmed, valid 10-digit Indian mobile number
  body('phone')
    .trim()
    .notEmpty()
    .withMessage('Phone number is required.')
    .matches(/^[6-9]\d{9}$/)
    .withMessage(
      'Please enter a valid 10-digit Indian mobile number starting with 6, 7, 8, or 9.'
    ),

  // 3. service — required, trimmed, must be one of the allowed values
  body('service')
    .trim()
    .notEmpty()
    .withMessage('Service type is required.')
    .isIn([
      'home-shifting',
      'office-relocation',
      'vehicle-transport',
      'warehouse-storage',
      'international-moving',
      'packing-unpacking',
    ])
    .withMessage(
      'Invalid service type. Must be one of: home-shifting, office-relocation, vehicle-transport, warehouse-storage, international-moving, packing-unpacking.'
    ),

  // 4. message — optional, trimmed, max 500 characters
  body('message')
    .optional({ values: 'falsy' })
    .trim()
    .isLength({ max: 500 })
    .withMessage('Message must be at most 500 characters.'),

  // 5. Result checker — return 422 on failure, never call next()
  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(422).json({ errors: errors.array() });
    }
    next();
  },
];
