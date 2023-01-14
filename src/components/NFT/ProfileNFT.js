import React from 'react'
import img2 from '../../assets/transformer.jpg'
import Post from '../Posts/NewPost';
import './NFT.css'

export default function ProfileNFT(){
    //return the NFTs on a person's profile
    return(
    <Post description="New transformer just dropped" img={img2}/>
    );
    
    
}