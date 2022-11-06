import { ApiRoutes } from "@config/constants";
import { PostsType } from "@config/types";

const getPosts = async (): Promise<PostsType> => {
    const posts = await fetch(ApiRoutes.posts);
    return posts.json();
};

export default async function Page() {
    const posts = await getPosts();

    return (
        <section className="flex justify-center items-center">
            <article>
                <h2>Blog</h2>
            </article>
            <nav>
                <ul>
                    {posts.map((post) => (
                        <li key={post.id}>
                            <a href={post.href}>{post.title}</a>
                            <br />
                            <small>{post.date}</small>
                        </li>
                    ))}
                </ul>
            </nav>
        </section>
    );
}

