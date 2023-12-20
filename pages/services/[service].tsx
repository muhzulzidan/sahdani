"use client"
import { useRouter } from 'next/router';
import Layout from '@/components/layout';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle2, Smile, Feather, UserPlus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Link from 'next/link';
import { useState } from 'react';


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
    monthlyPrice?: number;
    yearlyPrice?: number;
    description: string;
    features: string[];
    actionLabel: string;
    popular?: boolean;
    exclusive?: boolean;
    price?: string; // Add this if some plans have a string type price like "Custom"
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
            }
        ]
    },
    training: {
        title: 'Training',
        description: 'Our training programs are designed to empower individuals and teams with essential life skills. We specialize in communication, human resource development, persuasion, conflict resolution, and stress management. Our approach is practical, engaging, and tailored to the modern professional environment.',
        process: 'Our training begins with an assessment of your team’s needs. We then design interactive workshops and seminars that combine theoretical knowledge with practical exercises. Each session is dynamic, involving group activities, discussions, and personal reflections to ensure a comprehensive learning experience.',
        duration: 'Duration varies per program, typically ranging from half-day workshops to multi-day seminars.',
        pricing: 'Pricing is based on the program’s length and customization. Contact us for a detailed quote.',
        benefits: [
            'Enhanced Communication Skills',
            'Improved Team Collaboration and Conflict Resolution',
            'Effective Stress Management Techniques',
            'Increased Confidence in Public Speaking and Persuasion'
        ],
        faqs: [
            {
                question: 'What training programs are offered?',
                answer: 'We offer a range of programs including Effective Communication, Team Leadership, Persuasive Public Speaking, Stress Management, and Conflict Resolution.'
            },
            {
                question: 'Can programs be customized for specific team needs?',
                answer: 'Absolutely. We work closely with you to understand your team’s unique dynamics and tailor our programs to meet these specific requirements.'
            },
            {
                question: 'Are the training programs suitable for all levels of employees?',
                answer: 'Yes, our programs are designed to benefit everyone from new hires to seasoned executives. We adjust the content and approach to suit the audience’s experience level.'
            },
            // ... more FAQs
        ],
    },

    coaching: {
        title: 'Coaching',
        description: 'Our coaching services are designed to provide personalized, one-on-one support tailored to your unique goals and challenges. Whether you’re navigating career transitions, seeking personal development, or tackling specific professional hurdles, our coaching sessions offer a space for growth and self-discovery.',
        process: 'Our coaching methodology is client-centered and goal-oriented. We start with a comprehensive assessment to understand your objectives and challenges. Sessions are then structured around these goals, using a mix of guided conversations, reflective exercises, and action planning. Our approach is adaptive, evolving with your progress and insights.',
        duration: 'Programs typically span 6 months, with the flexibility to extend based on individual needs. Each session lasts about an hour, held bi-weekly or monthly.',
        pricing: 'Pricing starts from $200 per month, with packages customizable to the frequency and duration of sessions.',
        benefits: [
            'Tailored Strategies for Personal and Professional Development',
            'Enhanced Self-Awareness and Decision-Making Skills',
            'Structured Support in Achieving Specific Goals',
            'Tools and Techniques for Long-Term Success and Fulfillment'
        ],
        faqs: [
            {
                question: 'What is the focus of your coaching?',
                answer: 'Our coaching focuses on empowering you to achieve your personal and professional goals, providing support in areas such as career development, leadership skills, and personal growth.'
            },
            {
                question: 'How do I know if coaching is right for me?',
                answer: 'Coaching is beneficial if you are seeking structured and personalized support to achieve specific goals or navigate life’s challenges. It’s ideal for those who are ready to take proactive steps towards personal and professional growth.'
            },
            {
                question: 'What is the difference between coaching and therapy?',
                answer: 'While both coaching and therapy can facilitate personal development, coaching is more focused on goal-setting and future-oriented growth, whereas therapy often deals with healing and resolving past issues.'
            },
            // ... more FAQs
        ],
    },

    // ... add more services as needed
};

