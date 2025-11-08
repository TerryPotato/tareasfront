import React from 'react'
import { FaSignInAlt, FaSignOutAlt, FaUser } from 'react-icons/fa'
import {Link} from 'react-router-dom'

const Header = () => {
  return (
    <header className='header'>
        <div className="logo">
            <Link to='/'>AppTareas</Link>
        </div>
        <ul>
            <li>
                <Link to='/login'>
                    <FaSignInAlt></FaSignInAlt> Login
                </Link>
            </li>
            <li>
                <Link to='/register'>
                    <FaUser></FaUser> Registrarse
                </Link>
            </li>
        </ul>

    </header>
  )
}

export default Header