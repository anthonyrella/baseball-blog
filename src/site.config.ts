// Site-wide settings. Most day-to-day edits happen in the /admin editor;
// these only change when the site itself changes.

export const SITE = {
	title: 'Tales from the Ballpark',
	tagline: 'Stories, heroes, and history from the diamond',
	description:
		'The baseball writing of Michael Janacek, author of "Fields of Glory: Tales from the Diamond" — essays, stories, book news, and reader questions.',
	author: 'Michael Janacek',
	authorShort: 'Mike',
};

export const NAV = [
	{ href: '/blog/', label: 'Writing' },
	{ href: '/books/', label: 'Books' },
	{ href: '/questions/', label: 'Q&A' },
	{ href: '/about/', label: 'About' },
];

// Post categories. Keys are what's stored in each post's frontmatter;
// keep this list in sync with the "category" options in public/admin/config.yml.
export const CATEGORIES = {
	stories: { label: 'Stories', blurb: 'Tales from the ballpark, past and present.' },
	thoughts: { label: 'Thoughts', blurb: 'Personal musings on the game.' },
	articles: { label: 'Articles', blurb: 'Longer pieces on players, teams, and history.' },
	'book-news': { label: 'Book News', blurb: 'Updates on books published and in progress.' },
} as const;

export type CategoryKey = keyof typeof CATEGORIES;

// Reader questions are emailed to Mike via Web3Forms (free, no server needed).
// Get a key at https://web3forms.com using Mike's email address, then paste it here.
export const ASK_FORM = {
	endpoint: 'https://api.web3forms.com/submit',
	accessKey: 'REPLACE_WITH_WEB3FORMS_ACCESS_KEY',
};
