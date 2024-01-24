import Marquee from 'react-fast-marquee';
import Image from 'next/image';
import { useEffect, useState } from 'react';


export default function Clients() {
    // Array of logo URLs - replace these with actual client logo URLs
    // const logos = new Array(10).fill('https://source.unsplash.com/random/?logo,brand');
    const [logos, setLogos] = useState<string[]>([]);

    useEffect(() => {
        fetch('/api/logos')
            .then(response => response.json())
            .then(data => setLogos(data.logos))
            .catch(error => console.error('Error fetching logos:', error));
    }, []);


    return (

            <section className="py-6 lg:py-0 bg-stone-100 text-stone-950">
            <div className="pt-8 lg:py-16 mx-auto max-w-screen-xl px-4">
                <div className="tracking-tight leading-tight text-center lg:mb-4">
                    <h2 className="text-3xl font-extrabold mb-2 md:text-3xl">Network & Collaborations</h2>
                    <p>Perusahaan yang percaya untuk berkolaborasi di media sosial atau pembicara event.</p>
                </div>
                <div className="hidden lg:flex self-center py-8">
                    <Marquee pauseOnHover={true} loop={0} className="hidden lg:flex items-center clients-marquee" gradientColor={'rgb(245 245 244)'} gradient={true}>
                        {logos.map((logo, index) => (
                            <a key={index} href="#" className="flex justify-center items-center rounded-xl p-6 w-[10rem] group">
                                <Image 
                                    src={logo}
                                    quality={100}
                                    alt={`Client Logo ${index + 1}`} 
                                    width={50} 
                                    height={50} 
                                    className="w-full h-full object-contain group-hover:filter-none filter grayscale" />
                            </a>
                        ))}
                    </Marquee>
                </div>
                <div className="flex lg:hidden self-center pt-8">
                    <Marquee pauseOnHover={true} loop={0} className="flex items-center clients-marquee-mobile" gradientColor={'rgb(245 245 244)'} gradient={true}>
                        {logos.map((logo, index) => (
                            <a key={index} href="#" className="flex justify-center items-center rounded-xl p-6 w-[10rem] group">
                                <Image 
                                    src={logo}
                                    alt={`Client Logo ${index + 1}`} 
                                    width={50} 
                                    height={50} 
                                    className="w-full h-full object-contain group-hover:filter-none filter grayscale" />
                            </a>
                        ))}
                    </Marquee>
                </div>
            </div>
        </section>
       
    );
}
