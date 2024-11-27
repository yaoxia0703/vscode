import React ,{useEffect, useState} from 'react'
import { listEmployees } from '../services/EmployeeService'
import EmployeeComponent from './EmployeeComponent'
import {useNavigate} from 'react-router-dom'

const ListEmployeeComponent = () => {
    
    const navigator=useNavigate();
    
    const [employees,setEmployees]= useState([])
    useEffect(()=>{
        listEmployees().then((response)=>{
            setEmployees(response.data);
        }).catch(error=>{
            console.error(error);
        })
    },[])

    function addNewEmployee(){
        navigator('/add-employee')
    }
  return (
    <div className='container'> 
        <h1 className='text-center'>List of Employees</h1>
        <button className='btn btn-primary mb-2' onClick={addNewEmployee}>Add Employee</button>
        <table className='table table-striped table-bordered'>
            <thead>
                <tr>
                    <th>id</th>
                    <th>name</th>
                    <th>email</th>
                </tr>
            </thead>
            <tbody>
                    {
                        employees.map(employee=>
                            <tr key={employee.id}>
                                <td>{employee.id}</td>
                                <td>{employee.name}</td>
                                <td>{employee.email}</td>
                                
                            </tr>
                            
                        )
                    }
            </tbody>
        </table>
    </div>
  )
}

export default ListEmployeeComponent