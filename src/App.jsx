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
  const [remainingCredit, setRemainingCredit] = useState(20);
  const [price, setPrice] = useState(0);

  const handleAddToCourse = (course) => {
    let totalCredit = course.credit;
    let totalPrice = course.price

    if (selectedCourses.find((selectedCourse) => selectedCourse.id === course.id)) {
      Swal.fire(
        '',
        'You have already selected this course!',
        'info'
      );
      return;
    } else {
      selectedCourses.forEach((course) => {
        totalCredit = totalCredit + course.credit;
      });
      selectedCourses.forEach((course) => {
        totalPrice = totalPrice + course.price;
      });
      const remaining = 20 - totalCredit;

      if (totalCredit > 20) {
        Swal.fire(
          '',
          'Your maximum credit is 20! You have no permission to add this course. ',
          'error'
        );
        return;
      } else {

        const newSelectedCourse = [...selectedCourses, course];
        setSelectedCourses(newSelectedCourse);
        setTotalCredit(totalCredit);
        setRemainingCredit(remaining)
        setPrice(totalPrice);
      }
    }
  }
  // console.log(selectedCourses);

  return (
    <div className='bg-[#f3f3f3] '>
      <Header></Header>
      <div className='md:flex max-w-7xl mx-auto gap-4'>
        <Courses courses={courses} handleAddToCourse={handleAddToCourse} ></Courses>
        <SelectedCourse selectedCourses={selectedCourses} totalCredit={totalCredit} remainingCredit={remainingCredit} price={price} ></SelectedCourse>
      </div>
    </div>
  )
}

export default App
