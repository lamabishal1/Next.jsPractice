import React from 'react'

const page = async ({params})=> {

  return (
    <h1>details : {params.productId}</h1>
  )
}

export default page