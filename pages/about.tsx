import Background from '@/components/Background';
import Philosophy from '@/components/Philosophy';
import Achievements from '@/components/Achievements';
import Layout from '@/components/layout';

const About = () => {
    return (
        <Layout>
           <div className='py-12'>
                <h1 className="text-2xl font-bold text-center mb-6">About Us</h1>
                <Background />
                <Philosophy />
                <Achievements />
           </div>
        </Layout>
    );
}

export default About;
