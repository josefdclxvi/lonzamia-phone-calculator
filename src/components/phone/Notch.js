import React from 'react'

import WifiIcon from '../svgRaw/WifiIcon'
import BatteryIcon from '../svgRaw/BatteryIcon'
import AlarmClockIcon from '../svgRaw/AlarmClockIcon'

const Notch = () => {
    const getDate = new Date()
    const getHours = getDate.getHours() < 10 ? `0${getDate.getHours()}` : getDate.getHours()
    const getMinutes = getDate.getMinutes() < 10 ? `0${getDate.getMinutes()}` : getDate.getMinutes()
    
    return (
        <div className='__notif-area'>
            <div className='__notch'>
                <div className='__camera'>
                    <div className='__lens' />
                </div>
            </div>
            <div className='__notif-bar'>
                <div className='__left'>
                    <div className='__time'>
                        <span>{getHours}</span><span>:{getMinutes}</span>
                    </div>
                    <div className='__wifi'>
                        <WifiIcon />
                    </div>
                </div>
                <div className='__just-to-cover-something' />
                <div className='__right'>
                    <div className='__alarm'>
                        <AlarmClockIcon />
                    </div>
                    <div className='__battery'>
                        <BatteryIcon />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Notch