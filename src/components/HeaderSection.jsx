import StudentCard from './StudentCard'

const HeaderSection = ({onOpen}) => {

  return (
    <div className='headerSection'>
      <div className="left">
        <h1>Excellent University</h1>
        <p>List Of Student</p>
      </div>
      <button className='btn' onClick={onOpen}>Add New</button>
    </div>
  )
}

export default HeaderSection