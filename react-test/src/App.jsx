import { useState } from 'react'
import './App.css'
import ListEmployeeComponent from './components/ListEmployeeComponent'
import HeadComponent from './components/HeadComponent'
import FooterComponent from './components/FooterComponent'
import {BrowserRouter,Route,Routes} from 'react-router-dom'
import IndexComponent from './components/IndexComponent'
import EmployeeComponent from './components/EmployeeComponent'
import ListEmployeeCacheComponent from './components/ListEmployeeCacheComponent' 

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <BrowserRouter>
        <HeadComponent />
        <Routes>
          {/* http://localhost:3000 */}
          <Route path='/' element={<IndexComponent />}></Route>
          {/* http://localhost:3000/employee */}
          <Route path='/employee' element={<ListEmployeeComponent />}></Route>
          {/* http://localhost:3000/add-employee */}
          <Route path='/add-employee' element={<EmployeeComponent/>}></Route>
          {/* http://localhost:3000/edit-employee */}
          <Route path='/edit-employee/:id' element={<EmployeeComponent/>}></Route>
          <Route path='/employeeCache' element={<ListEmployeeCacheComponent/>}></Route>
        </Routes>
        <FooterComponent />
      </BrowserRouter>
    </>
  )
}

export default App
