import React, { useState } from "react";
// import "./EmpForm.css";
import './Style/EmpForm.css';

import axios from "axios";

function EmployeeForm() {
  const [formData, setFormData] = useState({
    name: "",
    age: "",
    salary: "",
    city: "",
    mobile: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await axios.post('https://employee-rpbq.onrender.com/api/emp/save',formData)
    console.log(res)
    if(!!handleSubmit){
      alert("data submitted")
    }
    // alert("Form Submitted:\n" + JSON.stringify(formData, null, 2));
  };

  return (
    <div className="form-container">
      <h2>Employee Form</h2>
      <form onSubmit={handleSubmit}>
        <label>Name:</label>
        <input
          type="text"
          name="name"
          placeholder="Enter name"
          value={formData.name}
          onChange={handleChange}
          required
        />

        <label>Age:</label>
        <input
          type="number"
          name="age"
          placeholder="Enter age"
          value={formData.age}
          onChange={handleChange}
          required
        />

        <label>Salary:</label>
        <input
          type="number"
          name="salary"
          placeholder="Enter salary"
          value={formData.salary}
          onChange={handleChange}
          required
        />

        <label>City:</label>
        <input
          type="text"
          name="city"
          placeholder="Enter city"
          value={formData.city}
          onChange={handleChange}
          required
        />

        <label>Mobile:</label>
        <input
          type="tel"
          name="mobile"
          placeholder="Enter mobile number"
          value={formData.mobile}
          onChange={handleChange}
          required
        />

        <button type="submit">Submit</button>

      </form>
    </div>
  );
}

export default EmployeeForm;
