import React from 'react'
import "./post.css"

const Post = () => {
  return (
    <div className='post'>
        <div className="postWrapper">
            {/* splitting the wrapper into 3 parts*/}
            <div className="postTop">
                <div className="postTopLeft">
                    <img className="postProfileImg" src="/assets/people/kelly.jpg" alt="kelly" />
                    <span className="postUsername">Kelly Penn</span>
                    <span className="postDate">5 mins ago</span>
                </div>
                <div className="postTopRight">
                <i className="fa-solid fa-ellipsis-vertical"></i>
                </div>
            </div>
            <div className="postCenter">
                <span className="postText">Yo! This is my first post! Let's be sustainable!</span>
                <img className="postImg" src="assets/posts/1.jpg" alt="sustainable" />
            </div>
            <div className="postBottom">
                <div className="postBottomLeft">
                <img className="likeIcon" src="/assets/dislike.png" alt="dislike"/>
                <img className="likeIcon" src="/assets/heart.png" alt="like"/>
                <span className="postLikeCounter">2 people liked it</span>
                </div>
                <div className="postBottomRight">
                    <span className="postCommentText">1 comment</span>
                </div>
            </div>
        </div>
    </div>
  );
}

export default Post;