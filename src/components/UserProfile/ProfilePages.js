import React from 'react'
import NewFeed from '../Feed/NewFeed';
import ProfileNFT from '../NFT/ProfileNFT'
import ProfilePosts from '../Posts/ProfilePosts';
import ProfileVODS from '../VODs/ProfileVODS';

import './UserProfile.css'

export default function ProfilePages(props){
    //if else statement will return whichever page respective to the state value
    if(props.state === 1)
        return <ProfilePosts/>; //this returns the posts on a persons profile 
    else if (props.state === 2)
        return <ProfileNFT/>;
    else
        return <ProfileVODS/> //showPage state = 3

}