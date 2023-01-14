import React from 'react';
import './AdvancedChatLog.css'

//COMPONENTS
import Message from '../Message/Message';

// IMAGES
import yoshi from '../../assets/Yoshi.webp';

export default function ChatLog(){
    return(
        <div className="chatLog-mainContainer">
            <Message 
                pfp="https://i.guim.co.uk/img/media/26bd84ad34111920d6eebf52de3ee1b098b4a3e6/0_47_1472_883/master/1472.jpg?width=1200&height=1200&quality=85&auto=format&fit=crop&s=75dfdb3554b9610d5baacb8d7e44b74a" 
                name="drake" 
                description="what are yall up to rn?" 
                timestamp="6:20 PM"
            />
            <Message 
                pfp={yoshi} 
                name="Kings" 
                description="nothing...why?" 
                timestamp="6:20 PM" 
            />
            <Message 
                pfp="https://i.guim.co.uk/img/media/26bd84ad34111920d6eebf52de3ee1b098b4a3e6/0_47_1472_883/master/1472.jpg?width=1200&height=1200&quality=85&auto=format&fit=crop&s=75dfdb3554b9610d5baacb8d7e44b74a"
                name="drake" 
                description="let's grab drinks" 
                timestamp="6:20 PM" 
            />
            <Message 
                pfp={yoshi} 
                name="Kings" 
                description="bet!" 
                timestamp="6:20 PM" 
            />
            <Message 
                pfp="https://www.biography.com/.image/ar_1:1%2Cc_fill%2Ccs_srgb%2Cfl_progressive%2Cq_auto:good%2Cw_1200/MTU0MDQyNzUyMzgyODA1NzU1/aap-rocky-from-the-film-monster-poses-for-a-portrait-in-the-youtube-x-getty-images-portrait-studio-at-2018-sundance-film-festival-on-january-22-2018-in-park-city-utah-photo-by-robby-klein_getty-images.jpg" 
                name="A$AP" 
                description="i'm in too!" 
                timestamp="6:20 PM" 
            />
            <Message 
                pfp="https://www.biography.com/.image/ar_1:1%2Cc_fill%2Ccs_srgb%2Cfl_progressive%2Cq_auto:good%2Cw_1200/MTU0MDQyNzUyMzgyODA1NzU1/aap-rocky-from-the-film-monster-poses-for-a-portrait-in-the-youtube-x-getty-images-portrait-studio-at-2018-sundance-film-festival-on-january-22-2018-in-park-city-utah-photo-by-robby-klein_getty-images.jpg" 
                name="A$AP" 
                description="lorem ipsum" 
                timestamp="6:20 PM" 
            />
            <Message 
                pfp="https://i.guim.co.uk/img/media/26bd84ad34111920d6eebf52de3ee1b098b4a3e6/0_47_1472_883/master/1472.jpg?width=1200&height=1200&quality=85&auto=format&fit=crop&s=75dfdb3554b9610d5baacb8d7e44b74a"
                name="drake" 
                description="wth" 
                timestamp="6:20 PM" 
            />
            <Message 
                pfp="https://cdn.vanguardngr.com/wp-content/uploads/2019/11/Future.jpg"
                name="Future" 
                description="that's what im saying" 
                timestamp="6:20 PM" 
            />
            <Message 
                pfp="https://i.guim.co.uk/img/media/26bd84ad34111920d6eebf52de3ee1b098b4a3e6/0_47_1472_883/master/1472.jpg?width=1200&height=1200&quality=85&auto=format&fit=crop&s=75dfdb3554b9610d5baacb8d7e44b74a" 
                name="drake" 
                description="what are yall up to rn?" 
                timestamp="6:20 PM"
            />
            <Message 
                pfp={yoshi} 
                name="Kings" 
                description="nothing...why?" 
                timestamp="6:20 PM" 
            />
            <Message 
                pfp="https://i.guim.co.uk/img/media/26bd84ad34111920d6eebf52de3ee1b098b4a3e6/0_47_1472_883/master/1472.jpg?width=1200&height=1200&quality=85&auto=format&fit=crop&s=75dfdb3554b9610d5baacb8d7e44b74a"
                name="drake" 
                description="let's grab drinks" 
                timestamp="6:20 PM" 
            />
            <Message 
                pfp={yoshi} 
                name="Kings" 
                description="bet!" 
                timestamp="6:20 PM" 
            />
            <Message 
                pfp="https://www.biography.com/.image/ar_1:1%2Cc_fill%2Ccs_srgb%2Cfl_progressive%2Cq_auto:good%2Cw_1200/MTU0MDQyNzUyMzgyODA1NzU1/aap-rocky-from-the-film-monster-poses-for-a-portrait-in-the-youtube-x-getty-images-portrait-studio-at-2018-sundance-film-festival-on-january-22-2018-in-park-city-utah-photo-by-robby-klein_getty-images.jpg" 
                name="A$AP" 
                description="i'm in too!" 
                timestamp="6:20 PM" 
            />
            <Message 
                pfp="https://www.biography.com/.image/ar_1:1%2Cc_fill%2Ccs_srgb%2Cfl_progressive%2Cq_auto:good%2Cw_1200/MTU0MDQyNzUyMzgyODA1NzU1/aap-rocky-from-the-film-monster-poses-for-a-portrait-in-the-youtube-x-getty-images-portrait-studio-at-2018-sundance-film-festival-on-january-22-2018-in-park-city-utah-photo-by-robby-klein_getty-images.jpg" 
                name="A$AP" 
                description="lorem ipsum" 
                timestamp="6:20 PM" 
            />
            <Message 
                pfp="https://i.guim.co.uk/img/media/26bd84ad34111920d6eebf52de3ee1b098b4a3e6/0_47_1472_883/master/1472.jpg?width=1200&height=1200&quality=85&auto=format&fit=crop&s=75dfdb3554b9610d5baacb8d7e44b74a"
                name="drake" 
                description="wth" 
                timestamp="6:20 PM" 
            />
            <Message 
                pfp="https://cdn.vanguardngr.com/wp-content/uploads/2019/11/Future.jpg"
                name="Future" 
                description="that's what im saying" 
                timestamp="6:20 PM" 
            />
        </div>
    );
}