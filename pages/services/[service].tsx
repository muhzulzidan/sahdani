"use client"

import { useState } from 'react';
import { useRouter } from 'next/router';
import Layout from '@/components/layout';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle2, Smile, Feather, UserPlus,Brain, Users, Target, PenTool, Radio, Presentation, Mic, Weight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Link from 'next/link';

import sahdani from "@/public/images/sahdani.jpg"
const BookSession = "https://wa.me/6285179561643";

interface Benefit {
    title: string;
    description: string;
    icon: any; // Assuming you're using React icons or similar
}

interface ServiceDetail {
    title: string;
    description: string;
    process: string;
    duration: string;
    pricing: string;
    benefits: Benefit[];
    faqs: { question: string; answer: string; }[];
}

interface PricingPlan {
    title: string;
    pricePerSession: number | string;
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
            { title: 'Meredakan Stres dan Kecemasan', description: 'Temukan ketenangan dan kejernihan pikiran, kurangi kecemasan dan stres sehari-hari.', icon: Smile },
            { title: 'Mengatasi Fobia', description: 'Hadapi dan atasi fobia atau ketakutan spesifik dengan cara yang aman dan efektif.', icon: Feather },
            { title: 'Pengembangan Diri', description: 'Dorong perubahan kebiasaan positif dan pertumbuhan pribadi untuk kualitas hidup yang lebih baik.', icon: UserPlus }
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
            }
        ]
    },
    training: {
        title: 'Pelatihan',
        description: 'Program pelatihan kami dirancang untuk memberdayakan individu dan tim dengan keterampilan hidup yang esensial. Kami mengkhususkan diri dalam komunikasi, pengembangan sumber daya manusia, persuasi, resolusi konflik, dan manajemen stres. Pendekatan kami praktis, menarik, dan disesuaikan dengan lingkungan profesional modern.',
        process: 'Pelatihan kami dimulai dengan penilaian kebutuhan tim Anda. Kami kemudian merancang workshop interaktif dan seminar yang menggabungkan pengetahuan teoritis dengan latihan praktis. Setiap sesi adalah dinamis, melibatkan aktivitas kelompok, diskusi, dan refleksi pribadi untuk memastikan pengalaman belajar yang komprehensif.',
        duration: 'Durasi bervariasi per program, biasanya berkisar dari workshop setengah hari hingga seminar beberapa hari.',
        pricing: 'Harga berdasarkan panjang program dan kustomisasi. Hubungi kami untuk kutipan rinci.',
        benefits: [
            { title: 'Peningkatan Keterampilan Komunikasi', description: 'Menguasai teknik komunikasi yang efektif untuk lingkungan profesional.', icon: Brain },
            { title: 'Kolaborasi Tim yang Lebih Baik', description: 'Memperkuat kerjasama tim dan meningkatkan kemampuan resolusi konflik.', icon: Users },
            { title: 'Teknik Manajemen Stres', description: 'Pelajari cara mengelola stres untuk keseimbangan kerja dan kehidupan.', icon: Weight },
            { title: 'Kepercayaan Berbicara di Publik', description: 'Meningkatkan kepercayaan diri dalam berbicara di depan umum dan teknik persuasi.', icon: Mic }
        ],
        faqs: [
            {
                question: 'Program pelatihan apa saja yang ditawarkan?',
                answer: 'Kami menawarkan berbagai program termasuk Komunikasi Efektif, Kepemimpinan Tim, Berbicara di Publik yang Persuasif, Manajemen Stres, dan Resolusi Konflik.'
            },
            {
                question: 'Apakah program dapat disesuaikan untuk kebutuhan tim tertentu?',
                answer: 'Tentu saja. Kami bekerja sama dengan Anda untuk memahami dinamika unik tim Anda dan menyesuaikan program kami untuk memenuhi kebutuhan spesifik tersebut.'
            },
            {
                question: 'Apakah program pelatihan cocok untuk semua tingkat karyawan?',
                answer: 'Ya, program kami dirancang untuk memberi manfaat kepada semua orang mulai dari karyawan baru hingga eksekutif berpengalaman. Kami menyesuaikan konten dan pendekatan untuk sesuai dengan tingkat pengalaman audiens.'
            },
            {
                question: 'Apa yang harus saya lakukan jika saya merasa pelatihan tidak akan efektif untuk saya?',
                answer: 'Pelatihan dirancang untuk dapat disesuaikan dengan berbagai gaya belajar dan kebutuhan. Kami akan bekerja dengan Anda untuk memastikan bahwa materi dan metode pelatihan kami sesuai dengan cara Anda belajar terbaik dan memberikan dukungan yang Anda butuhkan untuk berhasil.'
            },
            {
                question: 'Saya khawatir tidak akan bisa mengaplikasikan apa yang dipelajari dalam pelatihan ke pekerjaan saya sehari-hari. Bagaimana Anda menangani ini?',
                answer: 'Pelatihan kami berfokus pada penerapan praktis. Selain menyediakan teori, kami juga memastikan bahwa Anda memiliki kesempatan untuk berlatih dan mengembangkan keterampilan tersebut melalui studi kasus, simulasi, dan kegiatan interaktif yang relevan dengan situasi kerja Anda.'
            },
            {
                question: 'Bagaimana jika saya merasa tidak memiliki waktu untuk pelatihan?',
                answer: 'Kami memahami bahwa karyawan sering kali memiliki jadwal yang padat, jadi kami menawarkan pelatihan dalam berbagai format, termasuk sesi singkat, modul online, dan pelatihan intensif untuk memastikan bahwa pelatihan dapat diakses oleh semua orang, tidak peduli seberapa sibuk jadwal mereka.'
            },
            {
                question: 'Bagaimana jika saya takut pelatihan akan membosankan atau tidak relevan?',
                answer: 'Kami berkomitmen untuk membuat pelatihan kami menarik dan relevan. Instruktur kami adalah ahli di bidangnya dan menggunakan metode pengajaran yang menarik untuk memastikan bahwa setiap peserta tetap terlibat dan mendapatkan manfaat maksimal dari pengalaman pelatihan mereka.'
            },
        ],
    },

    coaching: {
        title: 'Coaching',
        description: 'Layanan coaching kami dirancang untuk memberikan dukungan satu-satu yang dipersonalisasi dan disesuaikan dengan tujuan dan tantangan unik Anda. Apakah Anda sedang menghadapi transisi karir, mencari pengembangan pribadi, atau mengatasi hambatan profesional tertentu, sesi pelatihan kami menawarkan ruang untuk pertumbuhan dan penemuan diri.',
        process: 'Metodologi pelatihan kami berpusat pada klien dan berorientasi pada tujuan. Kami memulai dengan penilaian komprehensif untuk memahami tujuan dan tantangan Anda. Sesi kemudian disusun mengelilingi tujuan-tujuan ini, menggunakan campuran percakapan terbimbing, latihan reflektif, dan perencanaan tindakan. Pendekatan kami adaptif, berkembang dengan kemajuan dan wawasan Anda.',
        duration: 'Program biasanya berlangsung selama 6 bulan, dengan fleksibilitas untuk diperpanjang berdasarkan kebutuhan individu. Setiap sesi berlangsung sekitar satu jam, diadakan dua minggu sekali atau bulanan.',
        pricing: 'Harga mulai dari $200 per bulan, dengan paket yang dapat disesuaikan dengan frekuensi dan durasi sesi.',
        benefits: [
            { title: 'Strategi Pengembangan Pribadi', description: 'Strategi khusus untuk pertumbuhan pribadi dan profesional.', icon: Presentation },
            { title: 'Kesadaran Diri yang Meningkat', description: 'Meningkatkan kesadaran diri dan keterampilan pengambilan keputusan.', icon: Radio },
            { title: 'Dukungan Pencapaian Tujuan', description: 'Bantuan terstruktur dalam mencapai tujuan spesifik Anda.', icon: Target },
            { title: 'Teknik Sukses Jangka Panjang', description: 'Alat dan teknik untuk kesuksesan dan kepuasan jangka panjang.', icon: PenTool }
        ],
        faqs: [
            {
                question: 'Apa fokus dari coaching Anda?',
                answer: 'Pelatihan kami berfokus pada memberdayakan Anda untuk mencapai tujuan pribadi dan profesional, menyediakan dukungan dalam area seperti pengembangan karir, keterampilan kepemimpinan, dan pertumbuhan pribadi.'
            },
            {
                question: 'Bagaimana saya tahu jika coaching cocok untuk saya?',
                answer: 'coaching bermanfaat jika Anda mencari dukungan yang terstruktur dan personal untuk mencapai tujuan tertentu atau menghadapi tantangan hidup. Ini ideal bagi mereka yang siap mengambil langkah proaktif menuju pertumbuhan pribadi dan profesional.'
            },
            {
                question: 'Apa perbedaan antara coaching dan terapi?',
                answer: 'Meskipun baik coaching maupun terapi dapat memfasilitasi pengembangan pribadi, coaching lebih berfokus pada penetapan tujuan dan pertumbuhan yang berorientasi masa depan, sedangkan terapi sering kali berurusan dengan penyembuhan dan menyelesaikan masalah masa lalu.'
            },
            {
                question: 'Apa yang mungkin menghambat saya dari mengikuti coaching?',
                answer: 'Banyak orang merasa ragu untuk memulai coaching karena takut akan perubahan atau tidak yakin jika investasi waktu dan biaya akan membuahkan hasil. Kami menjamin pendekatan yang disesuaikan dan mendukung untuk membantu Anda melampaui hambatan dan mencapai potensi penuh Anda.'
            },
            {
                question: 'Bagaimana jika saya tidak yakin tujuan yang ingin saya capai dengan coaching?',
                answer: 'Tidak masalah jika Anda belum jelas tentang tujuan Anda. Bagian dari proses coaching adalah membantu Anda menentukan dan mempertajam tujuan Anda. Kami akan bekerja bersama Anda untuk mengidentifikasi apa yang paling penting bagi Anda dan bagaimana mencapainya.'
            },
            {
                question: 'Saya khawatir tidak memiliki cukup waktu untuk coaching. Bagaimana ini bisa diatasi?',
                answer: 'Kami memahami bahwa waktu adalah aset berharga, dan itulah sebabnya kami menawarkan fleksibilitas dalam penjadwalan sesi. Coaching efektif bisa dilakukan dalam sesi yang lebih pendek tetapi konsisten, dan kami akan menyesuaikan rencana sesuai dengan ketersediaan Anda.'
            },
            {
                question: 'Bagaimana jika saya tidak nyaman membahas masalah pribadi atau profesional dengan pelatih?',
                answer: 'Kerahasiaan dan kenyamanan Anda adalah prioritas kami. Anda akan selalu memiliki kendali atas apa yang Anda ingin diskusikan, dan kami menyediakan lingkungan yang aman dan mendukung untuk setiap sesi coaching.'
            },
        ],
    },

    // ... add more services as needed
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
    training: [
        // {
        //     title: "Pelatihan Dasar",
        //     pricePerSession: 1000000, // Assuming this is the price per session in IDR
        //     description: "Keterampilan dasar untuk komunikasi dan kerja tim yang efektif.",
        //     features: [
        //         "Keterampilan Komunikasi",
        //         "Kolaborasi Tim",
        //         "Resolusi Konflik"
        //     ],
        //     actionLabel: "Mulai Sekarang",
        // },
        // {
        //     title: "Pelatihan Profesional",
        //     pricePerSession: 2000000, // Assuming this is the price per session in IDR
        //     description: "Pelatihan mendalam untuk kepemimpinan dan manajemen.",
        //     features: [
        //         "Keterampilan Kepemimpinan",
        //         "Teknik Komunikasi Lanjutan",
        //         "Manajemen Stres"
        //     ],
        //     actionLabel: "Mulai Sekarang",
        //     popular: true,
        // },
        {
            title: "Pelatihan Eksekutif",
            pricePerSession: "Custom", // Use "Custom" for tailored pricing
            description: "Program pelatihan yang disesuaikan untuk kebutuhan eksekutif tingkat tinggi.",
            features: [
                "Modul Pelatihan Disesuaikan",
                "Coaching Satu-satu",
                "Dukungan Berkelanjutan"
            ],
            actionLabel: "Hubungi untuk Penawaran",
            exclusive: true,
        },
    ],
    coaching: [
        // {
        //     title: "Coaching Pribadi",
        //     pricePerSession: 1200000, // Assuming this is the price per session in IDR
        //     description: "Coaching individual untuk pengembangan pribadi dan pencapaian tujuan.",
        //     features: [
        //         "Penetapan Tujuan",
        //         "Strategi Pengembangan Pribadi",
        //         "Sesi Akuntabilitas"
        //     ],
        //     actionLabel: "Mulai Sekarang",
        // },
        // {
        //     title: "Coaching Profesional",
        //     pricePerSession: 2500000, // Assuming this is the price per session in IDR
        //     description: "Coaching terfokus untuk pengembangan profesional dan kemajuan karir.",
        //     features: [
        //         "Perencanaan Karir",
        //         "Pengembangan Keterampilan Profesional",
        //         "Peningkatan Kinerja"
        //     ],
        //     actionLabel: "Mulai Sekarang",
        //     popular: true,
        // },
        {
            title: "Coaching Eksekutif",
            pricePerSession: "Custom", // Use "Custom" for tailored pricing
            description: "Coaching tingkat tinggi untuk eksekutif dan pemimpin bisnis.",
            features: [
                "Perencanaan Strategis",
                "Pengembangan Kepemimpinan",
                "Sumber Daya Eksklusif"
            ],
            actionLabel: "Hubungi untuk Penawaran",
            exclusive: true,
        },
    ],
};


