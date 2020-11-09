import React from "react";
import { useForm } from "react-hook-form";
export default function Login() {
  const { register, handleSubmit, errors, reset } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    reset();
  };

  return (
    <div className='flex justify-center items-center bg-gradient-to-r from-gray-500 to-gray-800'>
      <div className='w-full max-w-md px-2 my-8 lg:my-20'>
        <h3 className='text-2xl font-bold text-center my-6 text-white lg:text-3xl'>
          <span className='text-yellow-500'>L</span>ogin
        </h3>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className='bg-white shadow-md rounded px-8 py-8 my-4'
        >
          <div className='mb-4'>
            <label
              htmlFor='email'
              className='block text-gray-700 text-sm font-bold mb-2 md:text-base'
            >
              Correo
            </label>
            <input
              type='text'
              className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline lg:text-lg lg:py-3 
              ${errors.email ? "border-red-500 focus:shadow-none" : ""} `}
              id='email'
              placeholder='Ingrese su correo...'
              ref={register({
                required: true,
                pattern: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g,
              })}
              name='email'
            />
            {errors.email && errors.email.type === "required" && (
              <p className='text-red-600 text-sm my-1'>Email requerido</p>
            )}
            {errors.email && errors.email.type === "pattern" && (
              <p className='text-red-600 text-sm my-1'>Email inválido</p>
            )}
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
              className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline lg:text-lg lg:py-3 
              ${errors.password ? "border-red-500 focus:shadow-none" : ""} `}
              id='password'
              placeholder='Ingrese su contraseña..'
              ref={register({ required: true, minLength: 6 })}
              name='password'
            />
            {errors.password && errors.password.type === "required" && (
              <p className='text-red-600 text-sm my-1'>Contraseña requerida</p>
            )}
            {errors.password && errors.password.type === "minLength" && (
              <p className='text-red-600 text-sm my-1'>Mínimo 6 caracteres</p>
            )}
          </div>
          <div className='flex items-center justify-between'>
            <button
              className='bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline'
              type='submit'
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
