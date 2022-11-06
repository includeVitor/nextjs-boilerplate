type PostsType = {
    id: number;
    title: string;
    date: string;
    href: string;
}[];

type PostType = {
    id: string;
    content: string;
};

export type { PostsType, PostType };
