"use client"

import React, { useState } from "react"
import Link from 'next/link';
import { Button } from './ui/button';
import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet"
import { Menu } from "lucide-react";
const BookSession = "https://wa.me/6285179561643";

export default function Header() {
    const [isExpanded, toggleExpansion] = useState(false)

    return (
        <header>
           

            <nav className="bg-stone-50 text-stone-950 sticky top-0 z-50 flex  items-center justify-between  w-full  border-b border-[#edf2f9] bg-white/70 backdrop-blur-sm backdrop-saturate-[180%] ">
                <div className="container mx-auto p-4 max-w-screen-lg ">
                    <div className="flex justify-between items-center">
    
                        <Link href='/' passHref>
                            <span>Sahdani</span>
                        </Link>
    
                        <div className="hidden md:flex space-x-4">
                            <Link href="/" passHref>
                                Beranda
                            </Link>
                            <Link href="/services" passHref>
                                Layanan Kami
                            </Link>
                            <Link href="/blogs" passHref>
                                Blog
                            </Link>
                        </div>

                        <div className="flex md:hidden font-sans">
                            <Sheet>
                                <SheetTrigger>
                                    <Menu size={24} />
                                </SheetTrigger>
                                <SheetContent className="font-sans">
                                    <SheetHeader className="text-start">
                                        <SheetTitle className="">
                                            <Link href="/" >
                                                Sahdani
                                            </Link>
                                        </SheetTitle>
                                       
                                    </SheetHeader>
                                   <div className="py-12 flex flex-col gap-4">
                                        <Link href="/" passHref>
                                            Beranda
                                        </Link>
                                        <Link href="/services" passHref>
                                            Layanan Kami
                                        </Link>
                                        <Link href="/blogs" passHref>
                                            Blog
                                        </Link>
                                   </div>
                                </SheetContent>
                            </Sheet>
                        </div>
    
                        <Button asChild className="ml-3 hidden md:flex">
                            <a href={BookSession} className="text-stone-100">
                                Konsultasikan
                            </a>
                        </Button>
                    </div>
                </div>
            </nav>
        </header>
    );
}
