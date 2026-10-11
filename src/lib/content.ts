import { getCollection } from 'astro:content';
import type { CategoryKey } from '../site.config';

const byNewest = (a: { data: { pubDate: Date } }, b: { data: { pubDate: Date } }) =>
	b.data.pubDate.valueOf() - a.data.pubDate.valueOf();

// Drafts show while running locally but never on the live site.
const isVisible = ({ data }: { data: { draft: boolean } }) => import.meta.env.DEV || !data.draft;

export async function getPosts(category?: CategoryKey) {
	const posts = await getCollection('posts', (p) => isVisible(p) && (!category || p.data.category === category));
	return posts.sort(byNewest);
}

export async function getQuestions() {
	return (await getCollection('questions', isVisible)).sort(byNewest);
}

export async function getBooks() {
	return (await getCollection('books')).sort((a, b) => a.data.order - b.data.order);
}

export function readingTime(markdown = '') {
	const words = markdown.trim().split(/\s+/).length;
	return `${Math.max(1, Math.round(words / 230))} min read`;
}
