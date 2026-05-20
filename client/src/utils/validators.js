import { z } from 'zod';

/**
 * Contact form validation schema — single source of truth.
 * Shared between the frontend form (via zodResolver) and
 * can be referenced by backend validation if needed.
 */
export const contactSchema = z.object({
  name: z
    .string()
    .min(2, 'Name must be at least 2 characters')
    .max(100, 'Name must be 100 characters or fewer')
    .regex(/^[A-Za-z\s]+$/, 'Name can only contain letters and spaces'),

  phone: z
    .string()
    .regex(/^[6-9]\d{9}$/, 'Please enter a valid 10-digit Indian mobile number'),

  service: z.enum(
    [
      'home-shifting',
      'office-relocation',
      'vehicle-transport',
      'warehouse-storage',
      'international-moving',
    ],
    {
      error: 'Please select a service',
    }
  ),

  message: z
    .string()
    .max(500, 'Message must be 500 characters or fewer')
    .optional()
    .or(z.literal('')),
});

/** Exported list of service options for rendering <select> / <option> elements */
export const SERVICE_OPTIONS = [
  { value: 'home-shifting', label: 'Home Shifting' },
  { value: 'office-relocation', label: 'Office Relocation' },
  { value: 'vehicle-transport', label: 'Vehicle Transport' },
  { value: 'warehouse-storage', label: 'Warehouse Storage' },
  { value: 'international-moving', label: 'International Moving' },
];
