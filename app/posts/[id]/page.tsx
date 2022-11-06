import { ApiRoutes } from "@config/constants";
import { PostType } from "@config/types";
import { notFound } from "next/navigation";

const getPost = async (id: string): Promise<PostType | undefined> => {
    const post = await fetch(`${ApiRoutes.post}/${id}`);
    if (!post.ok) return undefined;
    return post.json();
};

export default async function Page({ params }: { params: PostType }) {
    const post = await getPost(params.id);

    if (!post) {
        return notFound();
    }

    return (
        <section>
            <article className="flex flex-col">
                <h1 className="mb-8 text-3xl">{post.id}</h1>
                <p>{post.content}</p>
            </article>
        </section>
    );
}
