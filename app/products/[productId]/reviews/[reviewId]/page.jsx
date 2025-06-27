import React from 'react'
import { notFound } from 'next/navigation';

const ProductReview = async ({params}) => {
  const {productId, reviewId } = await params;

  if (parseInt(reviewId) > 1000){
        notFound();
    }
    return (
        <h1>
          Review {reviewId} for product {productId}
        </h1>
    );
}

export default ProductReview;