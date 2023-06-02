import Link from "next/link"
import styles from './page.module.css'

const links = [{
  label: 'Home',
  route: '/'
},
{
  label: 'About',
  route: '/about'
}]

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <title> My first app with Next 13</title>
      </head>
      <body>
        <header className={styles.header}>
          <nav>
            <ul className={styles.navigation}>
              {links.map(({ label, route }) => (
                <li key={route}>
                  <Link href={route}>
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </header>

        {children}
      </body>
    </html>
  )
}
