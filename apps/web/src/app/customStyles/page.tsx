"use client";
import CustomStyledComponent from "@/components/styledComponent";
import { useState } from "react";

export default function Home() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            <button onClick={() => setIsOpen(!isOpen)}>Press To Open</button>
            {isOpen && <CustomStyledComponent />}
        </>
    );
}
