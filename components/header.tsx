// Import necessary components and icons
// import { Container, Navbar, Button } from '@shadcn/ui';
import { Navbar } from 'flowbite-react';

import { Button } from './ui/button';
import { Coffee } from 'lucide-react';
import Link from 'next/link';

const BookSession = "https://wa.me/6285179561643";

export default function Header() {
    return (
        <Navbar className='sticky top-0 z-50'>
            <nav className="flex justify-between items-center w-full">

                <Navbar.Brand as={Link} href='/'>
                    {/* <Coffee className="mr-2 h-6 w-6" /> */}
                    Sahdani
                </Navbar.Brand>

                <Navbar.Toggle />
                <Navbar.Collapse>
                    <Navbar.Link href="/" active>
                        Beranda
                    </Navbar.Link>
                    {/* <Navbar.Link as={Link} href="/about">
                        Tentang Kami
                    </Navbar.Link> */}
                    <Navbar.Link href="/services">
                        Layanan Kami
                    </Navbar.Link>
                    {/* <Navbar.Link href="#">Pricing</Navbar.Link> */}
                    {/* <Navbar.Link href="#">Contact</Navbar.Link> */}
                </Navbar.Collapse>
                

                    <Button asChild className="ml-3 hidden md:flex">
                        <Link href={BookSession} className="text-stone-100">
                            Konsultasikan
                        </Link>
                    </Button>

            </nav>
        </Navbar>
    );
}
