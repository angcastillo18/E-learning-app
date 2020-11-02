import React from "react";
import backgroundStudents from "../assets/img/students.jpg";

export default function Testimonials() {
  return (
    <>
      <section
        className=' bg-center bg-no-repeat bg-cover px-2 py-8 text-white '
        style={{ backgroundImage: `url(${backgroundStudents})` }}
      >
        <div>
          <div className='w-3/4 mx-auto my-4'>
            <h3 className=' text-2xl font-bold text-center'>
              Qué dicen nuestros estudiantes{" "}
              <span className='text-yellow-500'>?</span>
            </h3>
            <p className='my-6 text-justify font-bold'>
              "Estoy muy satisfecho con el curso y feliz con las habilidades de
              los profesores. Como persona, puedo aburrirme fácilmente, pero no
              me aburrí durante el curso. "<br /> “Realmente me encantó el
              curso. Será muy útil para mi docencia. Como profesora de
              programación, mejoré mis conocimientos de metodología. Amplié mis
              conocimientos sobre el sistema educativo y la respuesta a mis
              dudas fue inmediata."
            </p>
            <p className='text-right'>
              Joni De Mol, Belgium,
              <span className='text-yellow-500'> Software Developer </span>
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
