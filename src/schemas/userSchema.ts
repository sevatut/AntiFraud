import { z } from 'zod';

const optionalString = (schema: z.ZodString) =>
  z.preprocess(
    (value) => value === '' ? undefined : value,
    schema.optional()
);

export const userSchema = z.object({
  fullName: z
    .string()
    .trim()
    .min(2, 'Full Name must contain at least 2 characters'),

  city: z
    .string()
    .trim()
    .min(2, 'City must contain at least 2 characters'),

  state: z
    .string()
    .trim()
    .length(2, 'State must contain exactly 2 characters')
    .regex(/^[A-Z]{2}$/, 'State must contain only capital letters'),

  address: z
    .string()
    .trim()
    .min(5, 'Address must contain at least 5 characters'),

  phone: z
    .string()
    .trim()
    .regex(
      /^\+[1-9]\d{0,2}(?:[\s-]?\d){6,14}$/,
      'Enter a valid phone number'
    ),

  balance: z
    .string()
    .trim()
    .regex(/^[1-9]\d*$/, 'Balance must be a positive number')
});

export const editUserSchema = z.object({
  id: z.coerce
    .number()
    .int('ID must be an integer')
    .positive('ID must be greater than 0'),
  fullName: optionalString(
    z
      .string()
      .trim()
      .min(2, 'Full Name must contain at least 2 characters')
  ),

  city: optionalString(
    z
      .string()
      .trim()
      .min(2, 'City must contain at least 2 characters')
  ),

  state: optionalString(
    z
      .string()
      .trim()
      .length(2, 'State must contain exactly 2 characters')
      .regex(/^[A-Z]{2}$/, 'State must contain only capital letters'),
  ),

  address: optionalString(
    z
      .string()
      .trim()
      .min(5, 'Address must contain at least 5 characters')
  ),

  phone: optionalString(
    z
      .string()
      .trim()
      .regex(
        /^\+[1-9]\d{0,2}(?:[\s-]?\d){6,14}$/,
        'Enter a valid phone number'
      )
  ),

  balance: optionalString(
    z
      .string()
      .trim()
      .regex(/^[1-9]\d*$/, 'Balance must be a positive number')
  ),
});

export type UserFormData = z.infer<typeof userSchema>;