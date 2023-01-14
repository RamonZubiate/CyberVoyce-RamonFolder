import React, {useContext} from 'react'

// COMPONENTS
import DirectMessage from './DirectMessage'
import StoryCard from './Story'

// IMPORTS
import searchIcon from '../assets/Search.png'

//darkIcon
import searchDark from '../assets/searchDark.png'

import { ThemeContext } from '../App'
//renders Social navigation menu
export default function SocialNav(){
    
    const {theme, setTheme} = useContext(ThemeContext);
    return(
        <div className="social-nav" id = {theme}>

            {/* renders search box */}
            <div className="social-searchBox">
                {theme === 'dark' ?
                <img src={searchIcon} alt="search icon"/>
                :
                <img src={searchDark} alt="search icon"/>
                }
                <input type="text" placeholder="Search"></input>
            </div>

            {/* renders direct messages */}
            <div className="social-messagesContainer">
                <h3>Messages</h3>
                <div className="social-dmContainer">
                    <DirectMessage 
                        img="https://pyxis.nymag.com/v1/imgs/080/0db/457b958b6d637c7256a55ad0d89867b459-13-Sza.rsquare.w700.jpg" 
                        displayName="Sza" 
                        username="sza"
                    />
                    <DirectMessage 
                        img="https://pbs.twimg.com/profile_images/634514155261833216/czgYrPLQ_400x400.jpg" 
                        displayName="Travis Scott" 
                        username="trvisXX"
                    />
                    <DirectMessage 
                        img="https://static01.nyt.com/images/2021/04/25/magazine/25mag-talk/25mag-talk-superJumbo.jpg" 
                        displayName="Neil DeGrasse Tyson" 
                        username="neiltyson"
                    />
                    <DirectMessage 
                        img="https://static01.nyt.com/images/2021/03/07/fashion/06SETHROGEN1/06SETHROGEN1-mediumSquareAt3X.jpg" 
                        displayName="Seth Rogan" 
                        username="Sethrogan"
                    />
                    <DirectMessage 
                        img="https://pbs.twimg.com/media/EgXyJ-bUMAMP5bJ.jpg:large" 
                        displayName="Becky G." 
                        username="iambeckyg"
                    />
                    <DirectMessage 
                        img="https://www.thefamouspeople.com/profiles/images/mark-rober-108974-2.jpg" 
                        displayName="Mark Rober" 
                        username="MarkRober"
                    />
                </div>
            </div>

            {/* renders stories */}
            {/* the background for the story card can be changed in "story-mainContainer" function in App.css */}
            <div className="social-stories">
                <h3>Stories</h3>
                <div className="social-storiesContainer">
                    <StoryCard img="https://images.sk-static.com/images/media/profile_images/artists/8801214/huge_avatar"/>
                    <StoryCard img="https://images.sk-static.com/images/media/profile_images/artists/8801214/huge_avatar"/>
                    <StoryCard img="https://images.sk-static.com/images/media/profile_images/artists/8801214/huge_avatar"/>
                    <StoryCard img="https://images.sk-static.com/images/media/profile_images/artists/8801214/huge_avatar"/>
                    <StoryCard img="https://images.sk-static.com/images/media/profile_images/artists/8801214/huge_avatar"/>
                    <StoryCard img="https://images.sk-static.com/images/media/profile_images/artists/8801214/huge_avatar"/>
                    <StoryCard img="https://images.sk-static.com/images/media/profile_images/artists/8801214/huge_avatar"/>
                </div>
            </div>
        </div>
    )
}