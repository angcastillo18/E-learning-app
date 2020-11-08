import React from "react";
import { ReactComponent as DeveloperSvg } from "../assets/img/developer.svg";
import { Link } from "react-router-dom";
export default function Banner() {
  return (
    <>
      <main className='px-2 py-4 lg:py-8'>
        <div className='text-center flex flex-col items-center mx-auto md:flex-row md:my-10 md:w-11/12 lg:container'>
          <div className='w-10/12 flex flex-col items-center my-4 sm:w-9/12 md:w-2/4'>
            <h2 className='text-3xl font-bold my-4 lg:my-8 xl:text-4xl'>
              La plataforma de aprendizaje para desarrolladores
            </h2>
            <Link
              className='p-3 my-4 w-2/4 rounded-full bg-yellow-500  text-center text-base lg:text-lg xl:text-xl font-bold leading-snug text-black hover:opacity-75'
              to='/login'
            >
              Iniciar Sesión
            </Link>
          </div>
          <div className='mb-4 w-10/12 sm:w-4/6 md:w-2/4'>
            <DeveloperSvg className='w-full h-auto' />
          </div>
        </div>
        <div className='my-4'>
          <p className='text-center lg:text-lg'>
            Únete hoy a más de 400,000 estudiantes
          </p>
        </div>
      </main>
    </>
  );
}
