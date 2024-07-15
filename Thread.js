import { Avatar, IconButton } from '@mui/material'
import React from 'react'
import MoreHorizRoundedIcon from '@mui/icons-material/MoreHorizRounded';
import Message from './Message';
import AttachFileIcon from '@mui/icons-material/AttachFile';
import SendIcon from '@mui/icons-material/Send';
import './Thread.css';

function Thread() {
  return (
    <div className='thread'>
      <div className='thread_header'>
        <div className='thread_headerDetails'>
         <Avatar />
         <div className='thread_headerDetails_info'>
           <h4>Threadname</h4> 
           <h5>justnow</h5>
        </div>
      </div>
      <IconButton>
      <MoreHorizRoundedIcon className='thread_morehorizIcon'/>
      </IconButton>
        </div>
        <div className='thread_message'>
            <Message />
        </div>
      <div className='thread_input'>
        <form>
            <input placeholder='Message...' type='text'/>
            
            <IconButton>
            <AttachFileIcon />
            </IconButton>
           
            <IconButton>
             <SendIcon />
            </IconButton>
        </form>
       
      </div>
    </div>
  )
}

export default Thread
