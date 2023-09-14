import { useEffect, useState } from 'react';
import './App.css'
import Courses from './components/Courses/Courses'
import Header from './components/Header/Header'
import SelectedCourse from './components/SelectedCourse/SelectedCourse'
import Swal from 'sweetalert2';

function App() {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    fetch('./data.json')
      .then(res => res.json())
      .then(data => setCourses(data))
  }, []);

  const [selectedCourses, setSelectedCourses] = useState([]);
  const [totalCredit, setTotalCredit] = useState(0);

  const handleAddToCourse = (course, credit) => {
    const ifExist = selectedCourses.find((selectedCourse) => selectedCourse.id === course.id);

    if (ifExist) {
      Swal.fire(
        '',
        'You have already selected this course!',
        'info'
      );
      return;
    }
    const newSelectedCourse = [...selectedCourses, course];
    setSelectedCourses(newSelectedCourse);
    const newTotalCredit = totalCredit + credit;
    setTotalCredit(newTotalCredit);
  }
  // console.log(selectedCourses);

  return (
    <div className='bg-[#f3f3f3] '>
      <Header></Header>
      <div className='md:flex max-w-7xl mx-auto gap-4'>
        <Courses courses={courses} handleAddToCourse={handleAddToCourse} ></Courses>
        <SelectedCourse selectedCourses={selectedCourses} totalCredit={totalCredit} ></SelectedCourse>
      </div>
    </div>
  )
}

export default App
