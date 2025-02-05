import { Orbitron } from 'next/font/google'
import type { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'Changelog - Starfield Community Patch'
}

const orb = Orbitron({ subsets: ['latin'] })

export default function ChangelogPage() {
    return null

    return (
        <div>
            <h1 className={orb.className}>Changelog</h1>
        </div>
    )
}