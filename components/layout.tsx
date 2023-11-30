import { ReactNode } from 'react';
import Navbar from './header'
import Footer from './footer'
import { Inter as FontSans } from "next/font/google"
import { cn } from "../lib/utils"



export const fontSans = FontSans({
    subsets: ["latin"],
    variable: "--font-sans",
})

type LayoutProps = {
    children: ReactNode;
};

const Layout: React.FC<LayoutProps> = ({ children }) => {

    return (
        <main className={cn(
            "min-h-screen bg-background font-sans antialiased bg-stone-100",
            fontSans.variable
        )}>
            <Navbar />
            <main className='max-w-screen-lg bg-stone-100 mx-auto'>{children}</main>
            <Footer />
        </main>
    )
}
export default Layout