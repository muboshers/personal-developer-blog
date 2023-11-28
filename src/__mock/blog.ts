type Tag = {
    color: string;
    name: string;
};

export type Blog = {
    created_at: string;
    image: string;
    title: string;
    description: string;
    tags: Tag[];
};


export const BLOG_LIST: Blog[] = [
    {
        created_at: 'Sunday, 1 Jan 2023',
        image: 'https://i.pinimg.com/736x/05/9d/77/059d77f62a025cb83cc90c37baa59b04.jpg',
        title: 'Bill Walsh Leadership Lessons',
        description: 'Unlock the secrets of transforming a 2-14 team into a 3x Super Bowl-winning Dynasty with lessons from the legendary Bill Walsh.',
        tags: [
            {
                color: '#6941C6',
                name: 'Leadership'
            },
            {
                color: '#363F72',
                name: 'Management',
            },
            {
                color: "#C11574",
                name: "Presentation"
            }
        ]
    },
    {
        created_at: 'Wednesday, 5 Feb 2023',
        image: 'https://i.pinimg.com/564x/e1/c3/28/e1c3285d5d009bfcffc933271b763c7f.jpg',
        title: 'The Art of Code Refactoring',
        description: 'Explore the elegance of code refactoring and its profound impact on code quality and maintainability.',
        tags: [
            {
                color: '#E44D26',
                name: 'Coding'
            },
            {
                color: '#6CC24A',
                name: 'Software Development',
            },
            {
                color: "#F9A03F",
                name: "Best Practices"
            }
        ]
    },
    {
        created_at: 'Saturday, 12 Mar 2023',
        image: 'https://i.pinimg.com/564x/6b/d5/67/6bd567fa64f8af93c430fa594772e1b1.jpg',
        title: 'Design Thinking in UX',
        description: 'Dive into the world of design thinking and discover its pivotal role in creating user-centered and delightful experiences.',
        tags: [
            {
                color: '#2382C7',
                name: 'UX Design'
            },
            {
                color: '#8C44A3',
                name: 'User Experience',
            },
            {
                color: "#F7674E",
                name: "Design"
            }
        ]
    },
    {
        created_at: 'Friday, 21 Apr 2023',
        image: 'https://i.pinimg.com/564x/06/d8/a2/06d8a2f8410c93394fca4ed72d4f6877.jpg',
        title: 'Mastering Data Structures',
        description: 'Delve into the world of data structures and gain mastery over the building blocks of efficient algorithms.',
        tags: [
            {
                color: '#2A9D8F',
                name: 'Algorithms'
            },
            {
                color: '#F4A261',
                name: 'Data Structures',
            },
            {
                color: "#2A4D69",
                name: "Programming"
            }
        ]
    },
    {
        created_at: 'Monday, 8 May 2023',
        image: 'https://i.pinimg.com/564x/c9/c2/ad/c9c2ad6afc02447acb506a5480292a69.jpg',
        title: 'The Rise of Low-Code Development',
        description: 'Explore the low-code revolution and how it is reshaping the landscape of application development.',
        tags: [
            {
                color: '#90BE6D',
                name: 'Low-Code'
            },
            {
                color: '#F9C74F',
                name: 'Development Trends',
            },
            {
                color: "#F9844A",
                name: "Innovation"
            }
        ]
    },
    {
        created_at: 'Sunday, 18 June 2023',
        image: 'https://i.pinimg.com/564x/9c/9d/91/9c9d91b4dac394ec6a9b791dbff94eac.jpg',
        title: 'Cybersecurity Essentials for Developers',
        description: 'Equip yourself with essential cybersecurity knowledge to fortify your applications against evolving threats.',
        tags: [
            {
                color: '#6A0572',
                name: 'Cybersecurity'
            },
            {
                color: '#AB83A1',
                name: 'Developer Security',
            },
            {
                color: "#F72585",
                name: "Tech Security"
            }
        ]
    },
];
