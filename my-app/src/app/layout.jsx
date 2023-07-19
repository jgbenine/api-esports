import './globals.css'

export const metadata = {
  title: 'e-Football',
  description: 'Manipulando api-esports com React | Nextjs',
}

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br" className="bg-zinc-800 px-8 py-9">
      <body>{children}</body>
    </html>
  )
}
