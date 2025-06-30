"use client";
import { useState } from 'react';

export default function Counter() {
    const [count, setCount] = useState (0);

    return (
        <>
        <div>{count}</div>
        <button onClick={()=>setCount(count + 1)}>Increment</button>
        <button onClick={()=>setCount(count < 1 ? 0 : count - 1)}>Decrement</button>
        <button onClick={()=>setCount(count  === 0)}>Reset</button>
        </>
    )
}