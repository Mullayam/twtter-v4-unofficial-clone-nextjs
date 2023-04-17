import './globals.css'

export const metadata = {
  title: 'Twitter ',
  description: 'Twitter Clone Project by ENJOYS',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
