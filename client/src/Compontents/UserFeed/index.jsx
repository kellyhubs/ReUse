import React from 'react'
import "./User.css"
import { Topbar } from '../Topbar';
import { FeedSidebar } from '../FeedSidebar';
import { InfoFeed } from '../InfoFeed';
import { Rightbar } from '../Rightbar';

const UserFeed = () => {
  return (
    <>
    <Topbar />
      <div className="homeContainer">
        <FeedSidebar />
        <InfoFeed />
        <Rightbar />
      </div>
    </>
  )
}

export default UserFeed;