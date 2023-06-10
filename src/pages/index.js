import '@/globals.css';
import Layout from '@/components/Layout';

export default function Home() {
  return (
    <Layout pageTitle="Mi Portfolio" description="Portfolio de Carolina Romero, desarrolladora web con las tecnologías JavaScript, React, Next.js, HTML, CSS, TailwindCSS">
       <div className=" bg-cover bg-no-repeat bg-center h-screen" style={{ backgroundImage: "url('/img/backgroundpink.jpg')" }}>
        <h1 className=''>Bienvenido a mi Portfolio</h1>
        <p>¡Aquí puedes encontrar mis proyectos y más información sobre mí!</p>
      </div>
    </Layout>
  );
}

