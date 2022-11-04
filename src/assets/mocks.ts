interface Post {
  id: number;
  author: {
    avatarUrl: string;
    name: string;
    role: string;
  };
  content: {
    type: 'paragraph' | 'link';
    content: string;
    src?: string;
  }[];
  publishedAt: Date;
}

interface Comment {
  id: number;
  author: {
    avatarUrl: string;
    name: string;
  };
  content: string;
  publishedAt: Date;
}

export const posts: Post[] = [
  {
    id: 1,
    author: {
      avatarUrl: 'https://i.pravatar.cc/64?u=u1',
      name: 'User 1',
      role: 'User de teste',
    },
    content: [
      { type: 'paragraph', content: 'Lorem Ipsum Dolor' },
      { type: 'paragraph', content: 'Sit Amet Consectetur' },
      { type: 'link', content: '#Adipiscing', src: '#' },
      { type: 'link', content: '#Elit', src: '#' },
    ],
    publishedAt: new Date('2022-10-01 22:35:45'),
  },
  {
    id: 2,
    author: {
      avatarUrl: 'https://i.pravatar.cc/64?u=u2',
      name: 'User 2',
      role: 'Outro user de teste',
    },
    content: [
      { type: 'paragraph', content: 'Lorem Ipsum Dolor' },
      { type: 'paragraph', content: 'Sit Amet Consectetur' },
      { type: 'link', content: '#Adipiscing', src: '#' },
      { type: 'link', content: '#Elit', src: '#' },
      { type: 'link', content: '#LoremIpsum', src: '#' },
    ],
    publishedAt: new Date('2022-10-10 21:00:37'),
  },
];

export const defComments: Comment[] = [
  {
    id: 0,
    author: {
      avatarUrl: 'https://i.pravatar.cc/64?u=u2',
      name: 'User 2',
    },
    content: 'Lorem Ipsum Dolor',
    publishedAt: new Date('2022-10-11 21:00:37'),
  },
  {
    id: 1,
    author: {
      avatarUrl: 'https://i.pravatar.cc/64?u=u1',
      name: 'User 1',
    },
    content: 'Test comment',
    publishedAt: new Date('2022-10-13 21:00:37'),
  },
];
