'use client';
import React from "react";
import {Inter} from 'next/font/google'
import './globals.css'
import {Footer, Navbar} from "@/components";
import StyledComponentsRegistry from "@/lib/registery";


const inter = Inter({subsets: ['latin']})


export default function RootLayout({
                                       children,
                                   }: {
    children: React.ReactNode
}) {


    return (
        <html lang="en">
        <body className={inter.className}>
        <Navbar/>
        <StyledComponentsRegistry>
            {children}
        </StyledComponentsRegistry>
        <Footer/>
        </body>
        </html>
    )
}
