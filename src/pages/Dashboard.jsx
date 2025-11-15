import React, {useEffect} from 'react'
import TareaForm from '../components/TareaForm'
import { useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import Spinner from '../components/Spinner'
import {getTareas, reset}  from '../features/tareas/tareaSlice'

const Dashboard = () => {

  const navigate = useNavigate()
  const dispatch = useDispatch()

  const {user} = useSelector((state) => state.auth)
  const {tareas, isLoading, isSuccess, message} = useSelector((state) => state.tarea)

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