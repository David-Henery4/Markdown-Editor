import { roboto, robotoSlab, robotoMono } from './font/font'
import './globals.css'

export const metadata = {
  title: 'Markdown Editor',
  description: 'An In-browser markdown editor',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${roboto.variable} ${robotoSlab.variable} ${robotoMono.variable}`}>
      <body className='font-roboto'>{children}</body>
    </html>
  )
}
