// import { useState, useEffect } from 'react'
// import './App.css'

// function App() {

//   return (
//     <>
//       <section className="mySection">
//         <h1 className="myHeading">
//           Fill all Details in the Form and Submit
//         </h1>
//         <form className="myForm">
//           <table className="myTable">
//             <tbody>
//               <tr>
//                 <td><label htmlFor="name">Name:</label></td>
//                 <td><input className='myInput' type="text" id="name" name="name" placeholder='Enter Your Full Name' required /></td>
//               </tr>
//               <tr>
//                 <td><label htmlFor="email">Email:</label></td>
//                 <td><input className='myInput' type="email" id="email" name="email" placeholder='Enter Your Email' required /></td>
//               </tr>
//               <tr>
//                 <td><label htmlFor="password">Password:</label></td>
//                 <td><input className='myInput' type="password" id="password" name="password" placeholder='Enter Your Password' required /></td>
//               </tr>
//               <tr>
//                 <td><label htmlFor="age">Age:</label></td>
//                 <td><input className='myInput' type="number" id="age" name="age" placeholder='Enter Your Age' required /></td>
//               </tr>
//               <tr>
//                 <td><label htmlFor="dob">Date of Birth:</label></td>
//                 <td><input className='myInput' type="date" id="dob" name="dob" required /></td>
//               </tr>
//               <tr>
//                 <td><label htmlFor="gender">Gender:</label></td>
//                 <td>
//                   <input className='myInput radio' type="radio" id="male" name="gender" value="male" required />
//                   <label htmlFor="male" style={{ marginRight: '1rem' }}>Male</label>
//                   <input className='myInput radio' type="radio" id="female" name="gender" value="female" required />
//                   <label htmlFor="female" style={{ marginRight: '1rem' }}>Female</label>
//                   <input className='myInput radio' type="radio" id="other" name="gender" value="other" required />
//                   <label htmlFor="other">Other</label>
//                 </td>
//               </tr>
//               <tr>
//                 <td><label htmlFor="phone">Phone Number:</label></td>
//                 <td><input className='myInput' type="tel" id="phone" name="phone" placeholder='Enter Your Phone Number' required /></td>
//               </tr>
//               <tr>
//                 <td><label htmlFor="address">Address:</label></td>
//                 <td><textarea className='myInput' id="address" name="address" placeholder='Enter Your Address' required></textarea></td>
//               </tr>
//               <tr>
//                 <td><label htmlFor="country">Country:</label></td>
//                 <td>
//                   <select className='myInput' id="country" name="country" required>
//                     <option value="">Select Your Country</option>
//                     <option value="usa">India</option>
//                     <option value="canada">Canada</option>
//                     <option value="uk">UK</option>
//                     <option value="australia">Australia</option>
//                     <option value="india">USA</option>
//                   </select>
//                 </td>
//               </tr>
//               <tr>
//                 <td><label htmlFor="proof">Upload Proof Of Identity:</label></td>
//                 <td><input className='myInput' style={{ cursor: 'pointer', paddingLeft: 0 }} type="file" id="proof" name="proof" accept="application/pdf, image/jpeg, image/png" required /></td>
//               </tr>
//               <tr className="buttons">
//                 <td><button className="myButton submit" type="submit">Submit</button></td>
//                 <td><button className="myButton reset" type="reset">Reset</button></td>
//               </tr>
//             </tbody>
//           </table>
//         </form>
//       </section>
//     </>
//   )
// }

// export default App


import { useState, useEffect } from 'react'
import './App.css'

