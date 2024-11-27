import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Welcome from './Welcome'
import ListEmployeeComponent from './components/ListEmployeeComponent'
import HeadComponent from './components/HeadComponent'
import FooterComponent from './components/FooterComponent'
import {BrowserRouter,Route,Routes} from 'react-router-dom'
import IndexComponent from './components/IndexComponent'
import EmployeeComponent from './components/EmployeeComponent'

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
        </Routes>
        <FooterComponent />
      </BrowserRouter>
    </>
  )
}

export default App
