import React from 'react'
import FingerPrint from '../svgRaw/FingerPrint'

import {isTouch} from '../../utils/condition'

const HomeScreen = props => {
    return (
        <div className='home-screen'>
            <img src='/img/wallpaper.jpg' alt='wallpaper.jpg'/>
            <div className='__lock-wrapper'>
                <div
                    className={`__toptounlock ${isTouch?'':'pointer'}`}
                    onClick={() => props.onUsed()}
                >
                    <div className='pulse'/>
                    <FingerPrint />
                </div>
                <span>Tap to unlock</span>
            </div>
        </div>
    )
}

export default HomeScreen