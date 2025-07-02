import React from 'react'

export const generateMetadata = async ({params})=> {
  const id = params.productId;
  return {
    title: `Product ${id}`,
  }
}

const page = async ({params})=> {

  return (
    <h1>Details about the product {params.productId}</h1>
  )
}

export default page
