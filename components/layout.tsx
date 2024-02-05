import { ReactNode } from 'react';
import Navbar from './header'
import Footer from './footer'
import { Inter as FontSans } from "next/font/google"
import { cn } from "../lib/utils"
import Head from 'next/head';

import Script from 'next/script'


export const fontSans = FontSans({
    subsets: ["latin"],
    variable: "--font-sans",
})

type LayoutProps = {
    children: ReactNode;
    showHeader?: boolean; // Optional prop for showing the header
    showFooter?: boolean; // Optional prop for showing the footer
};

const Layout: React.FC<LayoutProps> = ({ children, showHeader = true, showFooter = true }) => {
    return (
        <main className={cn(
            "min-h-screen bg-background font-sans antialiased bg-stone-100",
            fontSans.variable
        )}>
            {/* <Head>
                <title>Hipnoterapi - Transformasi Kehidupan Anda</title>
                <meta name="description" content="Temukan keseimbangan dan kedamaian pikiran dengan sesi hipnoterapi profesional kami. Jadwalkan konsultasi Anda hari ini." />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <script type="application/ld+json">
                    {JSON.stringify({
                        "@context": "http://schema.org",
                        "@type": "ProfessionalService",
                        "name": "Hipnoterapi",
                        "description": "Layanan hipnoterapi profesional untuk meredakan stres, mengatasi fobia, dan mendukung pertumbuhan pribadi.",
                        "url": "http://www.yourwebsite.com/hipnoterapi",
                        // ... additional structured data ...
                    })}
                </script>
            </Head> */}

            <Script async src="https://www.googletagmanager.com/gtag/js?id=G-EHBXXFWSWR"/>
            <Script id="google-analytics">
                {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());

                gtag('config', 'G-EHBXXFWSWR');
                `}
            </Script>
            {showHeader && <Navbar />}
            <main className='max-w-screen-lg bg-stone-100 mx-auto'>{children}</main>
            {showFooter && <Footer />}
        </main>
    )
}
export default Layout