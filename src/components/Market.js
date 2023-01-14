import React, {useContext} from 'react';

// IMPORTS
import searchIcon from '../assets/Search.png'

// COMPONENTS
import NFT from './NFT';

//dark icon
import searchDark from '../assets/searchDark.png'

import { ThemeContext } from '../App';
// renders market component for Cybermarket page
//props expected: N/A
// TODO: make the NFTs dynamic
export default function Market(){
    const {theme, setTheme} = useContext(ThemeContext);
    return(
        // main div
        <div className="market-mainContainer" id = {theme}> {/*ADD THIS "id = {theme}" here*/}
            <div className="market-header">

                {/* renders header */}
                <div className="market-headerText">
                    <h1>Welcome</h1>
                    <h1>to the</h1>
                    <h1 className="text3">Marketplace</h1>
                </div>
            </div>

            {/* renders NFT search box */}
            {/* TODO: add functionality */}
            <div className="market-searchBox">
                { theme === 'dark' ?
                <img src={searchIcon} alt="search icon"/>
                :
                <img src={searchDark} alt="search icon"/>
                }
                <input type="text" placeholder="Search projects"></input>
            </div>

            {/* renders top NFT creators */}
            {/* TODO: make it dynamic */}
            <div className="market-creatorsContainer">
                <h4>Top creators</h4>
                <div className="market-creators">
                    <img src="https://i.pinimg.com/236x/cb/a8/db/cba8db1fc7208cdd2419dcfdc3d96e2c--photography-portraits-children-photography.jpg" alt=""/>
                    <img src="https://www.byrdie.com/thmb/ANQtqIs_hOtGwDtl2v9cTUwI3pY=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/Square-Face-Hairstyles-V3-93952a98c6474cf0a03aa5810f72b992.png" alt=""/>
                    <img src="https://media1.popsugar-assets.com/files/thumbor/k-cGJSrD7vl4sBZqeu7OzM8RpVo/0x310:3310x3620/fit-in/1024x1024/filters:format_auto-!!-:strip_icc-!!-/2021/11/03/828/n/1922153/874ae05f6182da9de396b8.51859438_/i/Celebrity-Bangs.jpg" alt=""/>
                    <img src="https://i.icanvas.com/list-square/einstein-DVI136.jpg" alt=""/>
                    <img src="https://cdn.shopify.com/s/files/1/0334/9285/products/2022-Fashion-Flight-Seven-007-Rock-Style-Gradient-Pilot-Sunglasses-For-Men-Square-Luxury-Brand-Design_800x.jpg?v=1661103527" alt=""/>
                </div>
            </div>

            {/* NFTs container */}
            <div className="market-NFTsContainer">
                <h4>NFTs</h4>
                <div>

                    {/* renders NFTs using NFT component */}
                    <div className="market-NFTs">
                        <NFT 
                            img="https://expertphotography.b-cdn.net/wp-content/uploads/2020/09/photo-effects-1.jpg" 
                            creator="Kings" 
                            price="100" 
                            coin="VOYCE"
                        />
                        <NFT 
                            img="https://www.kentfaith.com/image/catalog/blog/329/329.jpg"
                            creator="Kings" 
                            price="25" 
                            coin="VOYCE"
                        />
                        <NFT 
                            img="https://images.unsplash.com/photo-1579549322334-324325a6540b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8Y3JlYXRpdmUlMjBwaG90b2dyYXBoeXxlbnwwfHwwfHw%3D&w=1000&q=80" 
                            creator="goldenEXP" 
                            price="50" 
                            coin="VOYCE"
                        />
                        <NFT 
                            img="https://www.thephotoargus.com/wp-content/uploads/2018/09/8uniquegift.jpg"
                            creator="coppyhoggy" 
                            price="150" 
                            coin="VOYCE"
                        />
                        <NFT 
                            img="https://dvyvvujm9h0uq.cloudfront.net/com/articles/1606133947-573616-jasper-benning-tnk-ksp8aqs-unsplashjpg.jpg"
                            creator="goldenEXP" 
                            price="15" 
                            coin="VOYCE"
                        />
                    </div>
                    
                    <div className="market-NFTs">
                        <NFT 
                            img="https://f4.bcbits.com/img/a0227170143_10.jpg"
                            creator="goldenEXP" 
                            price="100" 
                            coin="VOYCE"
                        />
                        <NFT 
                            img="https://i.pinimg.com/originals/93/12/c5/9312c5eda6f4d57a7f4503d084167515.jpg"
                            creator="hypesun98" 
                            price="10" 
                            coin="VOYCE"
                        />
                        <NFT 
                            img="https://images.unsplash.com/photo-1505256938659-5463d13da607?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDExfHx8ZW58MHx8fHw%3D&w=1000&q=80"
                            creator="coppyhoggy" 
                            price="35" 
                            coin="VOYCE"
                        />
                        <NFT 
                            img="https://www.studentartguide.com/wp-content/uploads/2015/02/panoramic-photography-3d.jpg"
                            creator="Kings" 
                            price="5" 
                            coin="VOYCE"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}