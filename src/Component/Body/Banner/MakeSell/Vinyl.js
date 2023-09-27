import React from 'react'
import './MakeSell.css'
import Vinylpng from '../../../../Asset/vinyl-love.png'
import Cassetepng from '../../../../Asset/cassette.png'

const Vinyl = () => {
    return (
        <>
            <div className="p-why__choose-type-section choose-type-section">
                <p className="choose-type-section__title">
                    <span className="f-adjust-ja"> Choose from two formats and three project types.
                    </span>
                </p>
            </div>




            <div className="c-column--table">
                <section className="p-why__column--make-sell c-column--table__left c-column--center__inner" style={{ backgroundColor: '#497775' }}>
                    <div className="c-label--pages--white">VINYL PRODUCTION</div>
                    <h3 className="c-column--center__title">Vinyl</h3>
                    <p className="c-column--center__explanation">
                        <span className="f-adjust-ja">Put your music on physical, sooner. Take pre-orders from fans and we'll take care of the rest.</span>
                    </p>
                    <div className="p-why__column-auto-container" style={{ display: 'flex', flexDirection: 'column', position: 'relative' }}>
                        <div className="p-why__column-sticker">
                            <img style={{ width: "auto", height: "209px", position: "relative" }} src={Vinylpng} alt='cassete' />
                        </div>
                        <a className="c-button--large c-button--black u-hidden-tablet" href="/">MAKE YOUR OWN VINYL</a>
                    </div>
                    <a className="c-button--large c-button--black u-hidden-desktop-only" href="/">LEARN MORE
                    </a>
                </section>
                <section className="p-why__column--funding c-column--table__right c-column--center__inner" style={{ backgroundColor: '#81836C' }}>
                    <div className="c-label--pages--white">CASSETTE DUPLICATION</div>
                    <h3 className="c-column--center__title">Cassette</h3>
                    <p className="c-column--center__explanation">
                        <span className="f-adjust-ja">Rally your fans and gather pledges. Press the exact number of records you need, without having to pay anything upfront.
                        </span>
                    </p>
                    <div className="p-why__column-auto-container" style={{ display: 'flex', flexDirection: 'column', position: 'relative' }}>
                        <div className="p-why__column-sticker">
                            <img className="c-sticker p-why__column-sticker-image--funding"
                                style={{ width: "auto", height: "209px", position: "relative" }} src={Cassetepng} alt='cassete' />
                        </div>
                        <a className="c-button--large c-button--black u-hidden-tablet" href="/">LEARN MORE
                        </a>
                    </div>
                    <a className="c-button--large c-button--black u-hidden-desktop-only" href="/">LEARN MORE</a>
                </section>
            </div>
        </>
    )
}

export default Vinyl