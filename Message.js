import React from 'react'
import './Message.css';

function Message() {
  return (
    <div className='message_body'>
      <div className='message_contents'>
       <p className='message_details'>message</p>
       <small className='message_timestamp'>timestamp</small>
      </div> 
    </div>
  )
}

export default Message
