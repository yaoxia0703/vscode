import React, { useState } from 'react'
import {useNavigate} from 'react-router-dom'
import { insertEmployee } from '../services/EmployeeService'


const EmployeeComponent = () => {
  const[name,setName]=useState('')
  const[email,setEmail]=useState('')
  const navigator=useNavigate();

  const [errors,setErrors]=useState({
    name:"",
    email :""
  })

   const saveEmployee = (e) => {
      e.preventDefault();
     if (validateForm()) {
       const employee = { name, email };
       console.info(employee);
       insertEmployee(employee).then((response) => {
         console.log(response.data);
         navigator('/employee');
       })
     }else{

     }
      
  }
  const cannelEmployee = () => {
    navigator('/employee')
  }

  function validateForm(){
    let valid = true;
    const errorCopy={...errors}
    if(name.trim()){
      errorCopy.name="";
    }else{
      errorCopy.name="name is requird";
      valid=false;
    }
    if(email.trim()){
      errorCopy.email="";
    }else{
      errorCopy.email="email is requird";
      valid=false;
    }
    setErrors(errorCopy);
    return valid;
  }

  return (
    <div className='container'>
      <div className='row'>
        <div className='card'>
          <h2 className='text-center'>Add Employee</h2>
          <div className='card-body'>
            <form>
              <div className='form-group mb-2'>
                <label className='form-label'>Name:</label>
                <input type="text" className={`form-control ${errors.name? 'is-invalid':''}`} placeholder="Enter Employee Name" name="name" value={name} onChange={(e)=>setName(e.target.value)}></input>
                {errors.name && <div className='invalid-feedback'>{errors.name}</div>}
              </div>
              <div className='form-group mb-2'>
                <label className='form-label'>Email:</label>
                <input type="text" className={`form-control ${errors.email? 'is-invalid':''}`} placeholder="Enter Employee Email" name="email" value={email} onChange={(e)=>setEmail(e.target.value)}></input>
                {errors.email && <div className='invalid-feedback'>{errors.email}</div>}
              </div>
              <div className='text-center'>
                <button className='btn btn-success' onClick={saveEmployee}>submit</button>
                &nbsp;&nbsp;<button className='btn btn-light' onClick={cannelEmployee}>cannel</button>
              </div>
            </form>
          </div>
        </div>
      </div>

    </div>
  )
}

export default EmployeeComponent