import React from 'react'
import "./Rightbar.css"

export function Rightbar() {
  return (
    <div className='rightbar'>
      <div className="rightbarWrapper">
        <div className="lovingContainer">
          <img className="lovingImg" src="/assets/loving.png" alt="love" />
          <span className="lovingText"><b>Tony Tony Chopper</b> and <b>2 other friends</b> have a community event today!</span>
        </div>
        {/* fake ad lol  */}
        <img className='rightbarAd' src="/assets/ad.png" alt="ad" />
      </div>
    </div>
  )
}

export default Rightbar;