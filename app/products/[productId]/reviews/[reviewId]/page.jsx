import React from 'react'
import { notFound, redirect } from 'next/navigation';

// function getRandomInt({number}) {
//   return Math.floor(Math.random() * number);
// }

const ProductReview = async ({params}) => {
  const {productId, reviewId } = await params;
  // const random = getRandomInt({number: 2});
  // if (random === 1){
  //   throw new Error( "Error loading screen.");
  // }

  if (parseInt(reviewId) > 1000){

        redirect("/products")
    }
    return (
        <h1>
          Review {reviewId} for product {productId}
        </h1>
    );
}

export default ProductReview;