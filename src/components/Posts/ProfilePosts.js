import React from 'react'
import Post from './NewPost';
import img1 from '../../assets/elden kings.png'
import './Posts.css'

export default function ProfilePosts(props){
    //return a person's posts on their profile
    return (
        <div>
        <Post description="You don't have the right, O you don't 
        have the right therefore you don't have 
        the right, O you don't have the right"
        img={img1}
        gift={true}
        />
    <Post description="Good morning, Cybervoyce!."/>
    <Post description="Hold up.. The new Need for Speed looks pretty aight 👀"/>
    <Post description="Chainsaw man is GOATED" gift={true}/>
    </div>
    );

}