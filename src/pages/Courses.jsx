import React, { useEffect, useState } from "react";
import { getAllCourses } from "../api/index";
export default function Courses() {
  const [courses, setcourses] = useState([]);
  const [search, setsearch] = useState("");
  const [filteredCourses, setfilteredCourses] = useState([]);
  //*first call to DB
  useEffect(() => {
    const fetchApi = async () => {
      const allCourses = await getAllCourses();
      setcourses(allCourses);
    };
    fetchApi();
  }, []);
  //*call only when the values change of search
  useEffect(() => {
    setfilteredCourses(
      courses.filter((course) => {
        return course.title.toLowerCase().includes(search.toLowerCase());
      })
    );
  }, [search, courses]);

  //*Card Courses
  const cardCourses = filteredCourses.map((course) => {
    return (
      <button
        key={course.id}
        className='my-3 mx-3 border border-gray-700 overflow-y-auto rounded-lg shadow-lg flex'
      >
        <img src={course.img} alt={course.title} />
        <div>
          <h4>{course.title}</h4>
          <p>{course.description}</p>
          <span>{course.score}</span>
          <h4>{course.autor}</h4>
        </div>
      </button>
    );
  });
  return (
    <div>
      <div>
        <div>
          <h3>Explorar Cursos</h3>
          <input
            type='text'
            name='search'
            placeholder='search'
            id='search'
            onChange={(e) => setsearch(e.target.value)}
          />
        </div>

        {cardCourses}
      </div>
    </div>
  );
}
