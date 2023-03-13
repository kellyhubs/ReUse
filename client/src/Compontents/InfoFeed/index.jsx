import React from 'react'
import Share from "../Share"
import Post from "../Post"
import "./InfoFeed.css"

export function InfoFeed() {
  return (
    <div className='feed'>
    <div className="feedWrapper">
      {/* share compontents */}
      <Share />
      {/* post compontent (fake data) */}
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
    </div>
    </div>
  )
}

export default InfoFeed;