import React from 'react'
import TopOne from '../../../../Asset/topImage.png'
import Toptwo from '../../../../Asset/top_section_image.png'
import './First.css'
import Circlepng from '../../../../Asset/Paidpng.svg'

const FirstCompo = () => {
    return (
        <>
            <div className="p-top--grid">
                <div className="p-top__left">
                    <h1 className="c-label--pages--white">WHY QRATES</h1>
                    <h2 className="p-top__heading">Music in your hands.
                        <br />
                        <span>Without the barriers.
                        </span>
                    </h2>
                    <p className="p-top__explanation">
                        <span className="f-adjust-ja">
                            Full-service production, a global retail network, customer support - and you keep up to 85% of profits. ↓
                        </span>
                    </p>
                </div>
                <div className="p-top__right--why">
                    <div className="p-top__image--one">
                        <img src={TopOne} alt='topone' style={{ width: '100%' }} />
                    </div></div>
            </div>
            <div className="p-top__container">
                <div className="p-top__image--two">
                    <img src={Toptwo} alt='top' style={{ width: '80%', marginLeft: '30px', height: '80%' }} />
                </div>
                <img className="c-sticker p-top__paid-sticker"
                    src={Circlepng} alt='circle' />
            </div>
        </>
    )
}

export default FirstCompo