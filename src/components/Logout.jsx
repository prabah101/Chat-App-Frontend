import React from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import {BiPowerOff} from 'react-icons/bi'

import "./styles/Logout.css"

export default function Logout() {

    const navigate = useNavigate()

    const handleClick = async () => {
        localStorage.clear()
        navigate("/login")
    }

  return (
    <button className='logout-button' onClick={() => handleClick()}>
        <BiPowerOff />
    </button>
  )
}
