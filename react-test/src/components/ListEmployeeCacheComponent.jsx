import React ,{useEffect, useState} from 'react'
import { ListEmployeeCache,deleteEmployee } from '../services/EmployeeService'
import {useNavigate} from 'react-router-dom'

const ListEmployeeCacheComponent = () => {
    
    const navigator=useNavigate();
    
    const [employees,setEmployees]= useState([])
    useEffect(()=>{
        getAllEmployees();
    },[])

    function getAllEmployees(){
        ListEmployeeCache().then((response)=>{
            setEmployees(response.data);
        }).catch(error=>{
            console.error(error);
        })
    }
    function addNewEmployee(){
        navigator('/add-employee')
    }
    function editEmployee(id){
        navigator(`/edit-employee/${id}`)
    }

    function removeEmployee(id){
        console.log(id);
        deleteEmployee(id).then((response)=>{
            console.log(response.data); 
            getAllEmployees();           
        }).catch(error=>{
            console.log(error);  
        })
    }
  return (
    <div className='container'> 
        <h1 className='text-center'>List of Employees Cache</h1>
        <button className='btn btn-primary mb-2' onClick={addNewEmployee}>Add Employee</button>
        <table className='table table-striped table-bordered'>
            <thead>
                <tr>
                    <th>id</th>
                    <th>name</th>
                    <th>email</th>
                    <th>actions</th>
                </tr>
            </thead>
            <tbody>
                    {
                        employees.map(employee=>
                            <tr key={employee.id}>
                                <td>{employee.id}</td>
                                <td>{employee.name}</td>
                                <td>{employee.email}</td>
                                <td width="17%">
                                    <button className='btn btn-info mb-2' onClick={()=>editEmployee(employee.id)}>update</button>
                                    <button className='btn btn-danger mb-2'onClick={()=>removeEmployee(employee.id)}>delete</button>
                                </td>
                                
                            </tr>
                            
                        )
                    }
            </tbody>
        </table>
    </div>
  )
}

export default ListEmployeeCacheComponent