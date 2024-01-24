


import Image from 'next/image';
import Layout from '@/components/layout'
import Clients from '@/components/clients';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button  } from '@/components/ui/button';
import { Shell, Brain, Cpu } from 'lucide-react'; // Replace these with actual icons
import Link from 'next/link';
import { getAllPosts } from '../lib/posts';

import sahdani from "@/public/images/sahdani.jpg"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { GetStaticProps } from 'next';
import SEO from '@/components/seo';

const BookSession = "https://wa.me/6285179561643";
interface Post {
  slug: string;
  title: string;
  date: string;
  content: string;
}

interface HomeProps {
  posts: Post[];
}



export default function Home({ posts }: HomeProps) {

const testimonials = [
    {
        name: "Aisyah, Guru",
        feedback: "Sesi hipnoterapi dengan Pak Sahdani benar-benar mengubah cara saya menghadapi kecemasan. Teknik yang beliau gunakan sangat efektif, dan saya merasa lebih tenang dan terkendali. Terima kasih, Pak Sahdani!",
    photo: "https://source.unsplash.com/random/?avatar" // Replace with actual path
    },
    {
        name: "Budi, Badminton",
        feedback: "Sebagai seorang atlet, konsentrasi dan fokus adalah segalanya buat saya. Hipnoterapi dengan Pak Sahdani membantu saya meningkatkan kinerja saya secara signifikan. Saya merasa lebih fokus dan termotivasi.",
      photo: "https://source.unsplash.com/random/?avatar" // Replace with actual path
    },
    {
        name: "Rindi, Public Relations",
        feedback: "Saya selalu takut berbicara di depan umum. Setelah beberapa sesi dengan Mas Sahdani, saya merasa lebih percaya diri. Kini, saya bisa berbicara di depan banyak orang tanpa rasa takut yang menghantui.",
      photo: "https://source.unsplash.com/random/?avatar" // Replace with actual path
    },
    {
        name: "Hidayat, Eksekutif Perusahaan",
        feedback: "Pekerjaan saya sebagai eksekutif perusahaan sangat menuntut. Tekanan dan stres menjadi bagian hari-hari saya. Berkat hipnoterapi, saya kini bisa mengelola stres dengan lebih baik. Pak Sahdani benar-benar membantu saya menemukan keseimbangan dalam bekerja.",
      photo: "https://source.unsplash.com/random/?avatar" // Replace with actual path
    },
    {
        name: "Erika, Desainer Interior",
        feedback: "Setelah bercerai, saya merasa sangat down dan tidak bersemangat. Hipnoterapi dengan Mas Sahdani membantu saya melewati masa sulit dan menemukan kebahagiaan kembali. Terima kasih atas dukungan dan bimbingannya.",
      photo: "https://source.unsplash.com/random/?avatar" // Replace with actual path
    }
];
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

  
  return (
    <Layout>
      <SEO title='Hipnoterapi Bone terdekat'  />
      <div className="bg-stone-100 container">

        <div className="flex flex-col lg:flex-row items-center py-12 md:py-24">
          <div className="lg:w-1/2">
            <h1 className="text-3xl md:text-4xl font-bold text-stone-800 mb-3">
              Tingkatkan Kualitas <br /> Hidup Anda 
            </h1>
            <p className="text-stone-600 mb-6">
              Temukan pengalaman transformatif melalui hipnoterapi, pelatihan keterampilan hidup, dan coaching pribadi.
            </p>
           
            <Button color="blue" asChild>
              <Link href={BookSession} className="text-white">Jadwalkan Konsultasi</Link>
            </Button>
          </div>
          <div className="lg:w-1/2 mt-6 lg:mt-0 aspect-video rounded-lg">
            <iframe
              src="https://www.youtube.com/embed/MOCU0uT7mSg"
              className='w-full h-full rounded-lg'
              frameBorder="0"
              allowFullScreen>
            </iframe>
          </div>

          {/* <div className="lg:w-1/2 mt-6 lg:mt-0">

            <Image
              src="https://source.unsplash.com/random/?city,night"
              alt="Gambar Hero"
              width={500}
              height={300}
              className='aspect-video object-cover'
            />
          </div> */}
        </div>
        <Clients/>

        <div className="bg-stone-100 py-12">
          <div className="md:container mx-auto px-0 lg:px-4">
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
                    <Button asChild className="mt-4">
                      <Link href={service.link} className="text-stone-100">Pelajari Lebih Lanjut</Link>
                    </Button>
                  </CardFooter>
                  
                </Card>
              ))}
            </div>
          </div>
        </div>

        <div className="bg-stone-100 py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="flex justify-center">
              {/* Ganti dengan URL gambar Anda */}
              <Image
                src={sahdani}
                alt="About Us"
                width={400}
                height={400}
                className="rounded-lg"
              />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-stone-800 mb-4">Tentang Sahdani</h2>
              <p className="text-stone-600 mb-4">
                Dengan pengalaman lebih dari satu dekade dalam hipnoterapi, pelatihan keterampilan hidup,
                dan coaching pribadi, kami memberdayakan individu untuk mencapai tujuan pribadi
                dan profesional mereka. Tim kami yang berdedikasi berkomitmen untuk memberikan
                pengalaman transformatif dan bimbingan.
              </p>
              <p className="text-stone-600">
                Kami percaya pada pendekatan holistik untuk peningkatan diri dan berdedikasi
                untuk membantu Anda membuka potensi penuh Anda.
              </p>
              <Button asChild className='my-4'>
                <Link href={"/about"}>Baca Lebih Lanjut Tentang Kami</Link>
              </Button>
            </div>
          </div>
        </div>

        <div className="py-12 bg-stone-100">
          <div className="container mx-auto px-0 lg:px-4">
            <Card className="w-full">
              <CardHeader>
                <CardTitle>Apa Kata Klien Kami</CardTitle>
                <CardDescription>Dengarkan dari mereka yang telah mengalami perubahan secara langsung.</CardDescription>
              </CardHeader>
              <CardContent>
                <Carousel className='w-full'>
                  <CarouselContent className=''>
                    {testimonials.map((testimonial, index) => (
                      <CarouselItem key={index} className='flex flex-col justify-center items-center'>
                        <div className="flex flex-col justify-center items-center gap-2 p-4 px-10  lg:px-24">
                          
                          {/* <Avatar>
                            <Image
                              src={testimonial.photo}
                              alt={testimonial.name}
                              width={100}
                              height={100}
                              className="rounded-full"
                            />
                          </Avatar> */}

                          <p className="text-sm lg:text-lg mb-2 text-center">{testimonial.feedback}</p>
                          <p className="text-sm lg:text-lg text-center lg:text-start text-stone-600 font-bold">{testimonial.name}</p>
                        </div>
                      </CarouselItem>
                    ))}
                  </CarouselContent>
                  <CarouselPrevious className='left-0'/>
                  <CarouselNext className='right-0' />
                </Carousel>
              </CardContent>
              <CardFooter>
                {/* Footer content if needed */}
              </CardFooter>
            </Card>
          </div>
        </div>

        <div className="bg-stone-900 text-stone-50 py-32 rounded-t-xl">
          <div className="container mx-auto text-center">
            <h2 className="text-2xl font-bold  mb-3">Tertarik untuk Mengetahui Lebih Lanjut?</h2>
            <p className="text-stone-200 mb-6">Temukan bagaimana layanan kami dapat mentransformasi hidup Anda.</p>
           <div className='flex flex-col md:flex-row gap-4 justify-center items-center'>
              <Button asChild className="">
                <Link href={BookSession} className="text-stone-100">Pelajari Lebih Lanjut</Link>
              </Button>
              <Button className='text-stone-950' asChild variant={"outline"}>
                <Link href={"/about"} >Baca Lebih Lanjut Tentang Kami</Link>
              </Button>
           </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}




