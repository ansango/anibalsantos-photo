import headerNavLinks from '@/data/headerNavLinks'
import { useRouter } from 'next/router'
import Link from './Link'
import MobileNav from './MobileNav'
import ThemeSwitch from './ThemeSwitch'

const Nav = () => {
  const { pathname: route } = useRouter()
  return (
    <header className="flex items-center justify-between py-10">
      <div></div>
      <div className="flex items-center text-base leading-5">
        <div className="hidden sm:block">
          {headerNavLinks.map((link) => {
            if (link.href !== route) {
              return (
                <Link
                  key={link.title}
                  href={link.href}
                  className="p-1 font-medium text-gray-900 sm:p-4 dark:text-gray-100"
                >
                  {link.title}
                </Link>
              )
            }
          })}
        </div>
        <ThemeSwitch />
        <MobileNav />
      </div>
    </header>
  )
}

export default Nav
