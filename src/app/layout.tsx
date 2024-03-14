import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
	title: 'Challenge Next.js',
}

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang='pt'>
			<body className={`${inter.className} bg-zinc-950 text-zinc-100 min-h-screen`}>
				<div className='max-w-7xl mx-auto mt-24 px-4'>{children}</div>
			</body>
		</html>
	)
}
