import React from "react";
import { useForm } from "react-hook-form";
export default function Login() {
  return (
    <div className='flex justify-center items-center bg-gradient-to-r from-gray-500 to-gray-800'>
      <div className='w-full max-w-md px-2 my-8 lg:my-20'>
        <h3 className='text-2xl font-bold text-center my-6 text-white lg:text-3xl'>
          <span className='text-yellow-500'>L</span>ogin
        </h3>
        <form action='' className='bg-white shadow-md rounded px-8 py-8 my-4'>
          <div className='mb-4'>
            <label
              htmlFor='email'
              className='block text-gray-700 text-sm font-bold mb-2 md:text-base'
            >
              Correo
            </label>
            <input
              type='text'
              className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline lg:text-lg lg:py-3'
              id='email'
              placeholder='Ingrese su correo...'
            />
          </div>
          <div className='mb-6'>
            <label
              htmlFor='password'
              className='block text-gray-700 text-sm font-bold mb-2 md:text-base'
            >
              Contraseña
            </label>
            <input
              type='password'
              className='shadow appearance-none border  rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline lg:text-lg lg:py-3'
              id='password'
              placeholder='Ingrese su contraseña..'
            />
          </div>
          <div className='flex items-center justify-between'>
            <button
              className='bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline'
              type='button'
            >
              Ingresar
            </button>
            <a
              className='inline-block align-baseline font-bold text-sm text-right text-yellow-500 hover:text-yellow-800'
              href='#f'
            >
              Olvidasté tu contraseña?
            </a>
          </div>
        </form>
      </div>
    </div>
  );
}
