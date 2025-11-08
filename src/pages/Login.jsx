import React, {useState, useEffect} from 'react'
import { FaSignInAlt } from 'react-icons/fa'
import {useSelector, useDispatch} from 'react-redux'
import {useNavigate} from 'react-router-dom'
import {toast} from 'react-toastify'
import Spinner from '../components/Spinner' 
import { login, reset } from '../features/auth/authSlice'

const Login = () => {
  const [formData, setFormData] = useState({
      email: '',
      password: ''
    })
  
    const {email, password} = formData
    const navigate = useNavigate()
    const dispatch = useDispatch()

    const {user, isLoading, isSuccess, isError, message} = useSelector((state) => state.auth)

    //la primera ves que se renderice la pagina o cuando cambien sus dependencias
    useEffect(() => {
      if (isError){
        toast.error(message)
      }
      if (isSuccess){
        navigate('/')
      }

      dispatch(reset())

      //dependencias:
    },[user, isError, isSuccess, message, navigate, dispatch])
  
    const onChange = (e) => {
      setFormData((prevState)=> ({
        ...prevState,
        [e.target.name]: e.target.value
      }))
    }
  
    const onSubmit = (e) => {
      e.preventDefault()

      const userData = {
        email,
        password
      }
      dispatch(login(userData))
    }

    if (isLoading) {
      return <Spinner />
    }
  
    return (
      <>
        <section className="heading">
          <h4>
            <FaSignInAlt /> LogIn
          </h4>
          <p>
            Por favor ingresa tus datos
          </p>
        </section>
        <section className="form">
          <form onSubmit={onSubmit}>
            <div className="form-group">
              <label>Email</label>
              <input 
                type='email'
                className='form-control'
                id='email'
                name='email'
                value={email}
                placeholder='Por favor teclea tu email'
                onChange={onChange}
              />
              <label>Contraseña</label>
              <input 
                type='password'
                className='form-control'
                id='password'
                name='password'
                value={password}
                placeholder='Por favor teclea tu password'
                onChange={onChange}
              />
            </div>
            <div className="form-group">
              <button type="submit" className='btn btn-block'>
                LogIn
              </button>
            </div>
          </form>
        </section>
      </>
    )
}

export default Login