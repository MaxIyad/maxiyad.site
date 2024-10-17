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
    image?: Image;
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
};


export type Subscribe = {
    title?: string;
    text?: string;
    formUrl: string;
};

export type ContactForm = {
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
    contactForm?: ContactForm;
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
            text: 'Templates',
            href: 'https://gumroad.com'
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
            text: 'Templates',
            href: 'https://gumroad.com'
        },
        {
            text: 'Contact',
            href: '/contact'
        },

    ],
    socialLinks: [
        {
            text: 'x.com',
            href: 'https://x.com/Max__Iyad'
        }
    ],
    hero: {
        title: 'Bring Back Your Dream Restaurant',
        text: "You've poured your heart and soul into your store. But hard work can only get you so far and a poor foundation will have you working overtime and not seeing results.\n\n" +
            "It's time to set yourself apart as the leading restaurant and become the kick-ass restaurant your customers cannot wait to come back to.",
        image: {
            src: '/medium.webp',
            alt: 'Alt Text'
        },
        actions: [
            {
                text: 'Get Started',
                href: '/contact'
            }
        ]
    },
    about: {
        title: 'Meet your specialist',
        text: "I'm Max, a restaurant turn-arounder specialist. I've specialized in strategic systems that turn struggling restaurants in Ireland into thriving dream stores. My experience started with a <€150/day average restaurant in the heart of Waterford. It turned profitable within 3 months of implementing my systems and is now more than thriving. Doing that, I discovered my passion for reviving dreams and encouraging restaurants to thrive.\n\n" +

            "It's my passion because I know how it feels to place all your effort into a dying business, only to get nothing back. As an extremely systematic and resourceful person, I've found my purpose in getting restaurant owners out of that slump. Because seeing their face shine once again when seeing their thriving store can keep me going forever.\n\n" +

            "My goal is to see your face shine once more when thinking about your restaurant. And revamp it to the thriving business we know it can be.",
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
    },
    subscribe: {
        title: 'Sell more, better.',
        text: 'Get the daily 5-min newsletter helping restaurant owners grow',
        formUrl: '#'
    },
    contactForm: {
        title: 'Get in Touch',
        text: 'Be it a question an invitation to help you in your journey, do not hesitate to get in touch.',
        formUrl: '/'
    },
    postsPerPage: 8,
    projectsPerPage: 8
};

export default siteConfig;
