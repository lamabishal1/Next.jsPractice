import React from "react";
import Counter from "./Counter";
import { title } from "process";

export const metadata = {
    title: 'Counter',
}

export default function Page() {
    return (
        <div>
           <Counter />
        </div>
    );
}