import React from 'react';
import './Feed.css'

// COMPONENTS
import Voycebox from '../Voycebox/Voycebox';
import Post from '../Posts/NewPost';

// IMPORTS
import img1 from '../../assets/elden kings.png'
import img2 from '../../assets/transformer.jpg'

// renders feed in Home page
export default function NewFeed(){
    return(
        <div className="feed">

            {/* renders feed header */}
            <div className="feed-header">
                <h2>Home</h2>
            </div>

            {/* renders Voycebox component */}
            <Voycebox />

            {/* renders posts */}
            <Post description="You don't have the right, O you don't 
                        have the right therefore you don't have 
                        the right, O you don't have the right"
                        img={img1}
                        gift={true}
                        />
            <Post description="New transformer just dropped" img={img2}/>
            <Post description="Good morning, Cybervoyce!."/>
            <Post description="Hold up.. The new Need for Speed looks pretty aight 👀"/>
            <Post description="Chainsaw man is GOATED" gift={true}/>
        </div>
    );
}