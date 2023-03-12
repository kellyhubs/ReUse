import React from 'react'
import "./topbar.css" //getting css for the topbar

export const Topbar = () => {
  return (
    // navbar of the userfeed page
    <div className='topbarContainer'>
      <div className="topbarLeft">
        <span className="logo">ReUse&nbsp; <i class="fa-solid fa-hand-holding-hand"></i></span>
      </div>

      <div className="topbarCenter">
        <div className='searchbar'>
        <i class="fa-solid fa-magnifying-glass"></i> &nbsp;
        <input placeholder="Search" type="text" className="searchInput" />
        </div>
      </div>

      <div className="topbarRight">
        <div className='topbarLinks'>
          <span className="topbarLink">Profile</span>
          <span className="topbarLink">Feed</span>
        </div>
        <div className="topbarIcons">
          <div className="topbarIconItem">
          <i class="fa-solid fa-users"></i>
            <span className="topbarIconBadge">1</span>
          </div>
          <div className="topbarIconItem">
          <i class="fa-solid fa-message"></i>
            <span className="topbarIconBadge">2</span>
          </div>
          <div className="topbarIconItem">
          <i class="fa-solid fa-bell"></i>
            <span className="topbarIconBadge">1</span>
          </div>
        </div>
        {/* profile pic */}
        <img src="/assets/people/kelly.jpg" alt="kelly profilepic" className='topbarImg'/>
      </div>
    </div>
  );
}

export default Topbar;
