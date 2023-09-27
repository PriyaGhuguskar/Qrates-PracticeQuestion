import React from 'react'
import './NavBar.css'
import { AiOutlineDown } from 'react-icons/ai';
import { BiSearch } from 'react-icons/bi';
import { BsCart2 } from 'react-icons/bs';


// AiOutlineDown BiSearch BsCart2


const NavBar = () => {
    return (
        <header className="c-public-header">
            <a className="c-public-header__logo" href="/">
                <img src="https://assets.qrates.com/packs/media/logos/qrates-logo-6b1bd403.svg" alt="Qrates" />
            </a>
            <nav className="c-public-header__navigation navigation">
                <ul className="navigation__list">
                    <li className="navigation__list-item">
                        <div className="navigation-submenu">
                            <div className="navigation-submenu__button">DISCOVER MUSIC
                                <span ><AiOutlineDown /></span>
                            </div>

                        </div>
                    </li>
                    <li className="navigation__list-item">
                        <a className="navigation__link" href="/"
                        >For Artists</a>
                    </li>
                    <li className="navigation__list-item">
                        <a className="navigation__link" href="/">For Fans
                        </a>
                    </li>
                </ul>

            </nav>
            <a className="c-search-modal-icon c-public-header__search" href="/" id="search-opener">
                <span className="c-pictogram c-pictogram--search">
                    <BiSearch />
                </span>
            </a>
            <a className="c-cart-icon c-public-header__cart" href="/">
                <span style={{ marginLeft: '20px' }} className="c-cart-icon__icon c-pictogram c-pictogram--cart">
                    <BsCart2 />
                </span>
            </a>
            <div className="c-public-header__right-bar">
                <a className="c-public-header__login-button u-hidden-tablet" href="/">
                    Log in</a>
                <a className="c-public-header__start-button u-hidden-tablet c-button c-button--black" href="/">
                    Make your own
                </a>
                <div className="c-public-header__burger u-hidden-desktop-only">
                    <i className="c-pictogram c-pictogram--hamburger">
                    </i>
                </div>
            </div>
        </header>
    )
}

export default NavBar