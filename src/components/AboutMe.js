import React from 'react'
import Link from 'next/link'

function AboutMe() {
  return (
    <section className='flex flex-col justify-center items-center h-screen p-5'>
    <h2 className='text-red-400 text-md font-bold'>¿Quién soy?🙋‍♀️</h2>
    <p className='text-sky-700 m-2'>
      Una persona que ha decidido dar un cambio radical laboral, me decidí por estudiar un bootcamp de desarrollo web fullstack para adentrarme en el mundo IT. 
      Aprendí tecnologías como HTML, CSS, JAVASCRIPT, REACT, NODE y el manejo de versiones con GIT y GITHUB. 
      Desarrollé soft skills como trabajo en equipo, comunicación efectiva y continua, empatía hacia mis compañeros tanto personal como técnica, respeto a los roles, iniciativa y proactividad.
      Me encanta la programación web, sobre todo el stack frontend, y más aún el diseño y la maquetación web. Lo paso bien trabajando en equipo, haciendo pair programming, celebrando éxitos de compañeros o propios, me gustan los retos, buscar como solucionar los problemas, pero no tengo ningún reparo en pedir ayuda y reconocer mis limitaciones.
    </p>

    <h2 className='text-red-400 text-md font-bold'>¿Qué estoy haciendo ahora?🤓👩‍💻</h2> 
    <p className='text-sky-700 m-2'>
      Ahora mismo, sigo en formación continua gracias a la Boost Academy, un programa de mi academia, donde después de obtener el certificado, nos proporcionan charlas con empresas para mejorar nuestra empleabilidad, y talleres técnicos, tanto de nuevas tecnologías, como de repaso de las aprendidas en el bootcamp. En estos talleres he podido acercarme al TESTING con JEST, NEXT.js (framework de React), TailwindCSS, FIGMA, TYPESCRIPT..
      También he aprendido sobre metodologías agiles como SCRUM y XTREME PROGRAMMING.
    </p>

    <p className='text-sky-700 m-2'>
      Soy Ambassador en la comunidad de Discord de Hack a Boss, en este rol, estoy liderando un proyecto colaborativo, una aplicación web para estudiar lenguajes de programación basado en flashcards, con un equipo de compañeros desarrollando tanto en la parte de cliente con Next.js y TailwindCSS, como en servidor con Node, Express, y MySQL.
      También participo en la comunidad de desarrolladores, creando contenido formativo en mi newsletter de LinkedIn, donde repaso conceptos, hago acercamientos a tecnologías y propongo ejercicios para aumentar la experiencia y visibilidad de mis seguidores.
    </p>

    <h2 className='text-red-400 text-md font-bold'>¿Qué estoy buscando?🤝</h2>
    <p className='text-sky-700 m-2'>
    Mi primera oportunidad como desarrolladora web, busco empresas donde encaje en su cultura, colaborativas, centradas en el aprendizaje y la mejora continua, con proyectos donde pueda aprender y aportar, y en equipos donde se fomente la cohesión entre compañeros, con un buen onboarding para poder ser productiva lo antes posible.
    </p>

    <h2 className='text-red-400 text-md font-bold'>¿Quieres saber más?🤩</h2>
  
    <p className='text-sky-700 m-2'>
      Tanto si quieres colaborar en algún proyecto, en la newsletter, o como empresa. Estoy dispuesta siempre a aprender y colaborar, y estoy deseando poder empezar mi camino en IT.
    </p>
    <Link href="./contact" className='text-green-600 hover:text-lg hover:text-red-400 font-bold'>¡Contacta conmigo!</Link>
    <h2 className='text-red-400 text-md font-bold'>
     ¡Un saludo a todos ! Y gracias por llegar hasta aquí😊
    </h2>
</section>
  )
}

export default AboutMe