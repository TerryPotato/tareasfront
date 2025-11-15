import React from 'react'
import TareaForm from '../components/TareaForm'
import { useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import Spinner from '../components/Spinner'

const Dashboard = () => {

  const navigate = useNavigate()
  const dispatch = useDispatch()
  const {user} = useSelector((state) => state.auth)

  return (
    <>
    <section className="heading">
      <h3>Bienvenido {user && user.nombre}</h3>
      <p>DASHBOARD DE TAREAS</p>
    </section>
    <TareaForm />
    </>
    
  )
}

export default Dashboard