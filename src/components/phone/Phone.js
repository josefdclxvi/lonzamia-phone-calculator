import React from 'react'

import Notch from './Notch'
import Calc from '../calculator/Calculator'
import Backbutton from '../svgRaw/BackButton'
import HomeScreen from '../phone/HomeScreen'

import {isTouch} from '../../utils/condition'

class Phone extends React.Component {
    state = {
        isUsed: false,
        isActiveCalc: false,
        isShake: false,
        isCrack: false,
        charLength: false,
    }
    
    shakeItWell = x => {
        this.setState({isShake: x})
    }
    crackLol = y => {
        this.setState({isCrack: y})
    }
    charLength = z => {
        this.setState({charLength: z})
    }

    render() {
        const { isUsed, isShake, isCrack, charLength, isActiveCalc } = this.state
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
                                <div className={`${charLength ? 'modal-wrapper' : ''} ${isCrack ? '__crack' : '' }`}
                                    onClick={() => (
                                        // eslint-disable-next-line
                                        this.crackLol(false),
                                        this.charLength(false)
                                    )}
                                >
                                    <div className='__modal'>
                                        {
                                            isCrack &&
                                            <span>Kaya wala kang jowa e HAHA dividing something by nothing makes no sense</span>
                                        }
                                        {
                                            charLength &&
                                            <span>Maximum character reached</span>
                                        }
                                    </div>
                                </div>
                                <div className='__inner-screen'>
                                    <Notch />
                                    {
                                        isActiveCalc ?
                                        <Calc
                                            shakeIt={this.shakeItWell}
                                            crackIt={this.crackLol}
                                            charLength={this.charLength}
                                        />
                                        :
                                        <HomeScreen onUsed={() => this.setState({isActiveCalc: true, isUsed: true})} />
                                    }
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
                </div>
            </div>
        )
    }
}

export default Phone