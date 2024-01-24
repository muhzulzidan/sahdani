import Link from 'next/link';
import { Button } from './ui/button';

const BookSession = "https://wa.me/6285179561643";

export default function Header() {
    return (
        <nav className="bg-stone-800 text-white sticky top-0 z-50">
            <div className="container mx-auto p-4">
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

                    <Button asChild className="ml-3 hidden md:flex">
                        <a href={BookSession} className="text-stone-100">
                            Konsultasikan
                        </a>
                    </Button>
                </div>
            </div>
        </nav>
    );
}
