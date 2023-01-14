import React from 'react';
import './ChatLog.css'

//COMPONENTS
import Message from '../Message/Message';

// IMAGES
import yoshi from '../../assets/Yoshi.webp';

export default function ChatLog(){
    return(
        <div className="chatLog-mainContainer">
            <Message pfp="https://cdn1.epicgames.com/ue/product/Screenshot/Img1-1920x1080-2fe06385a4a96b6f28c3d24f9d283ef3.jpg?resize=1&w=1920" name="gamer" description="what's up!?" timestamp="2:01 PM"/>
            <Message pfp={yoshi} name="Kings" description="nothing wryd?" timestamp="2:03 PM" />
            <Message pfp="https://cdn1.epicgames.com/ue/product/Screenshot/Img1-1920x1080-2fe06385a4a96b6f28c3d24f9d283ef3.jpg?resize=1&w=1920" name="gamer" description="opening pokemon packs!" timestamp="2:10 PM" />
            <Message pfp={yoshi} name="Kings" description="nice, did you get any good ones?" timestamp="2:11 PM" />
            <Message pfp="https://cdn1.epicgames.com/ue/product/Screenshot/Img1-1920x1080-2fe06385a4a96b6f28c3d24f9d283ef3.jpg?resize=1&w=1920" name="gamer" description="no luck yet :(" timestamp="2:15 PM" />
            <Message pfp={yoshi} name="Kings" description="ripppp" timestamp="2:22 PM"/>
            <Message pfp="https://cdn1.epicgames.com/ue/product/Screenshot/Img1-1920x1080-2fe06385a4a96b6f28c3d24f9d283ef3.jpg?resize=1&w=1920" name="gamer" description="what's up!?" timestamp="2:01 PM"/>
            <Message pfp={yoshi} name="Kings" description="nothing wryd?" timestamp="2:03 PM" />
            <Message pfp="https://cdn1.epicgames.com/ue/product/Screenshot/Img1-1920x1080-2fe06385a4a96b6f28c3d24f9d283ef3.jpg?resize=1&w=1920" name="gamer" description="opening pokemon packs!" timestamp="2:10 PM" />
            <Message pfp={yoshi} name="Kings" description="nice, did you get any good ones?" timestamp="2:11 PM" />
            <Message pfp="https://cdn1.epicgames.com/ue/product/Screenshot/Img1-1920x1080-2fe06385a4a96b6f28c3d24f9d283ef3.jpg?resize=1&w=1920" name="gamer" description="no luck yet :(" timestamp="2:15 PM" />
            <Message pfp={yoshi} name="Kings" description="ripppp" timestamp="2:22 PM"/>
            <Message pfp="https://cdn1.epicgames.com/ue/product/Screenshot/Img1-1920x1080-2fe06385a4a96b6f28c3d24f9d283ef3.jpg?resize=1&w=1920" name="gamer" description="what's up!?" timestamp="2:01 PM"/>
            <Message pfp={yoshi} name="Kings" description="nothing wryd?" timestamp="2:03 PM" />
            <Message pfp="https://cdn1.epicgames.com/ue/product/Screenshot/Img1-1920x1080-2fe06385a4a96b6f28c3d24f9d283ef3.jpg?resize=1&w=1920" name="gamer" description="opening pokemon packs!" timestamp="2:10 PM" />
            <Message pfp={yoshi} name="Kings" description="nice, did you get any good ones?" timestamp="2:11 PM" />
            <Message pfp="https://cdn1.epicgames.com/ue/product/Screenshot/Img1-1920x1080-2fe06385a4a96b6f28c3d24f9d283ef3.jpg?resize=1&w=1920" name="gamer" description="no luck yet :(" timestamp="2:15 PM" />
            <Message pfp={yoshi} name="Kings" description="ripppp" timestamp="2:22 PM"/>
            <Message pfp="https://cdn1.epicgames.com/ue/product/Screenshot/Img1-1920x1080-2fe06385a4a96b6f28c3d24f9d283ef3.jpg?resize=1&w=1920" name="gamer" description="I GOT HOLO CHAR!!!!" timestamp="2:30 PM" />
            <Message pfp="https://cdn1.epicgames.com/ue/product/Screenshot/Img1-1920x1080-2fe06385a4a96b6f28c3d24f9d283ef3.jpg?resize=1&w=1920" name="gamer" description="wanna go see how much i'll get for it?" timestamp="2:30 PM" />
        </div>
    );
}