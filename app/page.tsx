import { ApiRoutes } from '@config/constants'
import { PostsType } from '@config/types'

const getPosts = async (): Promise<PostsType> => {
    const posts = await fetch(ApiRoutes.posts)
    return posts.json()
}

export default async function Page() {
    const posts = await getPosts()

    return (
        <section>
            <h2 className="pb-6 text-2xl font-semibold">Blog</h2>
            <nav className="text-xl">
                <ul>
                    {posts.map(post => (
                        <li key={post.id} className="mb-4">
                            <a
                                href={post.href}
                                className="text-blue-600 hover:underline"
                            >
                                {post.title}
                            </a>
                            <br />
                            <small>
                                {new Date(post.date).toLocaleString('en-US', {
                                    year: 'numeric',
                                    month: 'long',
                                    day: 'numeric'
                                })}
                            </small>
                        </li>
                    ))}
                </ul>
            </nav>
        </section>
    )
}
