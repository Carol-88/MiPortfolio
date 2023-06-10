import '@/globals.css';
import Layout from '@/components/Layout';
import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <Layout pageTitle="Mi Portfolio" description="Portfolio de Carolina Romero, desarrolladora web con las tecnologías JavaScript, React, Next.js, HTML, CSS, TailwindCSS">
   
       
        <div className="flex flex-col justify-center items-center h-screen bg-gradient-to-b from-pink-200 to-orange-300">
          <h1 className='text-4xl text-red-400'>Carolina Romero</h1>
          <p className="text-orange-500 text-2xl pb-5">¡Aquí puedes encontrar mis proyectos y más información sobre mí!</p>
          <Link href="/about">
            <Image src="/img/avatar.jpg" width={300} height={200} alt='Avatar' className='rounded-full ring-4 ring-red-400'/>
          </Link>
        </div>
      
    </Layout>
  );
}