function App() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    age: '',
    dob: '',
    gender: '',
    phone: '',
    address: '',
    country: '',
    proof: null
  })

  const [errors, setErrors] = useState({})

  // Handle input changes with validations
  const handleInputChange = (e) => {
    const { name, value, type, files } = e.target
    let newValue = type === 'file' ? files[0] : value
    let error = ''

    // Apply specific validations based on input type
    switch (name) {
      case 'name':
        // Only allow letters and spaces, max 50 characters
        if (!/^[a-zA-Z\s]*$/.test(value)) {
          error = 'Name can only contain letters and spaces'
          return
        }
        if (value.length > 50) {
          error = 'Name cannot exceed 50 characters'
          return
        }
        break

      case 'email':
        // Basic email validation
        if (value && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
          error = 'Please enter a valid email address'
        }
        break

      case 'password':
        // Password must be at least 8 characters with at least one number and one letter
        if (value.length > 0 && value.length < 8) {
          error = 'Password must be at least 8 characters long'
        } else if (value && !/(?=.*[a-zA-Z])(?=.*\d)/.test(value)) {
          error = 'Password must contain at least one letter and one number'
        }
        break

      case 'age':
        // Age between 1 and 120
        const ageNum = parseInt(value)
        if (value && (ageNum < 1 || ageNum > 120)) {
          error = 'Age must be between 1 and 120'
          return
        }
        break

      case 'phone':
        // Only allow numbers, spaces, hyphens, and parentheses, max 15 digits
        const phoneDigits = value.replace(/[^\d]/g, '')
        if (value && !/^[\d\s\-\(\)]+$/.test(value)) {
          error = 'Phone number can only contain numbers, spaces, hyphens, and parentheses'
          return
        }
        if (phoneDigits.length > 15) {
          error = 'Phone number cannot exceed 15 digits'
          return
        }
        break

      case 'address':
        // Max 200 characters
        if (value.length > 200) {
          error = 'Address cannot exceed 200 characters'
          return
        }
        break

      case 'proof':
        // File size limit (5MB) and type validation
        if (files[0]) {
          const file = files[0]
          const maxSize = 5 * 1024 * 1024 // 5MB
          const allowedTypes = ['application/pdf', 'image/jpeg', 'image/png']
          
          if (file.size > maxSize) {
            error = 'File size cannot exceed 5MB'
            return
          }
          if (!allowedTypes.includes(file.type)) {
            error = 'Only PDF, JPEG, and PNG files are allowed'
            return
          }
        }
        break

      default:
        break
    }

    // Update form data and errors
    setFormData(prev => ({
      ...prev,
      [name]: newValue
    }))

    setErrors(prev => ({
      ...prev,
      [name]: error
    }))
  }

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault()
    
    // Check if there are any errors
    const hasErrors = Object.values(errors).some(error => error !== '')
    if (hasErrors) {
      alert('Please fix all errors before submitting')
      return
    }
    
    // Check if all required fields are filled
    const requiredFields = ['name', 'email', 'password', 'age', 'dob', 'gender', 'phone', 'address', 'country', 'proof']
    const emptyFields = requiredFields.filter(field => !formData[field])
    
    if (emptyFields.length > 0) {
      alert('Please fill all required fields')
      return
    }
    
    console.log('Form submitted:', formData)
    alert('Form submitted successfully!')
  }

  // Handle form reset
  const handleReset = () => {
    setFormData({
      name: '',
      email: '',
      password: '',
      age: '',
      dob: '',
      gender: '',
      phone: '',
      address: '',
      country: '',
      proof: null
    })
    setErrors({})
  }

  return (
    <>
      <section className="mySection">
        <h1 className="myHeading">
          Fill all Details in the Form and Submit
        </h1>
        <form className="myForm" onSubmit={handleSubmit}>
          <table className="myTable">
            <tbody>
              <tr>
                <td><label htmlFor="name">Name:</label></td>
                <td>
                  <input 
                    className='myInput' 
                    type="text" 
                    id="name" 
                    name="name" 
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder='Enter Your Full Name' 
                    maxLength={50}
                    required 
                  />
                  {errors.name && <div style={{color: 'red', fontSize: '12px'}}>{errors.name}</div>}
                </td>
              </tr>
              <tr>
                <td><label htmlFor="email">Email:</label></td>
                <td>
                  <input 
                    className='myInput' 
                    type="email" 
                    id="email" 
                    name="email" 
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder='Enter Your Email' 
                    required 
                  />
                  {errors.email && <div style={{color: 'red', fontSize: '12px'}}>{errors.email}</div>}
                </td>
              </tr>
              <tr>
                <td><label htmlFor="password">Password:</label></td>
                <td>
                  <input 
                    className='myInput' 
                    type="password" 
                    id="password" 
                    name="password" 
                    value={formData.password}
                    onChange={handleInputChange}
                    placeholder='Enter Your Password' 
                    minLength={8}
                    required 
                  />
                  {errors.password && <div style={{color: 'red', fontSize: '12px'}}>{errors.password}</div>}
                </td>
              </tr>
              <tr>
                <td><label htmlFor="age">Age:</label></td>
                <td>
                  <input 
                    className='myInput' 
                    type="number" 
                    id="age" 
                    name="age" 
                    value={formData.age}
                    onChange={handleInputChange}
                    placeholder='Enter Your Age' 
                    min={1}
                    max={120}
                    required 
                  />
                  {errors.age && <div style={{color: 'red', fontSize: '12px'}}>{errors.age}</div>}
                </td>
              </tr>
              <tr>
                <td><label htmlFor="dob">Date of Birth:</label></td>
                <td>
                  <input 
                    className='myInput' 
                    type="date" 
                    id="dob" 
                    name="dob" 
                    value={formData.dob}
                    onChange={handleInputChange}
                    max={new Date().toISOString().split('T')[0]}
                    required 
                  />
                </td>
              </tr>
              <tr>
                <td><label htmlFor="gender">Gender:</label></td>
                <td>
                  <input 
                    className='myInput radio' 
                    type="radio" 
                    id="male" 
                    name="gender" 
                    value="male" 
                    checked={formData.gender === 'male'}
                    onChange={handleInputChange}
                    required 
                  />
                  <label htmlFor="male" style={{ marginRight: '1rem' }}>Male</label>
                  <input 
                    className='myInput radio' 
                    type="radio" 
                    id="female" 
                    name="gender" 
                    value="female" 
                    checked={formData.gender === 'female'}
                    onChange={handleInputChange}
                    required 
                  />
                  <label htmlFor="female" style={{ marginRight: '1rem' }}>Female</label>
                  <input 
                    className='myInput radio' 
                    type="radio" 
                    id="other" 
                    name="gender" 
                    value="other" 
                    checked={formData.gender === 'other'}
                    onChange={handleInputChange}
                    required 
                  />
                  <label htmlFor="other">Other</label>
                </td>
              </tr>
              <tr>
                <td><label htmlFor="phone">Phone Number:</label></td>
                <td>
                  <input 
                    className='myInput' 
                    type="tel" 
                    id="phone" 
                    name="phone" 
                    value={formData.phone}
                    onChange={handleInputChange}
                    placeholder='Enter Your Phone Number' 
                    required 
                  />
                  {errors.phone && <div style={{color: 'red', fontSize: '12px'}}>{errors.phone}</div>}
                </td>
              </tr>
              <tr>
                <td><label htmlFor="address">Address:</label></td>
                <td>
                  <textarea 
                    className='myInput' 
                    id="address" 
                    name="address" 
                    value={formData.address}
                    onChange={handleInputChange}
                    placeholder='Enter Your Address' 
                    maxLength={200}
                    required
                  ></textarea>
                  {errors.address && <div style={{color: 'red', fontSize: '12px'}}>{errors.address}</div>}
                </td>
              </tr>
              <tr>
                <td><label htmlFor="country">Country:</label></td>
                <td>
                  <select 
                    className='myInput' 
                    id="country" 
                    name="country" 
                    value={formData.country}
                    onChange={handleInputChange}
                    required
                  >
                    <option value="">Select Your Country</option>
                    <option value="india">India</option>
                    <option value="canada">Canada</option>
                    <option value="uk">UK</option>
                    <option value="australia">Australia</option>
                    <option value="usa">USA</option>
                  </select>
                </td>
              </tr>
              <tr>
                <td><label htmlFor="proof">Upload Proof Of Identity:</label></td>
                <td>
                  <input 
                    className='myInput' 
                    style={{ cursor: 'pointer', paddingLeft: 0 }} 
                    type="file" 
                    id="proof" 
                    name="proof" 
                    onChange={handleInputChange}
                    accept="application/pdf, image/jpeg, image/png" 
                    required 
                  />
                  {errors.proof && <div style={{color: 'red', fontSize: '12px'}}>{errors.proof}</div>}
                </td>
              </tr>
              <tr className="buttons">
                <td><button className="myButton submit" type="submit">Submit</button></td>
                <td><button className="myButton reset" type="button" onClick={handleReset}>Reset</button></td>
              </tr>
            </tbody>
          </table>
        </form>
      </section>
    </>
  )
}

export default App