const servicePricing: ServicePricing = {
    hipnoterapi: [
        {
            title: "Starter Package",
            monthlyPrice: 80,
            yearlyPrice: 800,
            description: "Ideal for those new to hypnotherapy.",
            features: ["Basic Hypnotherapy Sessions", "Initial Consultation", "Customized Hypnosis Plan"],
            actionLabel: "Get Started",
        },
        {
            title: "Advanced Package",
            monthlyPrice: 150,
            yearlyPrice: 1500,
            description: "Advanced sessions for deeper work.",
            features: ["Advanced Techniques", "Follow-up Consultations", "Extended Session Time"],
            actionLabel: "Get Started",
            popular: true,
        },
        {
            title: "Pro Package",
            price: "Custom",
            description: "Comprehensive, ongoing hypnotherapy support.",
            features: ["Unlimited Sessions", "Priority Scheduling", "Continuous Support"],
            actionLabel: "Contact for Quote",
            exclusive: true,
        },
    ],
    training: [
        {
            title: "Basic Training",
            monthlyPrice: 100,
            yearlyPrice: 1000,
            description: "Essential skills for effective communication and team work.",
            features: ["Communication Skills", "Team Collaboration", "Conflict Resolution"],
            actionLabel: "Get Started",
        },
        {
            title: "Professional Training",
            monthlyPrice: 200,
            yearlyPrice: 2000,
            description: "In-depth training for leadership and management.",
            features: ["Leadership Skills", "Advanced Communication Techniques", "Stress Management"],
            actionLabel: "Get Started",
            popular: true,
        },
        {
            title: "Executive Training",
            price: "Custom",
            description: "Tailored training programs for high-level executive needs.",
            features: ["Customized Training Modules", "One-on-One Coaching", "Ongoing Support"],
            actionLabel: "Contact for Quote",
            exclusive: true,
        },
    ],
    coaching: [
        {
            title: "Personal Coaching",
            monthlyPrice: 120,
            yearlyPrice: 1200,
            description: "Individualized coaching for personal development and goal achievement.",
            features: ["Goal Setting", "Personal Growth Strategies", "Accountability Sessions"],
            actionLabel: "Get Started",
        },
        {
            title: "Professional Coaching",
            monthlyPrice: 250,
            yearlyPrice: 2500,
            description: "Focused coaching for professional development and career advancement.",
            features: ["Career Planning", "Professional Skill Development", "Performance Enhancement"],
            actionLabel: "Get Started",
            popular: true,
        },
        {
            title: "Executive Coaching",
            price: "Custom",
            description: "High-level coaching for executives and business leaders.",
            features: ["Strategic Planning", "Leadership Development", "Exclusive Resources"],
            actionLabel: "Contact for Quote",
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

const PricingSwitch = ({ onSwitch }: PricingSwitchProps) => (
    <Tabs defaultValue="0" className="w-40 mx-auto" onValueChange={onSwitch}>
        <TabsList className="py-6 px-2">
            <TabsTrigger value="0" className="text-base">
                Monthly
            </TabsTrigger>
            <TabsTrigger value="1" className="text-base">
                Yearly
            </TabsTrigger>
        </TabsList>
    </Tabs>
)

const PricingCard = ({ isYearly, title, monthlyPrice, yearlyPrice, description, features, actionLabel, popular, exclusive }: PricingCardProps) => (
    <Card
        className={cn(`w-72 flex flex-col justify-between py-1 ${popular ? "border-rose-400" : "border-zinc-700"} mx-auto sm:mx-0`, {
            "animate-background-shine bg-white dark:bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] transition-colors":
                exclusive,
        })}>
        <div>
            <CardHeader className="pb-8 pt-4">
                {isYearly && yearlyPrice && monthlyPrice ? (
                    <div className="flex justify-between">
                        <CardTitle className="text-zinc-700 dark:text-zinc-300 text-lg">{title}</CardTitle>
                        <div
                            className={cn("px-2.5 rounded-xl h-fit text-sm py-1 bg-zinc-200 text-black dark:bg-zinc-800 dark:text-white", {
                                "bg-gradient-to-r from-orange-400 to-rose-400 dark:text-black ": popular,
                            })}>
                            Save ${monthlyPrice * 12 - yearlyPrice}
                        </div>
                    </div>
                ) : (
                    <CardTitle className="text-zinc-700 dark:text-zinc-300 text-lg">{title}</CardTitle>
                )}
                <div className="flex gap-0.5">
                    <h3 className="text-3xl font-bold">{yearlyPrice && isYearly ? "$" + yearlyPrice : monthlyPrice ? "$" + monthlyPrice : "Custom"}</h3>
                    <span className="flex flex-col justify-end text-sm mb-1">{yearlyPrice && isYearly ? "/year" : monthlyPrice ? "/month" : null}</span>
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
            <Button className="relative inline-flex w-full items-center justify-center rounded-md bg-black text-white dark:bg-white px-6 font-medium  dark:text-black transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
                <div className="absolute -inset-0.5 -z-10 rounded-lg bg-gradient-to-b from-[#c7d2fe] to-[#8678f9] opacity-75 blur" />
                {actionLabel}
            </Button>
        </CardFooter>
    </Card>
)

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
                <h2 className="text-lg font-semibold mt-4">Process</h2>
                <p>{details.process}</p>
                <h2 className="text-lg font-semibold mt-4">Duration</h2>
                <p>{details.duration}</p>
              <section className='py-12'>
                    <PricingHeader title="Pricing Plans" subtitle={`Choose the plan that's right for you in ${service}`} />
                    <PricingSwitch onSwitch={(value) => setIsYearly(parseInt(value) === 1)} />
                    <section className="flex flex-col sm:flex-row sm:flex-wrap justify-center gap-8 mt-8">
                        {plans.map((plan: JSX.IntrinsicAttributes & PricingCardProps) => (
                            <PricingCard key={plan.title} {...plan} isYearly={isYearly} />
                        ))}
                    </section>
              </section>
                <h2 className="text-lg font-semibold mt-4">Benefits</h2>
                <ul>
                    {details.benefits.map((benefit, index) => (
                        <li key={index}>{benefit}</li>
                    ))}
                </ul>
               <div className='py-12'>
                    <h2 className="text-2xl font-semibold mt-4">FAQs</h2>
    
                    <Accordion type="single" collapsible className="w-full">
                        {details.faqs.map((faq, index) => (
    
                            <AccordionItem value={`${index}`} key={index}>
                                <AccordionTrigger>{faq.question}</AccordionTrigger>
                                <AccordionContent>
                                    {faq.answer}
                                </AccordionContent>
    
                            </AccordionItem>
                        ))}
                    </Accordion>
    
               </div>
            </div>
        </Layout>
    );
}