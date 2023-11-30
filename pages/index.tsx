


import Image from 'next/image';
import Layout from '@/components/layout'
import Clients from '@/components/clients';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button  } from '@/components/ui/button';
import { Shell, Brain, Cpu } from 'lucide-react'; // Replace these with actual icons
import Link from 'next/link';

export default function Home() {
  const testimonials = [
    {
      name: 'Client Name 1',
      photo: 'https://source.unsplash.com/random/?person', // Replace with actual client photo
      feedback: 'The hypnotherapy sessions were transformative. I have found a new sense of clarity and purpose.'
    },
    // ... more testimonials
  ];
  const services = [
    {
      name: 'Hipnoterapi',
      description: 'Personalized hypnotherapy sessions for mental well-being and self-improvement.',
      icon: Shell,
      link: '/hipnoterapi'
    },
    {
      name: 'Training',
      description: 'Engaging training programs to enhance your life skills and professional competencies.',
      icon: Brain,
      link: '/training'
    },
    {
      name: 'Coaching',
      description: 'One-on-one coaching to help you navigate life’s challenges and achieve your goals.',
      icon: Cpu,
      link: '/coaching'
    }
  ];

  return (
    <Layout>
      <div className="bg-stone-100 container">

          <div className="flex flex-col lg:flex-row items-center py-12 md:py-24">
            <div className="lg:w-1/2">
              <h1 className="text-3xl md:text-4xl font-bold text-stone-800 mb-3">
                Empower Your Life with Our Services
              </h1>
              <p className="text-stone-600 mb-6">
                Discover transformative experiences through hipnoterapi, life skill training, and personal coaching.
              </p>
              <Button color="blue">
                Book a Consultation
              </Button>
            </div>
            <div className="lg:w-1/2 mt-6 lg:mt-0">
              {/* Replace with your image URL */}
              <Image
              src="https://source.unsplash.com/random/?city,night"
                alt="Hero Image"
                width={500}
                height={300}

                className='aspect-video object-cover'

              />
            </div>
          </div>
        <Clients/>

        <div className="bg-stone-100 py-12">
          <div className="container mx-auto px-4">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-stone-800">Our Services</h2>
              <p className="text-stone-600">Explore our range of services tailored to your needs</p>
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
                      <Link href={service.link} >Learn More</Link>
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
                src="https://source.unsplash.com/random/?portrait"
                alt="About Us"
                width={400}
                height={400}
                className="rounded-lg"
              />
            </div>
              <div>
                <h2 className="text-3xl font-bold text-stone-800 mb-4">About Us</h2>
                <p className="text-stone-600 mb-4">
                  With over a decade of experience in hypnotherapy, life skills training,
                  and personal coaching, we empower individuals to achieve their personal
                  and professional goals. Our dedicated team is committed to providing
                  transformative experiences and guidance.
                </p>
                <p className="text-stone-600">
                  We believe in a holistic approach to self-improvement and are dedicated
                  to helping you unlock your full potential.
                </p>
              </div>
             
            </div>

        </div>
        <div className="py-12 bg-stone-100">
          <div className="container mx-auto px-4">
            <Card className="w-full">
              <CardHeader>
                <CardTitle>What Our Clients Say</CardTitle>
                <CardDescription>Hear from those who have experienced change first-hand.</CardDescription>
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
            <h2 className="text-2xl font-bold text-stone-800 mb-3">Interested in Learning More?</h2>
            <p className="text-stone-600 mb-6">Discover how our services can transform your life.</p>
            <Button
             asChild

              className="mr-4"
            >
              <Link href={"/testimonials"}>View Testimonials</Link>
            </Button>
            <Button
             asChild
              variant={"outline"}

            >
              <Link href={"/about-us"}>Read More About Us</Link>
            </Button>
          </div>
        </div>
      </div>
    </Layout>
  )
}
