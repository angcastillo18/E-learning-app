import React, { useEffect, useState } from "react";
import { getAllCourses } from "../api/index";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faThumbsUp } from "@fortawesome/free-solid-svg-icons";
import Skeleton from "react-loading-skeleton";
import {
  Link,
  useRouteMatch,
  Switch,
  Route,
  useParams,
} from "react-router-dom";
export default function Courses() {
  const [courses, setcourses] = useState([]);
  const [search, setsearch] = useState("");
  const [filteredCourses, setfilteredCourses] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedCourse, setSelectedCourse] = useState({});
  //*nesting router
  let { path, url } = useRouteMatch();
  //*component skeleton
  const loader = () => {
    return (
      <div className='container mx-auto py-6'>
        <div className='my-2 flex '>
          <div className='w-1/3 mr-2'>
            <Skeleton height={140} />
          </div>
          <div className='w-2/3'>
            <Skeleton height={140} />
          </div>
        </div>
        <div className='my-2 flex '>
          <div className='w-1/3 mr-2'>
            <Skeleton height={140} />
          </div>
          <div className='w-2/3'>
            <Skeleton height={140} />
          </div>
        </div>
        <div className='my-2 flex '>
          <div className='w-1/3 mr-2'>
            <Skeleton height={140} />
          </div>
          <div className='w-2/3'>
            <Skeleton height={140} />
          </div>
        </div>
        <div className='my-2 flex '>
          <div className='w-1/3 mr-2'>
            <Skeleton height={140} />
          </div>
          <div className='w-2/3'>
            <Skeleton height={140} />
          </div>
        </div>
        <div className='my-2 flex '>
          <div className='w-1/3 mr-2'>
            <Skeleton height={140} />
          </div>
          <div className='w-2/3'>
            <Skeleton height={140} />
          </div>
        </div>
        <div className='my-2 flex '>
          <div className='w-1/3 mr-2'>
            <Skeleton height={140} />
          </div>
          <div className='w-2/3'>
            <Skeleton height={140} />
          </div>
        </div>
      </div>
    );
  };
  //*first call to DB
  useEffect(() => {
    const fetchApi = async () => {
      const allCourses = await getAllCourses();
      setcourses(allCourses);
      setLoading(false);
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
  const cardCourses = filteredCourses.map((course, index) => {
    return (
      <Link
        key={course.id}
        className='my-3 mx-3  overflow-y-auto rounded-lg shadow-xl flex flex-col sm:flex-row bg-white items-stretch'
        to={`${url}/${index + 1}`}
        onClick={() => {
          setSelectedCourse(course);
        }}
      >
        <div className='w-full  sm:w-1/3'>
          <img src={course.img} alt={course.title} className='w-full h-full' />
        </div>
        <div className='my-4 px-3 w-full sm:w-2/3 flex flex-col justify-center '>
          <h4 className='text-lg text-yellow-500 font-bold'>{course.title}</h4>
          <p className='text-gray-600 sm:w-3/4 mx-auto'>{course.description}</p>
          <div className='w-full flex flex-row justify-between px-2 py-1'>
            <span>
              <FontAwesomeIcon
                className='mr-1 text-blue-700'
                icon={faThumbsUp}
              />
              {course.score} %
            </span>
            <h4 className='text-blue-600'>Autor : {course.autor}</h4>
          </div>
        </div>
      </Link>
    );
  });
  //*all
  const contentCourses = (
    <div className='container mx-auto'>
      <div className='flex flex-col items-center py-6'>
        <h3 className='text-3xl'>Explorar Cursos</h3>
        <input
          className='my-4 shadow appearance-none border rounded w-5/6 sm:w-2/5 lg:w-1/3  py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline lg:text-lg lg:py-3'
          type='text'
          name='search'
          placeholder='search'
          id='search'
          onChange={(e) => setsearch(e.target.value)}
        />
      </div>

      {loading ? (
        loader()
      ) : (
        <div className='flex-col flex items-center pb-4'>{cardCourses}</div>
      )}
    </div>
  );
  return (
    <div className='bg-gray-500'>
      <Switch>
        <Route exact path={path}>
          {contentCourses}
        </Route>
        <Route path={`${path}/:courseId`}>
          <div className='container mx-auto py-10 text-center'>
            <div className='mx-3  overflow-y-auto rounded-lg shadow-xl flex flex-col sm:flex-row bg-white items-stretch'>
              <div className='w-full  sm:w-1/3'>
                <img
                  src={selectedCourse.img}
                  alt={selectedCourse.title}
                  className='w-full h-full'
                />
              </div>
              <div className='my-4 px-3 w-full sm:w-2/3 flex flex-col justify-around '>
                <h4 className='text-lg text-yellow-500 font-bold'>
                  {selectedCourse.title}
                </h4>
                <p className='text-gray-600 sm:w-3/4 mx-auto'>
                  {selectedCourse.description}
                </p>
                <div className='w-full flex flex-row justify-between px-2 py-1'>
                  <span>
                    <FontAwesomeIcon
                      className='mr-1 text-blue-700'
                      icon={faThumbsUp}
                    />
                    {selectedCourse.score} %
                  </span>
                  <h4 className='text-blue-600'>
                    Autor : {selectedCourse.autor}
                  </h4>
                </div>
              </div>
            </div>
            <button className='p-4 my-6 mx-auto w-3/4 sm:w-2/5 rounded-full bg-yellow-500  text-center text-base lg:text-lg xl:text-xl font-bold leading-snug text-black hover:opacity-75'>
              Comprar
            </button>
          </div>
        </Route>
      </Switch>
    </div>
  );
}
