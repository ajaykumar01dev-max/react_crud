import './App.css'
import StudentCard from './components/StudentCard'
import StudentImage from "./assets/image.jpg";
import HeaderSection from './components/HeaderSection';
import { useState } from 'react';
import FormAdd from './components/FormAdd';
function App() {
  // const [students, setStudents] = useState([]);
  const [showAddForm, setShowAddForm] = useState(false);

  function onOpen() {
    if (!showAddForm) {
      setShowAddForm(true);
      // alert("Form to add student opened");
    }
  }
  function onClose() {
    setShowAddForm(false);
  }

  const students = [
    {
      name: "kumar Kumar",
      reg: "21303313036",
      blood: "A+",
      course: "M.Tech",
      batch: "2024-28",
      img: StudentImage
    },
    {
      name: "Rahul Sharma",
      reg: "21303313037",
      blood: "B+",
      course: "M.Tech",
      batch: "2024-28",
      img: StudentImage
    },
    {
      name: "Neha Singh",
      reg: "21303313038",
      blood: "O+",
      course: "M.Tech",
      batch: "2024-28",
      img: StudentImage
    },
    {
      name: "Vikram Yadav",
      reg: "21303313039",
      blood: "AB+",
      course: "M.Tech",
      batch: "2024-28",
      img: StudentImage
    },
    {
      name: "Pooja Patel",
      reg: "21303313040",
      blood: "A-",
      course: "M.Tech",
      batch: "2024-28",
      img: StudentImage
    }
  ];

  return (
    <>
      <div className='card_container'>
        <HeaderSection onOpen={onOpen} />
        {students.map((student, index) => (
          <div key={index}>
            <StudentCard
              name={student.name}
              reg={student.reg}
              blood={student.blood}
              course={student.course}
              batch={student.batch}
              img={student.img}
            />
          </div>
        ))}
        {showAddForm &&
          <div className='popUpWindo'>
            <FormAdd onClose={onClose} />
          </div>}
      </div>
    </>
  )
}

export default App
