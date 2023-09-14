import { useEffect, useState } from 'react';
import Course from '../Course/Course';

const Courses = () => {
    const [courses, setCourses] = useState([]);

    useEffect(() => {
        fetch('./data.json')
            .then(res => res.json())
            .then(data => setCourses(data))
    }, [])

    return (
        <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 mx-auto place-items-center gap-6 py-8'>
            {
                courses.map(course => <Course key={course.id} course={course} ></Course>)
            }
        </div>
    );
};

export default Courses;