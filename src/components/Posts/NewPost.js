import React, {useContext} from 'react'
import './Posts.css'

// IMPORTS 
import eldenring from '../../assets/elden kings.png'
import commentIcon from '../../assets/comment.png'
import likeIcon from '../../assets/like.png'
import dislikeIcon from '../../assets/dislike.png'
import shareIcon from '../../assets/share.png'
import threeDots from '../../assets/threeDots.png'
import giftIcon from '../../assets/gift.png'
import yoshi from '../../assets/Yoshi.webp'

//dark Icons 


import { ThemeContext } from '../../App'

import likeDark from '../../assets/likeDark.png'
import dislikeDark from '../../assets/dislikeDark.png'
import shareDark from '../../assets/shareDark.png'
import commentDark from '../../assets/commentIconDark.png'

// renders post for home feed and profile page
//props expected: description (user-generated text content), img (optional image)
export default function NewPost(props){
    const {theme, setTheme} = useContext(ThemeContext);

    return(
        <div className="post" id = {theme}>

            {/* renders user profile picture (current default is fat yoshi) */}
            <div className="post-avatar">
                <img src={yoshi} alt="avatar"/>
            </div>

            <div className="post-headerContainer">
                <div className="post-header">
                    {/* poster's username (current default is Kings) */}
                    <h3>Kings</h3>
                    <div className="post-headerRight"> {/* i couldnt think of a better className tbh*/}
                        {/* { (!props.img && props.gift) && <img src={giftIcon} alt="gift" className="post-noImgGift"/>} (might reuse DONT DELETE)*/} 
                         <img src={threeDots} alt="three dots" className="header-dots"/>
                     </div>
                </div>

                {/* renders post description */}
                <div className="post-headerDescription">
                    <p>
                        {props.description}
                    </p>
                </div>

                {/* renders post image */}
                { props.img &&
                <div className="post-imgContainer">
                    <img src={props.img} alt="user custom" className="post-img"/>
                    {/* { props.gift && <div className="post-giftContainer">
                        <img src={giftIcon} alt="gift" className="post-giftIcon"/>
                    </div>} (DONT DELETE)*/}
                </div>}

                {/* renders post footer (i.e. like, dislike icons) */}
                {theme === 'dark' ?
                <div className="post-footer">
                    <div className="post-iconContainer">
                        <img src={commentIcon} alt="comments" className="post-icon"/>
                        <p>346</p>
                    </div>

                    <div className="post-iconContainer">
                        <img src={dislikeIcon} alt="dislikes" className="post-icon"/>
                        <p>0</p>
                    </div>

                    <div className="post-iconContainer">
                        <img src={likeIcon} alt="likes" className="post-icon"/>
                        <p>420</p>
                    </div>

                    <div className="post-iconContainer">
                        <img src={shareIcon} alt="share" className="post-icon"/>
                    </div>

                    <div className="post-iconContainer">
                        <img src={giftIcon} alt="gift" className="post-icon"/>
                    </div>
                </div>
                :
                <div className="post-footer">
                <div className="post-iconContainer">
                    <img src={commentDark} alt="comments" className="post-icon"/>
                    <p>346</p>
                </div>

                <div className="post-iconContainer">
                    <img src={dislikeDark} alt="dislikes" className="post-icon"/>
                    <p>0</p>
                </div>

                <div className="post-iconContainer">
                    <img src={likeDark} alt="likes" className="post-icon"/>
                    <p>420</p>
                </div>

                <div className="post-iconContainer">
                    <img src={shareDark} alt="share" className="post-icon"/>
                </div>

                <div className="post-iconContainer">
                    <img src={giftIcon} alt="gift" className="post-icon"/>
                </div>
            </div>
                }
            </div>
        </div>
    );
}