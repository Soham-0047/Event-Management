import { useState } from 'react'

import './App.css'
import { Route, Routes } from 'react-router-dom'
import Login from './components/register/login/Login'
import Register from './components/register/Register'
import 'bootstrap/dist/css/bootstrap.min.css';
import Vendor_Signup from './components/vendor/Vendor_Signup'
import Vendor_Login from './components/vendor/Vendor_Login'
import Navbartop from './components/Navbar/Navbartop'
import Home from './components/home/Home'
import Adminlogin from './components/admin/Adminlogin'
import Adminsignup from './components/admin/Adminsignup'
import Userlogin from './components/user/Userlogin'
import Usersignup from './components/user/Usersignup'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Navbartop/>
      <Routes>
        <Route path="/" element={<Home/>}/>

        
        <Route path="vendorsignup"element={<Vendor_Signup/>}/>

        <Route path="vendorlogin" element={<Vendor_Login/>}/>
        <Route path="adminlogin" element={<Adminlogin/>}/>
        <Route path="adminsignup" element={<Adminsignup/>}/>
        <Route path="userlogin" element={<Userlogin/>}/>
        <Route path="usersignup" element={<Usersignup/>}/>


      </Routes>
    </>
  )
}

export default App
