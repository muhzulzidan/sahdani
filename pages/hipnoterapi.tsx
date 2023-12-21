import { useRouter } from 'next/router';
import Layout from '@/components/layout';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { useState } from 'react';
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Smile, Feather, UserPlus } from 'lucide-react';
import Link from 'next/link';

interface ServiceDetail {
    title: string;
    description: string;
    process: string;
    duration: string;
    pricing: string;
    benefits: string[];
    faqs: { question: string; answer: string; }[];
}

interface PricingPlan {
    title: string;
    pricePerSession: number | string; // Updated to focus on per session pricing
    description: string;
    features: string[];
    actionLabel: string;
    popular?: boolean;
    exclusive?: boolean;
}

type PricingCardProps = {
    title: string;
    pricePerSession: number | string; // Updated to focus on per session pricing
    description: string;
    features: string[];
    actionLabel: string;
    popular?: boolean;
    exclusive?: boolean;
}



// Defining an index signature for the servicePricing object
interface ServicePricing {
    [key: string]: PricingPlan[];
}

const serviceDetails: Record<string, ServiceDetail> = {
    hipnoterapi: {
        title: 'Hipnoterapi',
        description: 'Hipnoterapi adalah teknik terapeutik transformatif yang menggunakan hipnosis untuk menjangkau pikiran bawah sadar, mendorong perubahan mendalam dan pertumbuhan pribadi. Ini sangat efektif untuk meredakan stres, mengatasi fobia, dan modifikasi kebiasaan.',
        process: 'Proses dimulai dengan konsultasi untuk memahami tujuan dan kekhawatiran Anda. Selama sesi, Anda akan dipandu ke dalam keadaan rileks dan seperti trance, di mana kita dapat mengatasi dan mereformasi pola dan pemicu bawah sadar.',
        duration: 'Setiap sesi biasanya berlangsung selama 1 jam, dengan jumlah sesi bervariasi berdasarkan kebutuhan individu.',
        pricing: 'Rp100.000 per sesi, dengan paket tersedia untuk beberapa sesi dengan tarif diskon.',
        benefits: [
            'Efektif Meredakan Stres dan Kecemasan',
            'Bantuan dalam Mengatasi Fobia dan Ketakutan',
            'Dukungan untuk Perubahan Kebiasaan dan Pengembangan Pribadi'
        ],
        faqs: [
            {
                question: 'Apa itu Hipnoterapi?',
                answer: 'Hipnoterapi adalah teknik terapeutik yang menginduksi keadaan konsentrasi fokus dan relaksasi mendalam untuk mengatasi masalah pada tingkat bawah sadar.'
            },
            {
                question: 'Apakah Hipnoterapi aman?',
                answer: 'Ya, hipnoterapi adalah praktik yang aman dan non-invasif ketika dilakukan oleh profesional bersertifikat. Ini adalah keadaan perhatian fokus alami dan tidak memiliki efek samping yang berbahaya.'
            },
            {
                question: 'Berapa banyak sesi yang akan saya butuhkan?',
                answer: 'Jumlah sesi bervariasi tergantung pada tujuan dan kebutuhan individu Anda. Beberapa orang melihat perubahan dalam waktu sedikitnya 1-3 sesi, sementara yang lain mungkin memerlukan lebih banyak.'
            },
            {
                question: 'Apakah hasil hipnoterapi permanen?',
                answer: 'Hasil hipnoterapi dapat sangat bertahan lama, terutama ketika klien berkomitmen pada proses dan mengikuti sesi tindak lanjut sesuai kebutuhan.'
            },
            {
                question: 'Bisakah semua orang dihipnotis?',
                answer: 'Sebagian besar orang bisa dihipnotis hingga tingkat tertentu. Tingkat keberhasilan hipnoterapi bergantung pada kemauan dan keterbukaan klien terhadap proses hipnosis.'
            },
            {
                question: 'Apakah saya akan kehilangan kontrol selama hipnoterapi?',
                answer: 'Tidak, Anda tidak akan kehilangan kontrol. Hipnoterapi adalah proses kolaboratif di mana Anda tetap sadar dan mempertahankan kendali atas pikiran dan tindakan Anda.'
            },
            {
                question: 'Apakah layanan hipnoterapi ini menerima BPJS?',
                answer: 'Tidak, saat ini kami tidak menerima BPJS. Layanan hipnoterapi kami adalah layanan privat yang memerlukan pembayaran langsung kepada praktisi kami.'
            },
            // ... lebih banyak FAQs jika diperlukan
        ],
    },
};

