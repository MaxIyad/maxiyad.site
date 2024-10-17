import { type CollectionEntry } from 'astro:content';


export function sortItemsByDateDesc(itemA: CollectionEntry<'pages'>, itemB: CollectionEntry<'pages'>) {
    const dateA = new Date(itemA.data.publishDate);
    const dateB = new Date(itemB.data.publishDate);

    if (isNaN(dateA.getTime()) || isNaN(dateB.getTime())) {
        console.error(`Invalid date: ${itemA.data.publishDate} or ${itemB.data.publishDate}`);
        return 0; // Consider equal if invalid
    }

    return dateB.getTime() - dateA.getTime();
}
