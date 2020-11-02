import React from "react";
import { ReactComponent as LearningOne } from "../assets/img/learning-1.svg";
import { ReactComponent as LearningTwo } from "../assets/img/learning-2.svg";
import { ReactComponent as LearningThree } from "../assets/img/learning-3.svg";

export default function HowWork() {
  return (
    <>
      <section className='px-2 py-8 bg-gray-300'>
        <div className='my-6'>
          <h3 className='text-center text-2xl font-bold'>
            Así funciona Mastery
          </h3>
        </div>
        <div className='flex flex-col items-center'>
          <div className='w-2/3 my-8'>
            <LearningOne className='w-2/3 h-auto mx-auto' />
            <h4 className='text-center text-lg font-bold my-3'>
              Aprende desde cero
            </h4>
            <p className='text-center'>
              Programar no tiene que ser tan dificil. Aprende los fundamentos
              desde cero y obtén una base sólida.
            </p>
          </div>
          <div className='w-2/3 my-8'>
            <LearningTwo className='w-2/3 h-auto mx-auto' />
            <h4 className='text-center text-lg font-bold my-3'>
              Aprende desde cero
            </h4>
            <p className='text-center'>
              Programar no tiene que ser tan dificil. Aprende los fundamentos
              desde cero y obtén una base sólida.
            </p>
          </div>
          <div className='w-2/3 my-8'>
            <LearningThree className='w-2/3 h-auto mx-auto' />
            <h4 className='text-center text-lg font-bold my-3'>
              Aprende desde cero
            </h4>
            <p className='text-center'>
              Programar no tiene que ser tan dificil. Aprende los fundamentos
              desde cero y obtén una base sólida.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
