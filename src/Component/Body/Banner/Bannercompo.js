import React from 'react'
import Compolast from './Compolast'
import Servicecompo from './serviceBody/Servicecompo'
import StartProject from './StartProject'
import MakeSell from './MakeSell/MakeSell'
import FirstCompo from './StartPage/FirstCompo'

const Bannercompo = () => {
    return (
        <div style={{ overflow: 'hidden' }} >
            <FirstCompo />
            <MakeSell />
            <StartProject />
            <Servicecompo />
            <Compolast />
        </div>
    )
}

export default Bannercompo