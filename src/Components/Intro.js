import React, { Component } from 'react'

export default class Intro extends Component {
    render() {
        return (
            <div>
               <div className="intro">
                    <div className="helper">
                        <p className="helper__text">Scroll down to see more</p>
                        <a className="helper__arrow" href="#"></a>
                    </div>
                </div>
            </div>
        )
    }
}