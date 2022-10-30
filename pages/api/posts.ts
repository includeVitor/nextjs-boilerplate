// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";

export type PostsType = {
    id: string;
    title: string;
    date: string;
}[];

export default function handler(
    req: NextApiRequest,
    res: NextApiResponse<PostsType>
) {
    res.status(200).json([
        {
            id: "ssg-ssr",
            title: "When to Use Static Generation v.s. Server-side Rendering",
            date: "2020-01-02",
        },
        {
            id: "pre-rendering",
            title: "Two Forms of Pre-rendering",
            date: "2020-01-01",
        },
    ]);
}

