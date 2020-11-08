import React from "react";
import { ReactComponent as LearningOne } from "../assets/img/learning-1.svg";
/* import { ReactComponent as LearningTwo } from "../assets/img/learning-2.svg";
import { ReactComponent as LearningThree } from "../assets/img/learning-3.svg"; */

export default function HowWork() {
  return (
    <>
      <section className='px-2 py-8 bg-gray-300'>
        <div className='my-6'>
          <h3 className='text-center text-2xl font-bold lg:text-3xl'>
            Así funciona Mastery
          </h3>
        </div>
        <div className='container mx-auto  flex flex-col items-center justify-evenly my-4 sm:flex-row sm:flex-wrap sm:items-stretch lg:my-8'>
          <div className='w-2/3 my-8  flex flex-col justify-evenly sm:w-2/5 md:w-1/3 md:px-4'>
            <LearningOne className='w-3/5 h-auto mx-auto my-4' />
            <h4 className='text-center text-lg font-bold my-3'>
              Aprende desde cero
            </h4>
            <p className='text-center mx-auto lg:w-9/12'>
              Programar no tiene que ser tan dificil. Aprende los fundamentos
              desde cero y obtén una base sólida.
            </p>
          </div>
          <div className='w-2/3 my-8  flex flex-col justify-evenly sm:w-2/5 md:w-1/3 md:px-4'>
            <LearningOne className='w-3/5 h-auto mx-auto my-4' />
            <h4 className='text-center text-lg font-bold my-3'>
              Aprende desde cero
            </h4>
            <p className='text-center mx-auto lg:w-9/12'>
              Programar no tiene que ser tan dificil. Aprende los fundamentos
              desde cero y obtén una base sólida.
            </p>
          </div>
          <div className='w-2/3 my-8 flex flex-col justify-evenly sm:w-2/5 md:w-1/3 md:px-4'>
            <LearningOne className='w-3/5 h-auto mx-auto my-4 ' />
            <h4 className='text-center text-lg font-bold my-3'>
              Aprende desde cero
            </h4>
            <p className='text-center mx-auto lg:w-9/12'>
              Programar no tiene que ser tan dificil. Aprende los fundamentos
              desde cero y obtén una base sólida.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
