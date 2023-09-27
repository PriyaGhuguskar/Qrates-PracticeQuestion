import React from 'react'
import './footer.css'
import { AiOutlineDown } from 'react-icons/ai';
import { BsInstagram } from 'react-icons/bs';
import { BiLogoFacebookSquare } from 'react-icons/bi';
import { AiFillTwitterSquare } from 'react-icons/ai';


const Footercompo = () => {
    return (
        <footer className="c-public-footer" id="footer">
            <div className="c-public-footer__links">
                <ul className="c-public-footer__column">
                    <li className="c-public-footer__link--header"
                    >FOR ARTISTS</li>
                    <li className="c-public-footer__link">
                        <a href="/for-artists">For Artists
                        </a>
                    </li>
                    <li className="c-public-footer__link">
                        <a href="/how-it-works">

                            How it Works
                        </a>
                    </li>
                    <li className="c-public-footer__link">
                        <a href="/articles">Artist Toolkit</a>
                    </li>
                    <li className="c-public-footer__link">
                        <a href="https://share.qrates.com/">
                            Referral Program
                        </a>
                    </li>
                </ul>
                <ul className="c-public-footer__column">
                    <li className="c-public-footer__link--header">FOR FANS
                    </li>
                    <li className="c-public-footer__link">
                        <a href="/for-fans">For Fans
                        </a>
                    </li>
                    <li className="c-public-footer__link">
                        <a href="/projects?product_format=vinyl">Records</a>
                    </li>
                    <li className="c-public-footer__link">
                        <a href="/projects?product_format=cassette">Cassettes</a>
                    </li>
                    <li className="c-public-footer__link">
                        <a href="/stories">Stories</a>
                    </li>
                    <li className="c-public-footer__link">
                        <a href="/curated">Qrates Curated</a>
                    </li>
                </ul>
                <ul className="c-public-footer__column">
                    <li className="c-public-footer__link--header">OUR COMPANY</li>
                    <li className="c-public-footer__link">
                        <a className="f-adjust-ja" href="/about">About Qrates</a>
                    </li>
                    <li className="c-public-footer__link">
                        <a className="f-adjust-ja" href="/careers">Careers</a>
                    </li>

                    <li className="c-public-footer__link">
                        <a className="f-adjust-ja" href="/partners">Partners</a>
                    </li>
                </ul>
                <ul className="c-public-footer__column">
                    <li className="c-public-footer__link--header">HELP</li>
                    <li className="c-public-footer__link">
                        <a className="f-adjust-ja" href="/">Support Center</a>
                    </li>
                    <li className="c-public-footer__link">
                        <a className="f-adjust-ja" href="/">Contact Us</a>
                    </li>
                    <li className="c-public-footer__link">
                        <a className="f-adjust-ja" href="/" >Returns
                        </a>
                    </li>
                    <li className="c-public-footer__link">
                        <a className="f-adjust-ja" href="/" >Shipping
                        </a>
                    </li>
                </ul>
            </div>
            <div className="c-public-footer__sns u-hidden-desktop-only">
                <a href="/">
                    <i className="c-pictogram c-pictogram--facebook">
                    </i>
                </a>
                <a href="https://www.instagram.com/qrates/" >
                    <i className="c-pictogram c-pictogram--instagram-fill">
                    </i>
                </a>
                <a href="https://twitter.com/qrates_com">
                    <i className="c-pictogram c-pictogram--twitter-fill">
                    </i>
                </a>
            </div>
            <div className="c-public-footer__bottom">
                <div className="c-public-footer__logo">
                    <a href="/">
                        <img src="https://assets.qrates.com/packs/media/logos/qrates-logo-footer-498fa5b7.svg" alt="Qrates" />
                    </a>
                </div>
                <div className="c-public-footer__info">
                    <div className="c-public-footer__language">
                        <div className="c-language-selector c-public-footer__language-selector">
                            <div className="c-language-selector__input">English
                                <span style={{ marginLeft: "48px", display: "inline-block" }}> <AiOutlineDown /> </span></div>

                        </div>
                    </div>
                    <div className="c-public-footer__sns u-hidden-tablet">
                        <a href="https://www.facebook.com/qratesinfo">
                            <span className="c-pictogram c-pictogram--facebook" style={{ display: 'inline-block', margin: '0px 15px' }}>
                                <BiLogoFacebookSquare />
                            </span>
                        </a>
                        <a href="https://www.instagram.com/qrates/">
                            <span className="c-pictogram c-pictogram--instagram-fill" style={{ display: 'inline-block', margin: '0px 15px' }}>
                                <BsInstagram />
                            </span>
                        </a>
                        <a href="https://twitter.com/qrates_com" >
                            <span className="c-pictogram c-pictogram--twitter-fill" style={{ display: 'inline-block', margin: '0px 15px' }}>
                                <AiFillTwitterSquare />
                            </span>
                        </a>
                    </div>
                    <ul className="c-public-footer__legal-nav">
                        <li>
                            <a className="f-adjust-ja" href="/terms">Terms of Service
                            </a>
                        </li>
                        <li>
                            <a className="f-adjust-ja" href="/privacy">Privacy Policy</a>
                        </li>
                        <li>
                            <a className="f-adjust-ja" href="/legal">Legal Information</a>
                        </li>
                        <li className="u-hidden-tablet">
                            <small className="c-public-footer__small">© TDMS Inc.</small>
                        </li>
                    </ul>
                    <small className="c-public-footer__small u-hidden-desktop-only">© TDMS Inc.</small>
                </div>
            </div>
        </footer>
    )
}

export default Footercompo