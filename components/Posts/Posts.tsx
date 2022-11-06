"use client";

import { PostsType } from "../../config/types";

type PostsProps = {
    posts: PostsType;
};

const Posts = ({ posts }: PostsProps) => {
    console.log(posts);
    return (
        <ul>
            {posts.map((post) => (
                <li key={post.id}>
                    <a href={post.href}>{post.title}</a>
                    <br />
                    <small>{post.date}</small>
                </li>
            ))}
        </ul>
    );
};

export default Posts;
