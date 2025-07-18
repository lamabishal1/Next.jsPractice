"use client";
import React from 'react'
import { usePathname } from 'next/navigation';

const notFound = () => {
  const pathname = usePathname();
  const productId = pathname.split('/')[2];
  const reviewId = pathname.split('/')[4];
  return (
  <>
        <h1>
          Review {reviewId} not found for product {productId}
        </h1>
    </>
  );
};

export default notFound;