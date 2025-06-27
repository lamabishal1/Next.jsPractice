import React from 'react'


const page = ({params}) => {
    const { reviewsId } = params;

    
  return (
    <>
    
    <h1>Reviews</h1>
    {Array.isArray(reviewsId) ? (
        reviewsId.map((id) =>
        <h2 key={id}>Review {id}</h2>)
    ) : (
        <h2>No reviews found.</h2>
        )}
      </>
  );
};

export default page