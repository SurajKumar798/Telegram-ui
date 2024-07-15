import { Avatar } from '@mui/material';
import React from 'react';
import './SidebarThread.css';

function SidebarThread() {
  return (
    <div className='sidebar_thread'>
      <Avatar />
      <div className='sidebarThread_details'>
        <h3>threadname</h3>
        <p>message</p>
        <small className='sidebarThread_timestamp'>timestamp</small>
      </div>
    </div>
  )
}

export default SidebarThread;
