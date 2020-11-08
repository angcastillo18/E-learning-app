import React from "react";
import { Link } from "react-router-dom";
export default function Footer() {
  return (
    <>
      <footer className=' bg-black px-2 py-8'>
        <div className='container mx-auto'>
          <div className='flex flex-col items-center sm:flex-row sm:justify-between'>
            <div className='my-3 w-40'>
              <h3 className='text-yellow-500 font-bold text-3xl text-center md:text-4xl'>
                Mastery
              </h3>
            </div>
            <div className='my-2 w-40 md:my-6'>
              <ul className='text-white text-center sm:text-right md:text-lg lg:text-xl'>
                <li className='my-1'>
                  <Link to='/'>Inicio</Link>
                </li>
                <li className='my-1'>
                  <Link to='/courses'>Explorar cursos</Link>
                </li>
                <li className='my-1'>
                  <Link to='login'>Iniciar Sesión</Link>
                </li>
                <li className='my-1'>
                  <Link to='/register'>Registrarse</Link>
                </li>
              </ul>
            </div>
          </div>
          <p className='text-white text-center text-xs my-4 sm:text-sm md:text-base lg:text-lg'>
            © 2020, Mastery por Angelo Castillo. Todos los derechos reservados.
          </p>
        </div>
      </footer>
    </>
  );
}
