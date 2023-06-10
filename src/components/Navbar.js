import Link from 'next/link';


export default function Navbar() {
  return (
    <nav className='flex justify-end fixed w-full gap-3 p-7 text-cyan-100 shadow-md bg-gradient-to-r from-rose-200 to-fuchsia-300 flex-col text-center md:flex-row '>
      <Link href="/" className='hover:text-pink-400 hover:font-bold'>Inicio</Link>
      <Link href="/about" className='hover:text-pink-400 hover:font-bold'>Acerca de</Link>
      <Link href="/projects" className='hover:text-pink-400 hover:font-bold'>Proyectos</Link>
      <Link href="/contact" className='hover:text-pink-400 hover:font-bold'>Contacto</Link>
    </nav>
  );
}
