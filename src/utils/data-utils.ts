import { type CollectionEntry } from 'astro:content';

export function sortItemsByDateDesc(itemA: CollectionEntry<'pages'>, itemB: CollectionEntry<'pages'>) {
    return new (itemB.data.order) - new (itemA.data.order);
}
