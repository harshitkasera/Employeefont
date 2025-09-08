import axios from 'axios'
import './Style/AllEmp.css'
import { useEffect, useState } from 'react'

const ViewAllEmp = () => {

  const [emp, setEmp] = useState([])
  const [formData, setFormData] = useState({
    name: "",
    age: "",
    salary: "",
    city: "",
    mobile: ""
  })
  const [editId, setEditId] = useState(null)   // kis employee ko update kar rahe ho
  const [formVisible, setFormVisible] = useState(false) // form show/hide

  useEffect(() => {
    getData()
  }, [])

  const getData = async () => {
    const res = await axios.get('https://employee-rpbq.onrender.com/api/emp/view')
    setEmp(res.data.employ)
  }

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }))
  }

  const handleDelete = async (id) => {
    await axios.delete(`https://employee-rpbq.onrender.com/api/emp/delete/${id}`)
    getData()
  }

  const handleUpdateClick = (item) => {
    // jis employee pr click kiya uska data form me load hoga
    setFormData({
      name: item.name,
      age: item.age,
      salary: item.salary,
      city: item.city,
      mobile: item.mobile
    })
    setEditId(item._id)
    setFormVisible(true) // form show hoga
  }

  const handleUpdateSubmit = async (e) => {
    e.preventDefault()
    await axios.put(`https://employee-rpbq.onrender.com/api/emp/update/${editId}`, formData)
    getData()
    setFormVisible(false) // form hide karna
    setEditId(null)
    setFormData({ name: "", age: "", salary: "", city: "", mobile: "" }) // reset form
  }

  return (
    <>
      <h1>View All Emp</h1>
      <table border={1}>
        <thead>
          <tr>
            <th>Name</th>
            <th>Age</th>
            <th>Mobile</th>
            <th>City</th>
            <th>Salary</th>
            <th>Update</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {emp.map((item) => ( 
            <tr key={item._id}>
              <td>{item.name}</td>
              <td>{item.age}</td>
              <td>{item.mobile}</td>
              <td>{item.city}</td>
              <td>{item.salary}</td>
              <td><button onClick={() => handleUpdateClick(item)}>Update</button></td>
              <td><button onClick={() => handleDelete(item._id)}>Delete</button></td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* form tabhi dikhana jab Update button click ho */}
      {formVisible && (
        <div className="form-container">
          <h2>Update Employee</h2>
          <form onSubmit={handleUpdateSubmit}>
            <label>Name:</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />

            <label>Age:</label>
            <input
              type="number"
              name="age"
              value={formData.age}
              onChange={handleChange}
              required
            />

            <label>Salary:</label>
            <input
              type="number"
              name="salary"
              value={formData.salary}
              onChange={handleChange}
              required
            />

            <label>City:</label>
            <input
              type="text"
              name="city"
              value={formData.city}
              onChange={handleChange}
              required
            />

            <label>Mobile:</label>
            <input
              type="tel"
              name="mobile"
              value={formData.mobile}
              onChange={handleChange}
              required
            />

            <button type="submit">Update</button>
            <button type="button" onClick={() => setFormVisible(false)}>Cancel</button>
          </form>
        </div>
      )}
    </>
  )
}
export default ViewAllEmp
