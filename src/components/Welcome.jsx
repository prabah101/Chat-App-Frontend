import React from 'react'

import welcome1 from "../assets/welcome1.gif"
import welcome2 from "../assets/welcome2.gif"
import welcome3 from "../assets/welcome3.gif"
import welcome4 from "../assets/welcome4.gif"
import welcome5 from "../assets/welcome5.gif"
import welcome6 from "../assets/welcome6.gif"
import welcome7 from "../assets/welcome7.gif"

import "./styles/Welcome.css"

export default function Welcome({currentUser}) {

  const gif = [
    welcome1,
    welcome2,
    welcome3,
    welcome4,
    welcome5,
    welcome6,
    welcome7,
    welcome7]
  return (
    <>
        <div className="welcome-container">
            <img src={gif[Math.floor(Math.random() * 8)]} alt="gif" />
            <h1>
                Welcome, <span>{currentUser.username}!!</span>
            </h1>
            <h3>Chat with your friends</h3>
        </div>
    </>
  )
}
