import React, { Component } from 'react'
import JasonWood from '../img/JasonWood.png'
import JasonWoodMobile from '../img/JasonWood-mobile.png'



export default class About extends Component {
    render() {
        return (
            <div>
                <section className="about">
                    {/* <div className="container"> */}
                        <div className="about__inner">

                            <div className="about__photo">
                                <img className="about__photo-main" src={JasonWood} alt=""></img>
                                <img className="about__photo-mobile" src={JasonWoodMobile} alt=""></img>
                            </div>

                            <div className="about__info">
                                <div className="container">
                                    <h3 className="about__info-title">About me</h3>
                                    <p className="about__info-text">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 

                                    <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
                                    </p>
                                    <span className="about__info-name">Jason Wood</span>
                                </div>    
                            </div>
                
                        </div>
                        {/* </div> */}
                        <div className="helper helper--bottom">
                                <p className="helper__text helper__text--gray">keep scrolling, there is still more to come</p>
                                <a className="helper__arrow" href="#"></a>
                            </div>
                    </section>
            </div>
        )

    }
}