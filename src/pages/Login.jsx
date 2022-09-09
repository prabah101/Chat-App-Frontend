import React, { useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import {ToastContainer, toast} from 'react-toastify'
import axios from 'axios'

import Logo from '../assets/chat-icon.png'
import "react-toastify/dist/ReactToastify.css"
import { loginRoute } from '../utils/APIRoutes'

import './styles/Login.css'

function Login() {

    const navigate = useNavigate()

    const [values, setValues] = useState({
          username:"",
          password:""
    })

    const toastOptions = {
      position: "bottom-right",
      autoClose: 8000,
      pauseOnHover: true,
      draggable: true,
      theme: "dark",
    };
    useEffect(() => {
      if(localStorage.getItem('chat-app-user')){
        navigate('/')
      }
    }, [])


    const handleSubmit = async (event) => {
        event.preventDefault()
        if(handleValidation()){
          const { password, username } = values
          const {data} = await axios.post(loginRoute, {
            username,
            password,
          })
          if(data.status === false) {
            toast.error(data.msg, toastOptions)
          }
          if(data.status === true){
            localStorage.setItem('chat-app-user', JSON.stringify(data.user))
            navigate("/chat")
          }
        }
    }

    const handleValidation = () => {
        const { password, username } = values;
        if (password === "") {
          toast.error(
            "Username and Password required.",
            toastOptions
          );
          return false;
        } else if (username.length === "") {
          toast.error(
            "Username and Password required.",
            toastOptions
          );
          return false;
        }
    
        return true;
    };

    const handleChange = (event) => {
        setValues({...values, [event.target.name]:event.target.value})
    }

    return (
      <>
        <div className='FormContainer'>
            <form className='login-form' onSubmit={(event) => handleSubmit(event)}>
                <div className='brand'>
                    <img className='login-logo' src={Logo} alt='Logo' />
                    <h1>converse</h1>
                </div>
                <input
                    className='login-input'
                    type="text"
                    placeholder="Username"
                    name="username"
                    onChange={e => handleChange(e)}
                    min="3"
                />
                <input
                    className='login-input' 
                    type="password"
                    placeholder="Password"
                    name="password"
                    onChange={e => handleChange(e)} 
                />
                <button type='submit'>Login</button>
                <span>
                    Don't have an account ? <Link to="/register">Register</Link>
                </span>
            </form>
        </div>
        <ToastContainer />
      </>
    )
}

export default Login