type PricingSwitchProps = {
    onSwitch: (value: string) => void
}

type PricingCardProps = {
    isYearly?: boolean
    title: string
    monthlyPrice?: number
    yearlyPrice?: number
    description: string
    features: string[]
    actionLabel: string
    popular?: boolean
    exclusive?: boolean
}



const PricingHeader = ({ title, subtitle }: { title: string; subtitle: string }) => (
    <section className="text-center">
        <h2 className="text-3xl font-bold">{title}</h2>
        <p className="text-xl pt-1">{subtitle}</p>
        <br />
    </section>
)


const PricingCard = ({ title, pricePerSession, description, features, actionLabel, popular, exclusive }: PricingPlan) => (
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


export default function ServicePage() {
    const router = useRouter();
    const serviceQuery = router.query.service;
    const service = Array.isArray(serviceQuery) ? serviceQuery[0] : serviceQuery;

    const [isYearly, setIsYearly] = useState(false);

    // Safely access the details and plans using the service string
    const details = service ? serviceDetails[service] : undefined;
    const plans = service ? (servicePricing[service] || []) : [];

    if (!details) {
        // Handle the case where the service is not found
        return (
            <Layout>
                <div className="container mx-auto p-4">
                    <h1>Service Not Found</h1>
                </div>
            </Layout>
        );
    }

    return (
        <Layout>
            <div className="container mx-auto p-4 py-12">
                <div>
                    <h1 className="text-4xl font-bold text-start mb-6">{details.title}</h1>
                    <p>{details.description}</p>
                </div>
                {/* CTA Section */}
                <section className="text-start py-4">
                    <h2 className="text-md text-stone-600 font-normal mb-3">{`Siap untuk transformasi hidup Anda? Temukan keseimbangan dan kedamaian pikiran yang Anda cari.`}</h2>
                    <Button asChild className="inline-flex items-center justify-center px-6 py-3 bg-purple-600 text-white font-medium rounded-md hover:bg-purple-700">
                        <Link href={BookSession}>Jadwalkan Konsultasi Gratis</Link>
                    </Button>
                </section>

             
                <h2 className="text-lg font-semibold mt-4">Proses Kami</h2>
                <p>{details.process}</p>
                {/* <h2 className="text-lg font-semibold mt-4">Duration</h2> */}
                {/* <p>{details.duration}</p> */}
                <section className='py-12 rounded-lg px-6'>
                    <div className=' text-center flex flex-col gap-2 mb-6'>
                        <h2 className="text-3xl font-bold">Manfaat Pelatihan</h2>
                        <p>Berikut Beberapa manfaat yang akan kamu dapatkan </p>
                    </div>
                    <div className="grid md:grid-cols-3 gap-6 text-start">
                        {details.benefits.map((benefit, index) => (
                            <Card key={index} className='bg-gradient-to-r from-green-100 to-green-200 '>
                                <CardHeader>
                                    <benefit.icon className="h-12 w-12 text-stone-950 my-4" />
                                    <CardTitle>{benefit.title}</CardTitle>
                                    <CardDescription>{benefit.description}</CardDescription>
                                </CardHeader>


                            </Card>

                        ))}
                    </div>
                </section>
              <section className='py-12'>
                    <PricingHeader title="Paket Harga" subtitle={`Pilih paket yang tepat untuk ${details.title} Anda  `} />


                    <section className="flex flex-col sm:flex-row sm:flex-wrap justify-center gap-8 mt-8">
                        {plans.map((plan: JSX.IntrinsicAttributes & PricingPlan) => (
                            <PricingCard key={plan.title} {...plan} />
                        ))}
                    </section>
              </section>


               <div className='py-4'>
                    <h2 className="text-2xl font-semibold mt-4">FAQs</h2>
    
                    <Accordion type="single" collapsible className="w-full">
                        {details.faqs.map((faq, index) => (
    
                            <AccordionItem value={`${index}`} key={index}>
                                <AccordionTrigger className='text-start'>{faq.question}</AccordionTrigger>
                                <AccordionContent>
                                    {faq.answer}
                                </AccordionContent>
    
                            </AccordionItem>
                        ))}
                    </Accordion>
    
               </div>
                <section className="bg-indigo-700 text-white text-center p-8 my-12 rounded-lg mb-12">
                    <h2 className="text-3xl font-bold mb-4">Siap Untuk Transformasi?</h2>
                    <p className="mb-6">Jelajahi berbagai layanan kami dan mulai perjalanan Anda menuju pertumbuhan pribadi.</p>
                    <Button asChild className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm w-fit text-white bg-stone-950 hover:bg-stone-100 hover:text-stone-950">
                        <Link href={BookSession}>Jadwalkan Konsultasi</Link>
                    </Button>
                </section>
            </div>
        </Layout>
    );
}