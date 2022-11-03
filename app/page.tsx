import Link from "next/link";
import { ApiRoutes } from "../config/constants";
import { PostsType } from "../pages/api/posts";
import styles from "./page.module.css";
import utilStyles from "./utils.module.css";

const getPosts = async (): Promise<PostsType> => {
    const posts = await fetch(ApiRoutes.posts);
    return posts.json();
};

export default async function Page() {
    const posts = await getPosts();

    const list = posts.map(({ id, date, title }) => (
        <li className={utilStyles.listItem} key={id}>
            <Link href={`/posts/${id}`}>{title}</Link>
            <br />
            <small className={utilStyles.lightText}>{date}</small>
        </li>
    ));

    const date = new Date();

    return (
        <section className={styles.container}>
            <p>{date.toUTCString()}</p>
            <article
                className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}
            >
                <h2 className={utilStyles.headingLg}>Blog</h2>
                <ul className={utilStyles.list}>{list}</ul>
            </article>
        </section>
    );
}