const servicePricing: ServicePricing = {
    hipnoterapi: [
        {
            title: "Paket Pemula",
            pricePerSession: 300000, // IDR, adjust as necessary
            description: "Ideal bagi mereka yang baru mengenal hipnoterapi.",
            features: [
                "Sesi Hipnoterapi Dasar",
                "Konsultasi Awal",
                "Rencana Hipnosis yang Disesuaikan",
                "Durasi Sesi: 1 Jam"
            ],
            actionLabel: "Mulai Sekarang",
        },
        {
            title: "Paket Lanjutan",
            pricePerSession: 500000, // IDR, adjust as necessary
            description: "Sesi lanjutan untuk pekerjaan yang lebih dalam.",
            features: [
                "Teknik Lanjutan",
                "Konsultasi Tindak Lanjut",
                "Waktu Sesi yang Lebih Lama",
                "Durasi Sesi: 1,5 Jam"
            ],
            actionLabel: "Mulai Sekarang",
            popular: true,
        },
        {
            title: "Paket Pro",
            pricePerSession: "Custom", // IDR, adjust as necessary for custom pricing
            description: "Dukungan hipnoterapi komprehensif dan berkelanjutan.",
            features: [
                "Sesi Tanpa Batas",
                "Penjadwalan Prioritas",
                "Dukungan Berkelanjutan",
                "Durasi Sesi: Disesuaikan"
            ],
            actionLabel: "Hubungi untuk Penawaran",
            exclusive: true,
        },
    ],
    // ... other services removed for focus ...
};


const BookSession = "https://wa.me/6285179561643";



const PricingHeader = ({ title, subtitle }: { title: string; subtitle: string }) => (
    <section className="text-center">
        <h2 className="text-3xl font-bold">{title}</h2>
        <p className="text-xl pt-1">{subtitle}</p>
        <br />
    </section>
)


const PricingCard = ({ title, pricePerSession, description, features, actionLabel, popular, exclusive }: PricingCardProps) => (
    <Card
        className={cn(`w-72 flex flex-col justify-between py-1 ${popular ? "border-rose-400" : "border-zinc-700"} mx-auto sm:mx-0`, {
            "animate-background-shine bg-white dark:bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] transition-colors":
                exclusive,
        })}>
        <div>
            <CardHeader className="pb-8 pt-4">
                <CardTitle className="text-zinc-700 dark:text-zinc-300 text-lg">{title}</CardTitle>
                <div className="flex gap-0.5">
                    <div className="flex gap-0.5">
                        <h3 className="text-3xl font-bold">
                            {typeof pricePerSession === 'number' ? `Rp${pricePerSession.toLocaleString('id-ID')}` : pricePerSession}
                        </h3>
                        {typeof pricePerSession === 'number' && <span className="flex flex-col justify-end text-sm mb-1">/sesi</span>}
                    </div>
                    {/* <span className="flex flex-col justify-end text-sm mb-1">/sesi</span> */}
                </div>
                <CardDescription className="pt-1.5 h-12">{description}</CardDescription>
            </CardHeader>
            <CardContent className="flex flex-col gap-2">
                {features.map((feature: string) => (
                    <CheckItem key={feature} text={feature} />
                ))}
            </CardContent>
        </div>
        <CardFooter className="mt-2">
            <Button asChild className="relative inline-flex w-full items-center justify-center rounded-md bg-black text-white dark:bg-white px-6 font-medium  dark:text-black transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
                {/* <div className="absolute -inset-0.5 -z-10 rounded-lg bg-gradient-to-b from-[#c7d2fe] to-[#8678f9] opacity-75 blur" /> */}
                <Link href={BookSession}>{actionLabel}</Link>
            </Button>
        </CardFooter>
    </Card>
);


