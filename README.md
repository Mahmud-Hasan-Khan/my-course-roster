# My-Course-Roster
 A Simple React Application, where user can select maximum 20 credit course from 9 curses available.

## Project features
-   Fake data used for data base
-   User can't select same course at a time, if user attempt to select same course again then app show error message.
- Maximum curse credit is 20, if user select any course then selected course credit will show, course credit will be increase if another course is selected.
-   when selected course credit is  not more than 20, when it more than 20 then a error message show & user can't add more than 20 credit.
- Used Technology React with Vite.

## Discussion about how I have managed the state in my assignment project.
I have used 5 useState & 1 useEffect in this assignment project.
    
-  useEffect use for handle side effect as data load from fake data named "data.json" and sets it as the courses state.

-  const [selectedCourses, setSelectedCourses] = useState([]); 
    - This line initializes a state variable called selectedCourses as an empty array using the useState hook. This state will store the courses that the user has selected.


-  const [totalCredit, setTotalCredit] = useState(0);
     - This line initializes a state variable called totalCredit with an initial value of 0. This state will store the total credit hours of the selected courses.

- const [remainingCredit, setRemainingCredit] = useState(20);
    - This line initializes a state variable called remainingCredit with an initial value of 20. This state represents the remaining credit hours that the user can select.
    
- const [price, setPrice] = useState(0);
    - This line initializes a state variable called price with an initial value of 0. This state will store the total price of the selected courses. 

Finally The state of selected courses, checks for duplicates, and ensures that the total credit hours and price stay within specified limits. It provides feedback to the user through Swal (SweetAlert) pop-up messages in case of errors or duplicate selections. 

## Live Site Link
- [Click Here to Open Live Site](https://65051a439d357c4c8e0d9dc9--velvety-seahorse-93366b.netlify.app/)

## Screenshots
![App Screenshot](https://i.ibb.co/jMNgFnB/my-course-roster-1.png)