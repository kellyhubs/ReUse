import "./FeedSidebar.css"
import React from 'react'

export function FeedSidebar() {
  return (
    // side bar widget 
    <div className="sidebar">
        <div className="sidebarWrapper">
          <ul className="sidebarList">
            <li className="sidebarListItem">
            <i className="fa-solid fa-house" id="sidebarIcon"></i>
            <span className="sidebarListItemText">Home</span>
            </li>
            <li className="sidebarListItem">
            <i className="fa-solid fa-message" id="sidebarIcon"></i>
            <span className="sidebarListItemText">Chats</span>
            </li>
            <li className="sidebarListItem">
            <i className="fa-solid fa-user-group" id="sidebarIcon"></i>
            <span className="sidebarListItemText">Groups</span>
            </li>
            <li className="sidebarListItem">
            <i className="fa-solid fa-bookmark" id="sidebarIcon"></i>
            <span className="sidebarListItemText">Saved</span>
            </li>
            <li className="sidebarListItem">
            <i className="fa-solid fa-calendar" id="sidebarIcon"></i>
            <span className="sidebarListItemText">Events</span>
            </li>
            <li className="sidebarListItem">
            <i className="fa-solid fa-newspaper" id="sidebarIcon"></i>
            <span className="sidebarListItemText">News</span>
            </li>
            <li className="sidebarListItem">
            <i className="fa-solid fa-circle-play" id="sidebarIcon"></i>
            <span className="sidebarListItemText">Videos</span>
            </li>
            <li className="sidebarListItem">
            <i className="fa-solid fa-clock-rotate-left" id="sidebarIcon"></i>
            <span className="sidebarListItemText">Memories</span>
            </li>
            <li className="sidebarListItem">
            <i className="fa-solid fa-circle-question" id="sidebarIcon"></i>
            <span className="sidebarListItemText">Questions</span>
            </li>
          </ul>
          <button className="sidebarButton">Show More</button>
          <hr className="sidebarHr"/>
          {/* sidebar friend list */}
          <ul className="sidebarFriendList">
            {/* dummy data to have  */}
            <li className="sidebarFriend">
              <img className="sidebarFriendImg" src="/assets/people/katsu.JPG" alt=""/>
              <span className="sidebarFriendName">Katsu Dog</span>
            </li>
            <li className="sidebarFriend">
              <img className="sidebarFriendImg" src="/assets/people/kewpie.jpg" alt=""/>
              <span className="sidebarFriendName">Smelly Kewpie</span>
            </li>
            <li className="sidebarFriend">
              <img className="sidebarFriendImg" src="/assets/people/chopper.jpg" alt=""/>
              <span className="sidebarFriendName">Tony Tony Chopper</span>
            </li>
            <li className="sidebarFriend">
              <img className="sidebarFriendImg" src="/assets/people/luffy.jpg" alt=""/>
              <span className="sidebarFriendName">James Lucas</span>
            </li>
            
          </ul>
        </div>
    </div>
  );
}

export default FeedSidebar;