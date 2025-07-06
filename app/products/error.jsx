"use client";
import { useRouter } from "next/navigation";
import { startTransition } from "react";

export default function Errorboundary({error, reset}) {
    const router = useRouter();

        const reload = ()=>{
            startTransition(() => {
                router.refresh();
                reset();
            }); 
        };
    return (
        <>
        
        <p>{error.message}</p>
        <button onClick={()=>reload()}>Try again</button>
        </>
    );
}