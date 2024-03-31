import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Login from '../Component/Login'
import Dashboard from '../Dashboard/Dashboard'

function Allroutes() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Login/>}></Route>
        <Route path='/dashboard' element={<Dashboard/>}></Route>
        <Route></Route>
        <Route></Route>
      </Routes>
    </div>
  )
}

export default Allroutes
