import React from 'react'

import Notch from './Notch'
import Calc from '../calculator/Calculator'
import Backbutton from '../svgRaw/BackButton'

import {isTouch} from '../../utils/condition'

class Phone extends React.Component {
    state = {
        isUsed: false,
        isShake: false,
        isCrack: false,
    }
    
    shakeItWell = x => {
        this.setState({isShake: x})
    }
    crackLol = y => {
        this.setState({isCrack: y})
    }

    render() {
        const { isUsed, isShake, isCrack } = this.state
        return (
            <div className='phone-wrapper'>
                <div className={`__phone-shadow ${!isUsed ? '__default-state' : ''}`}>
                    <div/>
                </div>
                <div className={`phone ${!isUsed ? '__default-state' : ''} ${isShake ? '__shake' : ''}`}>
                    <div className='__frame'>
                        <div className='__layer-1'>
                            <div className='__screen'>
                                <div className='__earpiece'/>
                                <div className={isCrack ? '__crack' : '' } onClick={() => this.crackLol(false)}>
                                    <div className='__modal'>
                                        {
                                            isCrack &&
                                            <span>Kaya wala kang jowa e HAHA dividing something by nothing makes no sense</span>
                                        }
                                    </div>
                                </div>
                                <div className='__inner-screen'>
                                    <Notch />
                                    <Calc shakeIt={this.shakeItWell} crackIt={this.crackLol} />
                                    <div className='__nav-bar'>
                                        <div className={isTouch?'':'pointer'}>
                                            <div className='__square'/>
                                        </div>
                                        <div className={isTouch?'':'pointer'} onClick={() => this.setState({isUsed: true})}>
                                            <div className='__circle'/>
                                        </div>
                                        <div className={isTouch?'':'pointer'} onClick={() => this.setState({isUsed: false})}>
                                            <Backbutton/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='__top-view'></div>
                    <div className='__right-side-view'></div>
                    <div className='__bottom-view'></div>
                    <div className='__left-side-view'></div>
                </div>
            </div>
        )
    }
}

export default Phone