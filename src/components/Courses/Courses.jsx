import Course from '../Course/Course';
import PropTypes from 'prop-types';

const Courses = ({ courses, handleAddToCourse }) => {
    return (
        <div className='grid grid-cols-1 xl:grid-cols-3 mx-auto place-items-center gap-6 py-8'>
            {
                courses.map(course => <Course key={course.id} course={course} handleAddToCourse={handleAddToCourse} ></Course>)
            }
        </div>
    );
};

Courses.propTypes = {
    courses: PropTypes.array.isRequired,
    handleAddToCourse: PropTypes.func.isRequired
};

export default Courses;