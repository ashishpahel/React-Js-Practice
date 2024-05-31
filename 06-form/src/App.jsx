import React from 'react'
import NormalForm from './components/NormalForm'
import { Route, Routes, useNavigate } from "react-router-dom"
import Navbar from './components/Navbar'
import Home from './components/Home'
import ReactHookForm from './components/ReactHookForm'
import Formik from './components/Formik'

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/normal" element={<NormalForm />} />
        <Route path="/react-hook-form" element={<ReactHookForm />} />
        <Route path="/formik" element={<Formik />} />
      </Routes>
    </div>
  )
}

export default App