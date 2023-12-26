import React from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './components/Home.jsx'
import Create from './components/Create.jsx'
import Update from './components/Update.jsx'
import Read from './components/Read.jsx'
import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/create' element={<Create/>}/>
        <Route path='/read/:slno' element={<Read/>}/>
        <Route path='/update/:slno' element={<Update/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App

