'use client'

import React from 'react'
import Footer from '../components/Footer'
import Link from 'next/link'
import './styles.css'
import { usePathname } from 'next/navigation'


const navLinks = [
  {
    title: 'Register',
    href: '/register'
  },
  {
    title: 'Login',
    href: '/login'
  },
  {
    title: 'Forgot Password',
    href: '/forgot-password'
  }
]

const AuthLayout = ({children}) => {
  const pathname = usePathname();
  return (
    <>
        <div>
          {navLinks.map((link)=>{
            const isActive = pathname === link.href || (pathname.startsWith(link.href) && pathname !== '/');
            return(
              <Link href={link.href} key={link.title}
              className={`p-3 ${isActive ? "text-red-500 font-bold underline" : "bg-white text-black"}`}>
                {link.title}
              </Link>
            )
          })}
        </div>
        <div className='mt-10 p-5 text-3xl font-bold'>
        {children}
        </div>
          <Footer />
    </>
  )
}

export default AuthLayout
