import type {Metadata} from 'next'
import {Inter} from 'next/font/google'
import './globals.css'
import Link from "next/link";

const inter = Inter({subsets: ['latin']})

export const metadata: Metadata = {
    title: 'Wits and Wages',
    description: 'A questions generator',
}

export default function RootLayout({
                                       children,
                                   }: {
    children: React.ReactNode
}) {
    return (
        <html lang="en">
        <body className={inter.className}>
        <h1 className={"text-gray-600 text-center p-8"}><Link href={"/"}>Wits and Wages</Link></h1>
        <main className="flex min-h-screen flex-col items-center px-24 pb-24">
            {children}
        </main>
        </body>
        </html>
    )
}
