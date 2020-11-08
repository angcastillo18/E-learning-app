import React from "react";
import backgroundStudents from "../assets/img/students.jpg";

export default function Testimonials() {
  return (
    <>
      <section
        className=' bg-center bg-no-repeat bg-cover px-2 py-8 text-white lg:py-10'
        style={{ backgroundImage: `url(${backgroundStudents})` }}
      >
        <div className='container mx-auto'>
          <div className='w-3/4 mx-auto my-4 lg:w-3/5 xl:w-2/4 xl:my-8'>
            <h3 className=' text-2xl font-bold text-center md:my-6 lg:text-3xl'>
              Qué dicen nuestros estudiantes
              <span className='text-yellow-500'> ?</span>
            </h3>
            <p className='my-6 text-justify  font-bold md:text-lg lg:leading-7 xl:text-xl xl:leading-9'>
              "Estoy muy satisfecho con el curso y feliz con las habilidades de
              los profesores. Como persona, puedo aburrirme fácilmente, pero no
              me aburrí durante el curso. "<br /> “Realmente me encantó el
              curso. Será muy útil para mi docencia. Como profesora de
              programación, mejoré mis conocimientos de metodología. Amplié mis
              conocimientos sobre el sistema educativo y la respuesta a mis
              dudas fue inmediata."
            </p>
            <p className='text-right lg:text-lg'>
              Joni De Mol, Belgium,
              <span className='text-yellow-500'> Software Developer </span>
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
