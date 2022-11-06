'use client'

import { AppRoutes, AppSegments } from '@config/constants'
import Link from 'next/link'
import { useSelectedLayoutSegment } from 'next/navigation'

const Footer = () => {
    const segment = useSelectedLayoutSegment()

    if (segment === AppSegments.posts)
        return (
            <footer className="mt-12 text-blue-500 hover:underline text-lg">
                <Link href={AppRoutes.home}>← Back to home</Link>
            </footer>
        )

    return null
}

export default Footer
