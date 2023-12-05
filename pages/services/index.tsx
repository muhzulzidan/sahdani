import Link from 'next/link';
import Layout from '@/components/layout';
import { Button } from '@/components/ui/button';

const services = [
    { name: 'Hipnoterapi', link: '/services/hipnoterapi', description: "Personalized hypnotherapy sessions for mental well-being and self-improvement." },
    { name: 'Training', link: '/services/training', description: "Engaging training programs to enhance your life skills and professional competencies." },
    {
        name: 'Coaching', link: '/services/coaching', description: "One-on-one coaching to help you navigate life’s challenges and achieve your goals."
    }
];

export default function Services() {
    return (
        <Layout>
            <div className="container mx-auto p-4">
                <h1 className="text-2xl font-bold text-center mb-6">Our Services</h1>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {services.map((service, index) => (
                        <Link href={service.link} key={index} className="p-4 border rounded-lg">
                            <h2 className="text-xl font-semibold">{service.name}</h2>
                            <p>{service.description}</p>
                            <p className='text-blue-500'>
                              
                                    Learn more
    
                          </p>
                        </Link>
                    ))}
                </div>
            </div>
        </Layout>
    );
}
