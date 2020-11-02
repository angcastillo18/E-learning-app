import React from "react";
import { Link } from "react-router-dom";
export default function Footer() {
  return (
    <>
      <footer className=' bg-black px-2 py-8'>
        <div className='container mx-auto'>
          <div className='flex flex-col items-center'>
            <div className='my-3'>
              <h3 className='text-yellow-500 font-bold text-3xl'>Mastery</h3>
            </div>
            <div className='my-2'>
              <ul className='text-white text-center'>
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
          <p className='text-white text-center text-xs my-4'>
            © 2020, Mastery por Angelo Castillo. Todos los derechos reservados.
          </p>
        </div>
      </footer>
    </>
  );
}
