
import PropTypes from 'prop-types';

const SelectedCourse = ({ selectedCourses, totalCredit, remainingCredit, price }) => {
    console.log(selectedCourses);
    return (
        <div className='card w-[300px] h-fit my-8 bg-[#fff] shadow-xl p-6 space-y-4 rounded-xl p'>
            <h1 className='text-lg text-[#2F80ED] font-bold '>Credit Hour Remaining {remainingCredit} hr</h1>
            <div className="divider"></div>
            <h3 className='text-xl font-bold'>Course Name</h3>
            {
                selectedCourses.map((course, index) => <li className='list-decimal' key={index}>{course.name} </li>)

            }
            <div className="divider"></div>
            <h5 className='text-base font-medium'>Total Credit Hour : {totalCredit} </h5>
            <h5 className='text-base font-medium'>Total Price : {price} USD</h5>
        </div>
    );
};

SelectedCourse.propTypes = {
    selectedCourses: PropTypes.array.isRequired,
    totalCredit: PropTypes.number,
    remainingCredit: PropTypes.number,
    price: PropTypes.number
};

export default SelectedCourse;