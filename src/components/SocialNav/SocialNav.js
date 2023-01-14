import React, {useContext} from 'react'
import './SocialNav.css'

// COMPONENTS
import DirectMessage from './DirectMessage'
import StoryCard from './Story'

// IMPORTS
import searchIcon from '../../assets/Search.png'

//darkIcon
import searchDark from '../../assets/searchDark.png'

import { ThemeContext } from '../../App'
//renders Social navigation menu
export default function SocialNav(){
    
    const {theme, setTheme} = useContext(ThemeContext);

    const [windowWidth, setWindowWidth] = React.useState(window.innerWidth)

    React.useEffect(() => {
        function watchWidth(){
            setWindowWidth(window.innerWidth)
        }
        window.addEventListener("resize", watchWidth)
        return function(){
            window.removeEventListener("resize", watchWidth)
        }
    }, [windowWidth])
    
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
                    <StoryCard 
                        img="https://images.sk-static.com/images/media/profile_images/artists/8801214/huge_avatar"
                        story="https://natureconservancy-h.assetsadobe.com/is/image/content/dam/tnc/nature/en/photos/SRPCaddoLake.jpg?crop=45%2C0%2C1909%2C1091&wid=2450&hei=1400&scl=0.7792857142857142"
                    />
                    <StoryCard 
                        img="https://images.sk-static.com/images/media/profile_images/artists/8801214/huge_avatar"
                        story="https://cdn.corporate.walmart.com/dims4/WMT/572511c/2147483647/strip/true/crop/1920x1066+0+7/resize/980x544!/quality/90/?url=https%3A%2F%2Fcdn.corporate.walmart.com%2F7b%2F66%2F142c151b4cd3a19c13e1ca65f193%2Fbusinessfornature-banner.png"
                    />
                    <StoryCard 
                        img="https://images.sk-static.com/images/media/profile_images/artists/8801214/huge_avatar"
                        story="https://www.masterclass.com/cdn-cgi/image/width=1920,quality=75,format=webp/https://images.ctfassets.net/3s5io6mnxfqz/AUWonAVxQhoFqxggae3eR/80c49fc106c3c57c1d78610f1fd1a1f6/bird-s-eye-view-of-pine-trees-3312678.jpg"
                    />
                    <StoryCard 
                        img="https://images.sk-static.com/images/media/profile_images/artists/8801214/huge_avatar"
                        story="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_6vlnHn8IYHMQC0o_vivtcjSfcvhZJ94II_S0bdK3tcvTa3I3qQFuCuZV6tBgdr3LoEU&usqp=CAU"
                    />
                    <StoryCard 
                        img="https://images.sk-static.com/images/media/profile_images/artists/8801214/huge_avatar"
                        story="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSK7I4ufc6cWkbBJEtUIufa6r8TAhTAuf374vtwZN4gZI9QcHNsudNrqy_NU_x5Ys6Lpfg&usqp=CAU"
                    />
                    <StoryCard 
                        img="https://images.sk-static.com/images/media/profile_images/artists/8801214/huge_avatar"
                        story="https://www.lombardodier.com/files/live/sites/loportail/files/news/2021/May/20210521/Nature_LOgreen.jpg"
                    />
                    <StoryCard 
                        img="https://images.sk-static.com/images/media/profile_images/artists/8801214/huge_avatar"
                        story="https://previews.123rf.com/images/kalinavova/kalinavova1603/kalinavova160300021/55215792-%E6%98%A5%E3%81%AE%E6%A3%AE%E3%81%AE%E6%9C%A8%E3%80%82%E8%87%AA%E7%84%B6%E3%81%AE%E7%B7%91%E3%81%AE%E6%9C%A8%E6%97%A5%E5%85%89%E3%81%AE%E8%83%8C%E6%99%AF%E3%80%82%E7%A9%BA.jpg"
                    />
                </div>
            </div>
        </div>
    )
}