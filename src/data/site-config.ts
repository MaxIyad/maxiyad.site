export type Image = {
    src: string;
    alt?: string;
    caption?: string;
};

export type Link = {
    text: string;
    href: string;
};

export type Hero = {
    title?: string;
    text?: string;
    actions?: Link[];
};

export type About = {
    title?: string;
    text?: string;
    image?: Image;
};

export type Contact = {
    title?: string;
    text?: string;
    image?: Image;
};

export type Terms = {
    title?: string;
    text?: string;
    image?: Image;
};


export type Subscribe = {
    title?: string;
    text?: string;
    formUrl: string;
};

export type SiteConfig = {
    logo?: Image;
    title: string;
    subtitle?: string;
    description: string;
    image?: Image;
    headerNavLinks?: Link[];
    footerNavLinks?: Link[];
    socialLinks?: Link[];
    hero?: Hero;
    about?: About;
    contact?: Contact;
    terms?: Terms;
    subscribe?: Subscribe;
    postsPerPage?: number;
    projectsPerPage?: number;
};

const siteConfig: SiteConfig = {
    title: 'Max Iyad',
    subtitle: 'Restaurant Consultant',
    description: 'Max Iyad helping restaurant owners make more money and work less',

    headerNavLinks: [
        {
            text: 'Home',
            href: '/'
        },
        {
            text: 'All Posts',
            href: '/posts'
        },
        {
            text: 'Subscribe',
            href: '/'
        },



    ],
    footerNavLinks: [
        {
            text: 'About',
            href: '/about'
        },
        {
            text: 'Contact',
            href: '/contact'
        },
    ],
    socialLinks: [
        {
            text: 'X.com',
            href: 'https://x.com/Max__Iyad'
        }
    ],
    hero: {
        title: 'Bring Back Your Dream Restaurant',
        text: "You've poured your heart and soul into your store. But hard work can only get you so far and a poor foundation will have you working overtime and not seeing results.\n\n" +
            "It's time to set yourself apart as the leading restaurant and become the kick-ass restaurant your customers cannot wait to come back to.",
        actions: [
            {
                text: 'Get Started',
                href: '/contact'
            }
        ]
    },
    about: {
        title: 'About Title',
        text: "About desc",
        image: {
            src: '/medium.webp',
            alt: 'Alt Text'
        },
    },
    contact: {
        title: 'contact Title',
        text: "contact desc",
        image: {
            src: '/medium.webp',
            alt: 'Alt Text'
        },
    },
    terms: {
        title: 'Terms',
        text: '123',
        image: {
            src: '/medium.webp',
            alt: 'Alt Text'
        },
    },
    subscribe: {
        title: 'Subscribe to Dante Newsletter',
        text: 'One update per week. All the latest posts directly in your inbox.',
        formUrl: '#'
    },
    postsPerPage: 8,
    projectsPerPage: 8
};

export default siteConfig;
