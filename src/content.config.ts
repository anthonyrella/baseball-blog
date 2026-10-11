import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';
import { CATEGORIES, type CategoryKey } from './site.config';

const categoryKeys = Object.keys(CATEGORIES) as [CategoryKey, ...CategoryKey[]];

// Images are plain paths (e.g. /images/uploads/photo.jpg) so the /admin editor can upload them.
const posts = defineCollection({
	loader: glob({ base: './src/content/posts', pattern: '**/*.md' }),
	schema: z.object({
		title: z.string(),
		description: z.string(),
		pubDate: z.coerce.date(),
		updatedDate: z.coerce.date().optional(),
		category: z.enum(categoryKeys),
		tags: z.array(z.string()).default([]),
		heroImage: z.string().optional(),
		heroAlt: z.string().optional(),
		featured: z.boolean().default(false),
		draft: z.boolean().default(false),
	}),
});

const books = defineCollection({
	loader: glob({ base: './src/content/books', pattern: '**/*.md' }),
	schema: z.object({
		title: z.string(),
		subtitle: z.string().optional(),
		status: z.enum(['published', 'coming-soon']),
		cover: z.string().optional(),
		amazonUrl: z.url().optional(),
		releaseDate: z.coerce.date().optional(),
		order: z.number().default(0),
	}),
});

const questions = defineCollection({
	loader: glob({ base: './src/content/questions', pattern: '**/*.md' }),
	schema: z.object({
		question: z.string(),
		askedBy: z.string().default('A reader'),
		pubDate: z.coerce.date(),
		draft: z.boolean().default(false),
	}),
});

// One-off pages (e.g. About) that Mike can edit in /admin.
const pages = defineCollection({
	loader: glob({ base: './src/content/pages', pattern: '**/*.md' }),
	schema: z.object({
		title: z.string(),
		intro: z.string().optional(),
		photo: z.string().optional(),
	}),
});

export const collections = { posts, books, questions, pages };
