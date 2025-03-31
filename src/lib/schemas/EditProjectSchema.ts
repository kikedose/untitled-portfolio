import { z } from 'zod';

const EditProjectSchema = z.object({
  title: z.string().min(2, {
    message: 'Title must be at least 2 characters.',
  }),
  country: z.string().min(4, {
    message: 'Country must be at least 4 characters.',
  }),
  year: z.string().length(4, {
    message: 'Year must be 4 characters.',
  }),
  description: z.string().max(560, {
    message: 'Description must be at most 560 characters.',
  }),
  links: z
    .array(
      z.object({
        text: z
          .string()
          .min(2, { message: 'Link text must be at least 2 characters' }),
        url: z.string().url({ message: 'Please enter a valid URL' }),
      })
    )
    .optional()
    .default([]),
});

export default EditProjectSchema;
