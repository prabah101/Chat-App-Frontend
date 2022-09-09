import React, {useState} from 'react'
import Picker from 'emoji-picker-react';
import {IoMdSend} from 'react-icons/io'
import {BsEmojiSmileFill} from 'react-icons/bs'

import "./styles/ChatInput.css"

export default function ChatInput({handleSendMsg}) {

    const [showEmojiPicker, setShowEmojiPicker] = useState(false)
    const [msg, setMsg] = useState("")

    const handleEmojiPicker = () => {
        setShowEmojiPicker(prevState => !prevState)
    }

    const handleEmojiClick = (event, emoji) => {
        let message = msg
        message += emoji.emoji
        setMsg(message)
    }

    const sendChat = (event) => {
        event.preventDefault();
        if (msg.length > 0) {
          handleSendMsg(msg);
          setMsg("");
        }
      };

  return (
    <>
        <div className="chatInput-container">
            <div className="button-container">
                <div className="emoji">
                    <BsEmojiSmileFill onClick={() => handleEmojiPicker()} />
                    {
                        showEmojiPicker && <Picker onEmojiClick={handleEmojiClick} />
                    }
                </div>
            </div>
            <form className='input-container' onSubmit={(e) => sendChat(e)} >
                <input
                    className='msg-input'
                    type="text"
                    placeholder='Type a message'
                    value={msg}
                    onChange={(e) => setMsg(e.target.value)}
                />
                <button className="submit">
                    <IoMdSend />
                </button>
            </form>
        </div>
    </>
  )
}
