


import Image from 'next/image';
import Layout from '@/components/layout'
import Clients from '@/components/clients';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button  } from '@/components/ui/button';
import { Shell, Brain, Cpu } from 'lucide-react'; // Replace these with actual icons
import Link from 'next/link';
import sahdani from "@/public/images/sahdani.jpg"

const BookSession = "https://wa.me/6285179561643";

export default function Home() {
  const testimonials = [
    {
      name: 'Nama Klien 1',
      photo: 'https://source.unsplash.com/random/?person', // Ganti dengan foto klien yang sebenarnya
      feedback: 'Sesi hipnoterapi telah memberikan transformasi. Saya menemukan kejelasan dan tujuan baru dalam hidup.'
    },
    // ... lebih banyak testimoni
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
      <div className="bg-stone-100 container">


        <div className="flex flex-col lg:flex-row items-center py-12 md:py-24">
          <div className="lg:w-1/2">
            <h1 className="text-3xl md:text-4xl font-bold text-stone-800 mb-3">
              Menguatkan Hidup Anda dengan Layanan Kami
            </h1>
            <p className="text-stone-600 mb-6">
              Temukan pengalaman transformatif melalui hipnoterapi, pelatihan keterampilan hidup, dan coaching pribadi.
            </p>
           
            <Button color="blue" asChild>
              <Link href={BookSession} className="text-white">Jadwalkan Konsultasi</Link>
            </Button>
          </div>
          <div className="lg:w-1/2 mt-6 lg:mt-0 aspect-w-9 aspect-h-16">
            <iframe
              src="https://www.instagram.com/reel/C0l5NULr2iS/embed"
              width="400"
              height="500"
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
          <div className="container mx-auto px-4">
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
              {/* Replace with your image URL */}
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
          <div className="container mx-auto px-4">
            <Card className="w-full">
              <CardHeader>
                <CardTitle>Apa Kata Klien Kami</CardTitle>
                <CardDescription>Dengarkan dari mereka yang telah mengalami perubahan secara langsung.</CardDescription>
              </CardHeader>
              <CardContent className="grid gap-4">
                {testimonials.map((testimonial, index) => (
                  <div key={index} className="flex flex-col items-center space-y-2 p-4">
                    <Image
                      src={testimonial.photo}
                      alt={testimonial.name}
                      width={100}
                      height={100}
                      className="rounded-full"
                    />
                    <p className="text-sm text-center">{testimonial.feedback}</p>
                    <p className="text-sm font-medium">{testimonial.name}</p>
                  </div>
                ))}
              </CardContent>
              <CardFooter>
                {/* Footer content if needed */}
              </CardFooter>
            </Card>
          </div>
        </div>

        <div className="bg-stone-100 py-32">
          <div className="container mx-auto text-center">
            <h2 className="text-2xl font-bold text-stone-800 mb-3">Tertarik untuk Mengetahui Lebih Lanjut?</h2>
            <p className="text-stone-600 mb-6">Temukan bagaimana layanan kami dapat mentransformasi hidup Anda.</p>
           <div className='flex gap-4 justify-center items-center'>
              <Button asChild className="">
                <Link href={BookSession} className="text-stone-100">Pelajari Lebih Lanjut</Link>
              </Button>
              <Button asChild variant={"outline"}>
                <Link href={"/about"}>Baca Lebih Lanjut Tentang Kami</Link>
              </Button>
           </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}
