import React from "react";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faTimes,
  faGraduationCap,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

export default function NavBar() {
  const [navbarOpen, setNavbarOpen] = useState(false);
  return (
    <>
      <nav className='relative flex flex-wrap items-center justify-between px-2 py-3 navbar-expand-lg bg-white  shadow '>
        <div className='container px-4 mx-auto flex flex-wrap items-center justify-between'>
          <div className='w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start'>
            <Link
              className='text-xl md:text-2xl xl:text-3xl font-bold leading-relaxed inline-block mr-4 py-2 whitespace-no-wrap uppercase text-black'
              to='/'
            >
              <FontAwesomeIcon
                className='mr-2 text-yellow-500'
                icon={faGraduationCap}
              />
              Mastery
            </Link>
            <button
              className='text-black cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none'
              type='button'
              onClick={() => setNavbarOpen(!navbarOpen)}
            >
              {!navbarOpen ? (
                <FontAwesomeIcon icon={faBars} />
              ) : (
                <FontAwesomeIcon icon={faTimes} />
              )}
            </button>
          </div>

          <div
            className={
              "lg:flex flex-grow items-center " +
              (navbarOpen ? " flex" : " hidden")
            }
            id='example-navbar-danger'
          >
            <ul className='flex flex-col lg:flex-row list-none lg:ml-auto'>
              <li className='nav-item ml-4 lg:m-2 flex items-center'>
                <Link
                  className='py-2 lg:py-1 xl:text-xl text-base  font-bold leading-snug  text-black hover:opacity-75'
                  to='/'
                >
                  <span className=''>Inicio</span>
                </Link>
              </li>
              <li className='nav-item ml-4 lg:m-2 flex items-center'>
                <Link
                  className='py-2 lg:py-1 xl:text-xl text-base font-bold leading-snug  text-black hover:opacity-75'
                  to='/courses'
                >
                  <span className=''>Cursos</span>
                </Link>
              </li>
              <li className='nav-item m-2'>
                <Link
                  className='py-2  px-3 lg:py-1 xl:text-lg xl:py-2  rounded-full bg-white border-yellow-500 border-2 flex items-center justify-center text-base font-bold leading-snug text-white hover:opacity-75'
                  to='/register'
                >
                  <span className='text-black'>Crear cuenta</span>
                </Link>
              </li>
              <li className='nav-item m-2'>
                <Link
                  className=' py-2 px-4 lg:py-1 xl:text-lg xl:py-2 rounded-full bg-black flex items-center justify-center text-base font-bold leading-snug text-white hover:opacity-75'
                  to='/login'
                >
                  <span className='text-yellow-500'>Iniciar Sesión</span>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
