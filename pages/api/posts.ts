// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { PostsType } from '../../config/types'

const data = [
    {
        id: 1,
        title: 'When to Use Static Generation v.s. Server-side Rendering',
        date: '2020-01-02',
        href: '/posts/ssg-ssr'
    },
    {
        id: 2,
        title: 'Two Forms of Pre-rendering',
        date: '2020-01-01',
        href: '/posts/pre-rendering'
    }
]

export default function handler(
    req: NextApiRequest,
    res: NextApiResponse<PostsType>
) {
    res.status(200).json(data)
}
