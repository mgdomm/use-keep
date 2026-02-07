import { defineCollection, z } from 'astro:content';

const postsCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    category: z.enum(['Casa', 'Trabajo', 'Creatividad', 'Mascotas', 'Familia', 'Salud', 'Especiales']),
    pubDate: z.date().optional(),
    featured: z.boolean().default(false),
  }),
});

export const collections = {
  posts: postsCollection,
};
