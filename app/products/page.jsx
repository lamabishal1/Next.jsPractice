import React from 'react'
import Link from 'next/link'

const page = () => {


  return (
    <>
    <Link href='/'>Home</Link><br/>
    <h1>Products List</h1>
    <h2><Link href='/products/1'>Product 1</Link></h2>
    <h2>Product 2</h2>
    <h2><Link href='/products/3' replace>Product 3</Link></h2>
    </>
  )
};

export default page