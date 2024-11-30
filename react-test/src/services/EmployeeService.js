import axios from "axios"

const REST_API_BASE_URL='http://localhost:8080/employee';

export const listEmployees= () => {
    return axios.get(REST_API_BASE_URL+"/findAll")
}
export const insertEmployee=(emloyees)=>axios.post(REST_API_BASE_URL+"/add",emloyees);

export const getEmployee=(employeeId)=>axios.get(REST_API_BASE_URL+"/getEmployeeByID?id="+employeeId);

export const updateEmployee=(exployee)=>axios.put(REST_API_BASE_URL+"/edit",exployee);

export const deleteEmployee=(employeeId)=>axios.delete(REST_API_BASE_URL+"/delete?id="+employeeId)