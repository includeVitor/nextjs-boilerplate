import { ApiRoutes } from "@config/constants";
import { PostsType } from "@config/types";

const getPosts = async (): Promise<PostsType> => {
    const posts = await fetch(ApiRoutes.posts);
    return posts.json();
};

export default async function Page() {
    const posts = await getPosts();

    return (
        <section className="flex flex-col justify-center items-center h-screen w-screen">
            <article>
                <h1 className="pb-8 text-2xl">Blog</h1>
            </article>
            <nav>
                <ul>
                    {posts.map((post) => (
                        <li key={post.id} className="mb-4">
                            <a
                                href={post.href}
                                className="text-blue-600 underline hover:text-blue-400"
                            >
                                {post.title}
                            </a>
                            <br />
                            <small>
                                {new Date(post.date).toLocaleString("en-US", {
                                    year: "numeric",
                                    month: "long",
                                    day: "numeric",
                                })}
                            </small>
                        </li>
                    ))}
                </ul>
            </nav>
        </section>
    );
}

