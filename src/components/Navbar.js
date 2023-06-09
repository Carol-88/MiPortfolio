import Link from 'next/link';


export default function Navbar() {
  return (
    <nav className='flex justify-end gap-3 p-5 mr-3 bg-sky-700 text-cyan-100'>
      <Link href="/" className='hover:text-green-400'>Inicio</Link>
      <Link href="/about" className='hover:text-green-400'>Acerca de</Link>
      <Link href="/projects" className='hover:text-green-400'>Proyectos</Link>
      <Link href="/contact" className='hover:text-green-400'>Contacto</Link>
    </nav>
  );
}
