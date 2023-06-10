import '@/globals.css';
import Layout from '@/components/Layout';
import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <Layout pageTitle="Mi Portfolio" description="Portfolio de Carolina Romero, desarrolladora web con las tecnologías JavaScript, React, Next.js, HTML, CSS, TailwindCSS">
   
       
        <div className="flex flex-col gap-5 justify-center items-center h-screen bg-gradient-to-b from-pink-200 to-orange-300">
          <h1 className='text-1xl md:text-4xl mt-10 md:mt-0 text-red-400 p-4 md:p-2 hover:uppercase font-bold'>Carolina Romero</h1>
          <ul className="flex flex-row gap-3 text-orange-500 text-md md:text-2xl text-center m-2">
              <li>HTML</li>
              <li>CSS</li>
              <li>JavaScript</li>
              <li>React</li>
              <li>Next.js</li>
              <li>TailwindCSS</li>
          </ul>
          <Link href="/about">
            <Image src="/img/Avatar.jpg" width={200} height={200} alt='Avatar' className='rounded-full shadow-lg md:w-80 pt-5'/>
          </Link>
        </div>
      
    </Layout>
  );
}
