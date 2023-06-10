import Link from 'next/link';


export default function Navbar() {
  return (
    <nav className='flex justify-end fixed w-full gap-3 p-7 text-sky-500 shadow-lg bg-gradient-to-t from-red-200 to-sky-200 flex-col text-center md:flex-row '>
      <Link href="/" className='hover:text-red-400 hover:font-bold'>Inicio</Link>
      <Link href="/about" className='hover:text-red-400 hover:font-bold'>Acerca de</Link>
      <Link href="/projects" className='hover:text-red-400 hover:font-bold'>Proyectos</Link>
      <Link href="/contact" className='hover:text-red-400 hover:font-bold'>Contacto</Link>
    </nav>
  );
}
