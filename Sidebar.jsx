import React from 'react'
import SearchIcon from '@mui/icons-material/Search';
import './Sidebar.css';
import SidebarThread from './SidebarThread';
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';
import CreateRoundedIcon from '@mui/icons-material/CreateRounded';

function Sidebar() {
  function menuBtn(){
    
  }
  return (
   
    <div className='sidebar'>
      <div className='sidebar_items'>
      <button className='menu_icon' >
        <MenuOutlinedIcon style={{cursor: 'pointer'}} onClick={menuBtn}/>
      </button>
        <div className='sidebar_search'>
        <SearchIcon />
        <input className='search_input' placeholder='Search' type='text' />
        </div>
      <div className='sidebar_thread'>
        <SidebarThread />
        <SidebarThread />
        
      </div>
      <button className='bottom_group'>
        <CreateRoundedIcon style={{float: 'right', marginRight: '10px'}}/>
      </button>
      </div>
      
    </div>
  )
}

export default Sidebar;
