import { z } from 'zod';

export const registrationSchema = z.object({
    login: z
      .string()
      .trim()
      .min(3, 'Login must contain at least 3 characters'),

    password: z
      .string()
      .min(8, 'Password must contain at least 8 characters')
      .regex(/[A-Z]/, 'Password must contain at least one uppercase letter')
      .regex(/[a-z]/, 'Password must contain at least one lowercase letter')
      .regex(/[0-9]/, 'Password must contain at least one number')
  })

export type RegistrationFormData = z.infer<typeof registrationSchema>;
