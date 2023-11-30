// Import necessary components and icons
// import { Container, Navbar, Button } from '@shadcn/ui';
import { Navbar } from 'flowbite-react';

import { Button } from './ui/button';
import { Coffee } from 'lucide-react';
import Link from 'next/link';

export default function Header() {
    return (
        <Navbar className='sticky top-0 z-50'>
            <nav className="flex justify-between items-center w-full">

                <Navbar.Brand as={Link} href='/'>
                    <Coffee className="mr-2 h-6 w-6" />
                    Sahdani
                </Navbar.Brand>

                <Navbar.Toggle />
                <Navbar.Collapse>
                    <Navbar.Link href="#" active>
                        Home
                    </Navbar.Link>
                    <Navbar.Link as={Link} href="#">
                        About
                    </Navbar.Link>
                    <Navbar.Link href="#">Services</Navbar.Link>
                    <Navbar.Link href="#">Pricing</Navbar.Link>
                    <Navbar.Link href="#">Contact</Navbar.Link>
                </Navbar.Collapse>
                
                    <Button className="ml-3 hidden md:flex">Get Started</Button>
            </nav>
        </Navbar>
    );
}
