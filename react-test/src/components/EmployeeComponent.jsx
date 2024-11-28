import React, { useState } from 'react'
import {useNavigate} from 'react-router-dom'
import { insertEmployee } from '../services/EmployeeService'


const EmployeeComponent = () => {
  const[name,setName]=useState('')
  const[email,setEmail]=useState('')
  const navigator=useNavigate();

   const saveEmployee = (e) => {
      e.preventDefault();
      const employee={name,email};
      console.info(employee);
      insertEmployee(employee).then((response)=>{
        console.log(response.data);
        navigator('/employee');
      })
  }
  const cannelEmployee = () => {
    navigator('/employee')
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
                <input type="text" className="form-control" placeholder="Enter Employee Name" name="name" value={name} onChange={(e)=>setName(e.target.value)}></input>
              </div>
              <div className='form-group mb-2'>
                <label className='form-label'>Email:</label>
                <input type="text" className="form-control" placeholder="Enter Employee Email" name="email" value={email} onChange={(e)=>setEmail(e.target.value)}></input>
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