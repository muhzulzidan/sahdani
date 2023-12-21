import Link from 'next/link';
import Layout from '@/components/layout';
import { Button } from '@/components/ui/button';
import { Shell, Brain, Cpu } from 'lucide-react'; // Replace these with actual icons
import { Card, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';

const services = [
    {
        name: 'Hipnoterapi',
        description: 'Sesi hipnoterapi yang dipersonalisasi untuk kesejahteraan mental dan pengembangan diri.',
        icon: Shell, // Ganti dengan ikon yang sesuai
        link: '/services/hipnoterapi'
    },
    {
        name: 'Pelatihan',
        description: 'Program pelatihan yang menarik untuk meningkatkan keterampilan hidup dan kompetensi profesional Anda.',
        icon: Brain, // Ganti dengan ikon yang sesuai
        link: '/services/training'
    },
    {
        name: 'Coaching',
        description: 'Coaching satu-satu untuk membantu Anda menghadapi tantangan hidup dan mencapai tujuan Anda.',
        icon: Cpu, // Ganti dengan ikon yang sesuai
        link: '/services/coaching'
    }
];
export default function Services() {
    return (
        <Layout>
            <div className="container mx-auto p-4 py-12">


                        <div className="text-center mb-8">
                            <h2 className="text-3xl font-bold text-stone-800">Layanan Kami</h2>
                            <p className="text-stone-600">Jelajahi berbagai layanan kami yang disesuaikan dengan kebutuhan Anda</p>

                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            {services.map((service, index) => (
                                <Card key={index}>
                                    <CardHeader>
                                        <service.icon className="h-12 w-12 text-stone-500 my-8" />
                                        <CardTitle>{service.name}</CardTitle>
                                        <CardDescription>{service.description}</CardDescription>
                                    </CardHeader>
                                    <CardFooter >
                                        <Button asChild className="mt-4" >
                                            <Link href={service.link} >Baca Lebih lanjut</Link>
                                        </Button>
                                    </CardFooter>

                                </Card>
                            ))}
                        </div>
                    </div>
                    
        </Layout>
    );
}
