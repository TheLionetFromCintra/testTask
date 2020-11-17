import React, { Component } from 'react'

export default class Header extends Component {
    render() {
     
        return (
            <div>
                <header className="header">
                    <div className="container">
                        <div className="header__inner">

                        <button className="menu__btn">
                            <div className="menu__btn-line">∞ MENU</div>
                        </button>


                        <nav className="menu">
                            <ul className="menu__list">
                            <li className="menu__item">
                                <a className="menu__item-link" href="#">Home</a>
                            </li>
                            <li className="menu__item">
                                <a className="menu__item-link" href="#">About me</a>
                            </li>
                            <li className="menu__item">
                                <a className="menu__item-link" href="#">Portfolio</a>
                            </li>
                            <li className="menu__item">
                                <a className="menu__item-link" href="#">Contact</a>
                            </li>
                            </ul>
                        </nav>

                     
                        </div>
                    </div>

                    <ul className="menu-mobile__list">
                            <li className="menu-mobile__item">
                                <a className="menu-mobile__item-link" href="#">Home</a>
                            </li>
                            <li className="menu-mobile__item">
                                <a className="menu-mobile__item-link" href="#">About me</a>
                            </li>
                            <li className="menu-mobile__item">
                                <a className="menu-mobile__item-link" href="#">Portfolio</a>
                            </li>
                            <li className="menu-mobile__item">
                                <a className="menu-mobile__item-link" href="#">Contact</a>
                            </li>
                        </ul>

                </header>
            </div>
        )

    }
}
