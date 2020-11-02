import React from "react";
import { Link } from "react-router-dom";
export default function KnowMore() {
  return (
    <>
      <section className='px-2 py-8 bg-blue-900 text-white'>
        <div>
          <h3 className='text-2xl font-bold text-center my-4'>
            Conocé más de nuestros contenidos
          </h3>
          <Link
            className='w-1/2 mx-auto my-6 py-2 rounded-full bg-blue-900 border-white border-2 flex items-center justify-center text-base font-bold leading-snug text-white hover:opacity-75'
            to='/courses'
          >
            Explorar Cursos
          </Link>
        </div>
      </section>
    </>
  );
}
