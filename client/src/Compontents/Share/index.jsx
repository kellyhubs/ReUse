import React from 'react'
import "./share.css"

const Share = () => {
  return (
    // adding dummy data 
    <div className='share'>
        <div className="shareWrapper">
            {/* input area */}
            <div className="shareTop">
                <img className="shareProfileImg" src="/assets/people/kelly.jpg" alt="kelly" />
                <input type="text" className='shareInput' placeholder="What's happening?" />
            </div>
            <hr className='shareHr'/>
            {/* widget */}
            <div className="shareBottom">
                <div className="shareOptions">
                    <div className="shareOption">
                    <i class="fa-solid fa-photo-film" id="shareIcon"></i>
                        <span className='shareOptionText'>Photo or Video</span>
                    </div>
                    <div className="shareOption">
                    <i class="fa-solid fa-tags" id="shareIcon"></i>
                        <span className='shareOptionText'>Tag</span>
                    </div>
                    <div className="shareOption">
                    <i class="fa-solid fa-location-dot" id="shareIcon"></i>
                        <span className='shareOptionText'>Location</span>
                    </div>
                    <div className="shareOption">
                    <i class="fa-solid fa-face-smile" id="shareIcon"></i>
                        <span className='shareOptionText'>Feelings</span>
                    </div>
                </div>
                {/* share button */}
                <button className="shareButton">Share</button>
            </div>
        </div>
    </div>
  );
}

export default Share;