import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Dashboard from './pages/Dashboard'
import Login from './pages/Login'
import Register from './pages/Register'
import React from 'react'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/ReactToastify.css'

const App = () => {
  return (
    <>
      <Router>
        <div className="container">
          <Header></Header>
          <Routes>
            <Route path='/' element = {<Dashboard></Dashboard>}></Route>
            <Route path='/login' element = {<Login></Login>}></Route>
            <Route path='/register' element = {<Register></Register>}></Route>
          </Routes>
        </div>
      </Router>
      <ToastContainer />
    
    </>
  )
}

export default App