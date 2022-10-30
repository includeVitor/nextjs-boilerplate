import { notFound } from "next/navigation";
import { ApiRoutes } from "../../../config/constants";
import { PostType } from "../../../pages/api/posts/[id]";

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
        <div style={{ width: "50vw" }}>
            <h1>{post.id}</h1>
            <p>{post.content}</p>
        </div>
    );
}