const CheckItem = ({ text }: { text: string }) => (
    <div className="flex gap-2">
        <CheckCircle2 size={18} className="my-auto text-green-400" />
        <p className="pt-0.5 text-zinc-700 dark:text-zinc-300 text-sm">{text}</p>
    </div>
)


const HypnotherapyPage = () => {
    // const [isYearly, setIsYearly] = useState(false);
    const details = serviceDetails['hipnoterapi'];
    const plans = servicePricing['hipnoterapi'] || [];

    return (
        <Layout showHeader={false} showFooter={false}>

            <div className="container mx-auto p-4 py-12">
                <section className="text-start rounded-lg ">
                    <h1 className="text-4xl font-bold mb-4">{details.title}</h1>
                    <p className="text-lg mb-6">{details.description}</p>
                    <div className="flex flex-col  gap-4">
                        <p className="mb-4 md:mb-0 md:mr-4 text-gray-700">
                            Siap untuk transformasi hidup Anda? Temukan keseimbangan dan kedamaian pikiran yang Anda cari.
                        </p>
                        <Button asChild className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm w-fit text-white bg-purple-600 hover:bg-purple-700">
                            <Link href={BookSession}  > Jadwalkan Konsultasi Gratis</Link>
                        </Button>
                    </div>
                </section>

                <section className='py-12 pt-24'>
                    <h2 className="text-2xl font-semibold">Pertanyaan yang Sering Ditanyakan?</h2>
                    <Accordion type="single" collapsible>
                        {details.faqs.map((faq, index) => (
                            <AccordionItem value={`${index}`} key={index}>
                                <AccordionTrigger>{faq.question}</AccordionTrigger>
                                <AccordionContent>{faq.answer}</AccordionContent>
                            </AccordionItem>
                        ))}
                    </Accordion>
                </section>
                <section className='py-12 rounded-lg  px-6'>
                    <h2 className="text-2xl font-semibold text-center mb-6">Manfaat Hipnoterapi</h2>
                    <div className="grid md:grid-cols-3 gap-6 text-center">
                        <div className="flex flex-col items-center p-4 bg-gradient-to-r from-green-100 to-green-200 rounded-lg shadow">
                            <Smile className="text-green-600 mb-2" size={40} />
                            <h3 className="font-semibold mb-2">Meredakan Stres dan Kecemasan</h3>
                            <p>Temukan ketenangan dan kejernihan pikiran, kurangi kecemasan dan stres sehari-hari.</p>
                        </div>
                        <div className="flex flex-col items-center p-4 bg-gradient-to-r from-blue-100 to-blue-200 rounded-lg shadow">
                            <Feather className="text-blue-600 mb-2" size={40} />
                            <h3 className="font-semibold mb-2">Mengatasi Fobia</h3>
                            <p>Hadapi dan atasi fobia atau ketakutan spesifik dengan cara yang aman dan efektif.</p>
                        </div>
                        <div className="flex flex-col items-center p-4 bg-gradient-to-r from-purple-100 to-purple-200 rounded-lg shadow">
                            <UserPlus className="text-purple-600 mb-2" size={40} />
                            <h3 className="font-semibold mb-2">Pengembangan Diri</h3>
                            <p>Dorong perubahan kebiasaan positif dan pertumbuhan pribadi untuk kualitas hidup yang lebih baik.</p>
                        </div>
                    </div>
                </section>
                <section className="py-12">
                    <h2 className="text-2xl font-semibold mt-4">Paket Harga</h2>
                    <div className="flex flex-col sm:flex-row sm:flex-wrap justify-center gap-8 mt-8">
                        {plans.map((plan) => (
                            <PricingCard key={plan.title} {...plan} />
                        ))}
                    </div>
                </section>




            </div>
        </Layout>
    );
};

export default HypnotherapyPage;
