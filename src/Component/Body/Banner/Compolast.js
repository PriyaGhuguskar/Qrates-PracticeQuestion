import React from 'react'
import './banner.css'

const Compolast = () => {
    return (
        <div className="c-column--table">
            <div className="p-why__column--store c-column--table__left">
                <div className="p-why__column-image--store">
                </div>
                <div className="c-column--center__inner">
                    <div className="c-label--pages--white">RETAIL NETWORK
                    </div>
                    <h3 className="c-column--center__title">
                        <span className="f-adjust-ja">Worldwide distro,
                            <br />demystified.</span>
                    </h3>
                    <p className="c-column--center__explanation">
                        <span className="f-adjust-ja">
                            Get direct access to over 150 of our retail partners across the globe.
                        </span>
                    </p>
                    <div className="p-why__column-button">
                        <a className="c-button c-button--black-line-white" style={{ borderColor: 'white', border: '1px solid', marginTop: '20px' }}
                            href="/">
                            CONTACT US
                        </a>
                    </div>
                </div>
            </div>
            <div className="p-why__column--support c-column--table__right">
                <div className="p-why__column-image--support">
                </div>
                <div className="c-column--center__inner">
                    <div className="c-label--pages--white">CUSTOMER SUPPORT</div>
                    <h3 className="c-column--center__title">
                        <span className="f-adjust-ja">Here to help,
                            <br />whenever you need it.
                        </span>
                    </h3>
                    <p className="c-column--center__explanation">
                        <span className="f-adjust-ja">
                            Whether you're an artist in the middle of product, or a fan with questions about your order; our team is here to help.
                        </span>
                    </p>
                    <div className="p-why__column-button">
                        <a className="c-button c-button--black" href="/">CONTACT US
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Compolast