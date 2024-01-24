// pages/about.tsx
import Layout from '@/components/layout';

const About = () => {
    return (
        <Layout>
            <div className='py-12'>
                <h1 className="text-2xl font-bold text-center mb-6">Tentang Kami</h1>
                <div className="prose max-w-full">
                    <p>
                        Andi Mahdi Sahdani, atau yang akrab disapa Coach Sahdani, merupakan seorang praktisi hipnosis dan hipnoterapi yang telah berpengalaman dalam menangani masalah psikologis dengan pendekatan hipnoterapi.
                    </p>
                    <p>
                        Coach Sahdani juga merupakan Pendiri & CEO dari Hypnopreneur Indonesia, sebuah lembaga pelatihan dan pengembangan sumber daya manusia berbasis teknologi pikiran serta menjadi Instruktur bersertifikasi BNSP.
                    </p>
                    <p>
                        Dalam keseharian, selain melakukan sesi hipnoterapi, Coach Sahdani aktif mengisi berbagai macam seminar, pelatihan, ataupun workshop dengan tema pemberdayaan diri, Hipnosis dan Hipnoterapi, Coaching, serta Psikologi. Beliau terus belajar dan meningkatkan pengetahuannya dalam bidang pengembangan diri dengan mengikuti berbagai macam seminar, pelatihan, ataupun workshop.
                    </p>
                    <p>
                        Bagi Coach Sahdani, mengajar merupakan cara untuk belajar, karena baginya sebaik-baik ilmu adalah ilmu yang dipelajari, diamalkan, dan diajarkan.
                    </p>
                    <h2>SERTIFIKASI & PENGALAMAN</h2>
                    <ul>
                        <li>Certified Hypnotist oleh Indonesian Board of Hypnotherapy</li>
                        <li>Certified Hypnotherapist oleh Indonesian Board of Hypnotherapy</li>
                        <li>Certified Professional Hypnotherapist oleh Perkumpulan Praktisi Hipnosis Hipnoterapi Indonesia (PRAHIPTI)</li>
                        {/* Tambahkan sertifikasi dan pengalaman lainnya */}
                    </ul>
                    <h2>Pendiri & Direktur</h2>
                    <ul>
                        <li>Hypnopreneur Indonesia (www.hypnopreneurindonesia.com)</li>
                        <li>Indonesia Scientific Hypnotherapy Institute (www.ishicentre.com)</li>
                        <li>HaloHipno.com (www.halohipno.com)</li>
                        <li>Yayasan Adikarya Pemuda Indonesia</li>
                        <li>PT. Sahdani Andi Mahdi</li>
                    </ul>
                    <h2>Prestasi</h2>
                    <ul>
                        <li>Ketua Dewan Putra Gerakan Pramuka SMAN 4 Watampone (2014-2015)</li>
                        <li>Ketua Satuan Karya Kalpataru Gerakan Pramuka Cabang Kabupaten Bone (2015-2017)</li>
                        {/* Tambahkan prestasi lainnya */}
                    </ul>
                </div>
            </div>
        </Layout>
    );
}

export default About;
