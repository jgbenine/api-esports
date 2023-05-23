import './globals.css'

export const metadata = {
  title: 'Api-esports',
  description: 'Manipulando api-esports com React | Nextjs',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="bg-zinc-800 px-8 py-9">
      <body>{children}</body>
    </html>
  )
}
