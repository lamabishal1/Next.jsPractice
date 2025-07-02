import React from 'react'
import '../styles/globals.css'
import Link from 'next/link'

const page = () => {
  return (
    <>
    <div className='text-red-500'>Welcome home ! </div>
    <Link href='/dashboard'>Dashboard</Link><br/>
    <Link href='/products'>Products</Link>
    <Link href='articles/breaking-news-123?lang=en'>Read in English</Link>
    <Link href='articles/breaking-news-123?lang=jp'>Read in Japanese</Link>
    </>
  )
}

export default page