import React from 'react'

import Robot from "../assets/robot.gif"
import "./styles/Welcome.css"

export default function Welcome({currentUser}) {
  return (
    <>
        <div className="welcome-container">
            <img src={Robot} alt="Robot" />
            <h1>
                Welcome, <span>{currentUser.username}!!</span>
            </h1>
            <h3>Chat with your friends</h3>
        </div>
    </>
  )
}
