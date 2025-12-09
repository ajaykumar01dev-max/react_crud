const StudentCard = (props) => {
  return (
    <div className="idCard">
      <div className="cardContant">
        <div className="idCardHeader">
          <h1 className="universityTitle">Excellent University</h1>
          <h3 className="idTitle">Student ID Card</h3>
        </div>

        <div className="idCardContent">
          <div className="photoSection">
            <img src={props.img} alt="Student" className="studentPhoto" />
          </div>

          <div className="detailsSection">
            <h2 className="studentName">{props.name}</h2>
            <p className="detailItem"><strong>Reg No:</strong> {props.reg}</p>
            <p className="detailItem"><strong>Blood Group:</strong> {props.blood}</p>
            <p className="detailItem"><strong>Course:</strong> {props.course}</p>
            <p className="detailItem"><strong>Batch:</strong> {props.batch}</p>
          </div>
        </div>

        <div className="idCardFooter">
          <p className="universityLink">www.excellentuniversity.edu</p>
        </div>
      </div>
      
      <div className="actionButtons">
        <button className="editButton" onClick={props.onEdit}>Edit</button>
        <button  className="saveButton" onClick={props.onSave}>Save</button>

        <button className="deleteButton" onClick={props.onDelete}>Delete</button>
      </div>
    </div>
  );
}

export default StudentCard
