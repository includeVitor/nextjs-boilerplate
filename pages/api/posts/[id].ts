import type { NextApiRequest, NextApiResponse } from 'next'
import { PostType } from '../../../config/types'

const data = [
    {
        id: 'ssg-ssr',
        content:
            'We recommend using Static Generation (with and without data) whenever possible because your page can be built once and served by CDN, which makes it much faster than having a server render the page on every request.'
    },
    {
        id: 'pre-rendering',
        content:
            'Next.js has two forms of pre-rendering: Static Generation and Server-side Rendering. The difference is in when it generates the HTML for a page.'
    }
]

export default function userHandler(req: NextApiRequest, res: NextApiResponse) {
    const {
        query: { id, name },
        method
    } = req

    switch (method) {
        case 'GET':
            const post: PostType | undefined = data.find(d => d.id === id)

            if (!post) {
                res.status(404).send(null)
            }

            res.status(200).json(post)

            break
        default:
            res.setHeader('Allow', ['GET'])
            res.status(405).end(`Method ${method} Not Allowed`)
    }
}
