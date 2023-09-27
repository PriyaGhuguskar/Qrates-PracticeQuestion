import React from 'react'
import PressSell from '../../../../Asset/press_sell.png'
import crowding from '../../../../Asset/crowdfunding.png'
import './MakeSell.css'
import Vinyl from './Vinyl'

const MakeSell = () => {
    return (
        <>
            <Vinyl />
            <div className="c-column--second-heading u-hidden-tablet">
                <p className="c-column__text">
                    <span className="f-adjust-ja">
                        Choose the project type that best suits your needs depending on pressing costs and delivery time.
                    </span>
                </p>
            </div>
            <div className="c-column--table">
                <section className="p-why__column--make-sell c-column--table__left c-column--center__inner">
                    <div className="c-label--pages--white">GET INTO IT</div>
                    <h3 className="c-column--center__title">Make &amp; Sell</h3>
                    <p className="c-column--center__explanation">
                        <span className="f-adjust-ja">Put your music on physical, sooner. Take pre-orders from fans and we'll take care of the rest.</span>
                    </p>
                    <div className="p-why__column-auto-container" style={{ display: 'flex', flexDirection: 'column', position: 'relative' }}>
                        <div className="p-why__column-sticker">
                            <img style={{ width: "auto", height: "209px", position: "relative" }} className="c-sticker p-why__column-sticker-image--sell" src={PressSell} />
                        </div>
                        <a className="c-button--large c-button--black u-hidden-tablet" href="/">LEARN MORE
                        </a>
                    </div>

                </section>
                <section className="p-why__column--funding c-column--table__right c-column--center__inner">
                    <div className="c-label--pages--white">NO RISK, NO WASTE</div>
                    <h3 className="c-column--center__title">Crowdfunding</h3>
                    <p className="c-column--center__explanation">
                        <span className="f-adjust-ja">Rally your fans and gather pledges. Press the exact number of records you need, without having to pay anything upfront.
                        </span>
                    </p>
                    <div className="p-why__column-auto-container" style={{ display: 'flex', flexDirection: 'column', position: 'relative' }}>
                        <div className="p-why__column-sticker">
                            <img className="c-sticker p-why__column-sticker-image--funding"
                                style={{ width: "auto", height: "209px", position: "relative" }} src={crowding} />
                        </div>
                        <a className="c-button--large c-button--black u-hidden-tablet" href="/">LEARN MORE
                        </a>
                    </div>
                </section>
            </div>
        </>
    )
}

export default MakeSell