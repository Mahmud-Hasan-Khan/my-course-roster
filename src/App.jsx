import './App.css'
import Courses from './components/Courses/Courses'
import Header from './components/Header/Header'
import SelectedCourse from './components/SelectedCourse/SelectedCourse'

function App() {
  return (
    <div className='bg-[#f3f3f3] '>
      <Header></Header>
      <div className='md:flex max-w-7xl mx-auto gap-4'>
        <Courses></Courses>
        <SelectedCourse></SelectedCourse>
      </div>
    </div>
  )
}

export default App
