import React from 'react'
import { Metadata } from 'next';

export const generateMetadata = async ({params})=> {
  const id = params.productId;
  return {
    title: `Product ${id}`,
  }
}

const page = async ({params})=> {

  return (
    <h1>details : {params.productId}</h1>
  )
}

export default page