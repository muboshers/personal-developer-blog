"use client";
import AOS from "aos";
import React, {useEffect} from "react";
import "aos/dist/aos.css";


export default function StyledComponentsRegistry({
                                                     children,
                                                 }: {
    children: React.ReactNode;
}) {


    useEffect(() => {
        AOS.init({
            duration: 1000,
            once: true,
        });
    }, []);


    if (typeof window !== "undefined") return <>{children}</>;

    return (
        <>
            {children}
        </>
    );
}
