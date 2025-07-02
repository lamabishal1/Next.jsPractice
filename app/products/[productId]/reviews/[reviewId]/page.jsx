import React from 'react'
import { notFound, redirect } from 'next/navigation';

const ProductReview = async ({params}) => {
  const {productId, reviewId } = await params;


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