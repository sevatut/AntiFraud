import { z } from 'zod';

export const authorizationSchema = z.object({
  login: z
    .string()
    .trim()
    .min(1, 'Login cannot be empty'),

  password: z
    .string()
    .trim()
    .min(1, 'Password cannot be empty'),
});

export type AuthorizationFormData = z.infer<typeof authorizationSchema>;