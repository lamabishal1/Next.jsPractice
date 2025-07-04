import React from 'react'

const page = async () => {
    await new Promise((resolve) => setTimeout(resolve, 3000));
    return (
        <div>
            <h1>Blog Page </h1>
        </div>
    )
}

export default page