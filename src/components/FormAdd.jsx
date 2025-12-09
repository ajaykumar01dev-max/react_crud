
const FormAdd = ({ onClose }) => {

    const handleFileChange = (event) => {
        const file = event.target.files[0];
        console.log("Selected file:", file);
    };

    const handleSubmit = () => {
        alert("Form submitted!");
    };

    return (

        <form action="" onSubmit={handleSubmit} method="post" className="form">
            <h1 className="formTitle">Add Student</h1>

            <div className="formContainer">

                <div className="formGroup">
                    <label htmlFor="name" className="formLabel">Name:</label>
                    <input type="text" id="name" name="name" className="formInput" required />
                </div>

                <div className="formGroup">
                    <label htmlFor="registrationNo" className="formLabel">Registration No:</label>
                    <input type="text" id="registrationNo" name="registrationNo" className="formInput" required />
                </div>

                <div className="formGroup">
                    <label htmlFor="bloodGroup" className="formLabel">Blood Group:</label>
                    <input type="text" id="bloodGroup" name="bloodGroup" className="formInput" required />
                </div>

                <div className="formGroup">
                    <label htmlFor="course" className="formLabel">Course:</label>
                    <input type="text" id="course" name="course" className="formInput" required />
                </div>

                <div className="formGroup">
                    <label htmlFor="batch" className="formLabel">Batch:</label>
                    <input type="text" id="batch" name="batch" className="formInput" required />
                </div>

                <div className="formGroup">
                    <label htmlFor="imageUrl" className="formLabel">Image URL:</label>
                    <input type="file" accept="image/*" onChange={handleFileChange} id="imageUrl" name="imageUrl" className="formInput" required />
                </div>

                <div className="formButtonGroup">
                    <button type="submit" className="btn addBtn">Add Student</button>
                    <button className="btn closeBtn" onClick={onClose}>Close</button>
                </div>

            </div>
        </form>
    )
}

export default FormAdd