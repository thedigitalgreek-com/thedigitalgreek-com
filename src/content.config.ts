import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

// One folder per project: src/content/projects/<slug>/index.md + its images.
// The folder name becomes the URL: /<slug>
const projects = defineCollection({
  loader: glob({ pattern: '*/index.md', base: './src/content/projects', generateId: ({ entry }) => entry.split('/')[0] }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      order: z.number(),                 // position in the list, 1 = top
      type: z.string(),                  // e.g. "Artist website"
      year: z.string(),                  // "2018", "2023 — now"
      description: z.string(),           // one or two sentences
      client: z.string().optional(),
      role: z.string().optional(),
      url: z.url().optional(),           // live site
      placeholder: z.boolean().default(false), // listed, but no page yet
      shots: z
        .array(
          z.object({
            src: image(),
            alt: z.string(),
            device: z.enum(['desktop', 'mobile']).default('desktop'),
          }),
        )
        .default([]),
    }),
});

export const collections = { projects };
