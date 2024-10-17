import { type CollectionEntry } from 'astro:content';

export function sortItemsByDateDesc(itemA: CollectionEntry<'pages/*.md'>, itemB: CollectionEntry<'pages/*.md'>) {
    return new (itemB.frontmatter.order) - new (itemA.frontmatter.order);
}
