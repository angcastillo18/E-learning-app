import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useHistory } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";
import { HashLoader } from "react-spinners";

export default function Register() {
  const { register, watch, handleSubmit, errors, reset } = useForm();
  const watchPassword = watch("password", "");
  const { signup } = useAuth();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const history = useHistory();
  //*handlesubmit event
  const onSubmit = async (data, e) => {
    console.log(data.email);
    //*Register with firebase,async event
    try {
      setLoading(true);
      const result = await signup(data.email, data.password);
      //*update displayName
      result.user.updateProfile({ displayName: data.name });
      history.push("/user/mycourses");
    } catch (error) {
      //console.log("failed to create an acount");
      setError(error.message);
      /* console.log(error); */
    }
    setLoading(false);
    /* e.target.reset(); */
    reset();
  };
  return (
    <div className='flex justify-center items-center bg-gradient-to-r from-gray-500 to-gray-800'>
      <div className='w-full max-w-md px-2 my-8 lg:my-20'>
        <h3 className='text-2xl font-bold text-center my-6 text-white lg:text-3xl'>
          <span className='text-yellow-500'>R</span>egister
        </h3>
        {/*show alert when exist error*/}
        {error && (
          <div
            className='text-white px-6 py-4 border-0 rounded relative mb-4 bg-red-400'
            role='alert'
          >
            <span className='inline-block align-middle mr-8'>{error}</span>
            <button
              className='absolute bg-transparent text-2xl font-semibold leading-none right-0 top-0 mt-4 mr-6 outline-none focus:outline-none'
              onClick={() => setError("")}
            >
              <span>×</span>
            </button>
          </div>
        )}
        <form
          className='bg-white shadow-md rounded px-8 py-8 my-4'
          onSubmit={handleSubmit(onSubmit)}
        >
          <div className='mb-4'>
            <label
              htmlFor='name'
              className='block text-gray-700 text-sm font-bold mb-2 md:text-base'
            >
              Nombre
            </label>
            <input
              type='text'
              className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline lg:text-lg lg:py-3 
              ${errors.name ? "border-red-500 focus:shadow-none" : ""} `}
              id='name'
              name='name'
              placeholder='Ingrese su nombre...'
              ref={register({
                required: true,
              })}
            />
            {errors.name && errors.name.type === "required" && (
              <p className='text-red-600 text-sm my-1'>Nombre requerido</p>
            )}
          </div>
          <div className='mb-6'>
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
              name='email'
              ref={register({
                required: true,
                pattern: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g,
              })}
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
          <div className='mb-6'>
            <label
              htmlFor='confirmPassword'
              className='block text-gray-700 text-sm font-bold mb-2 md:text-base'
            >
              Confirmar contraseña
            </label>
            <input
              type='password'
              className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline lg:text-lg lg:py-3 
              ${
                errors.confirmPassword ? "border-red-500 focus:shadow-none" : ""
              } `}
              id='confirmPassword'
              placeholder='Ingrese su contraseña..'
              name='confirmPassword'
              ref={register({
                required: true,
                validate: (value) => value === watchPassword,
              })}
            />
            {errors.confirmPassword &&
              errors.confirmPassword.type === "required" && (
                <p className='text-red-600 text-sm my-1'>
                  Contraseña requerida
                </p>
              )}
            {errors.confirmPassword &&
              errors.confirmPassword.type === "validate" && (
                <p className='text-red-600 text-sm my-1'>
                  Contraseña no coincide
                </p>
              )}
          </div>
          <div className='flex items-center justify-between'>
            <button
              className='bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline'
              type='submit'
              disabled={loading}
            >
              Registrarme
            </button>
            <Link
              className='inline-block align-baseline font-bold text-sm text-right text-yellow-500 hover:text-yellow-800'
              to='/login'
            >
              Ya tienes una cuenta?
            </Link>
          </div>
          <div className='flex justify-center my-3'>
            <HashLoader loading={loading} color={"#2A4365"} />
          </div>
        </form>
      </div>
    </div>
  );
}
