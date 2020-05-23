import React from 'react'

import {isTouch} from '../../utils/touchDetect'

const Keypad = props => {
    const {
        onKemerot,
    } = props
    return (
        <div className='__keypads'>
            <div className='__slider'/>
            <div className={`__key-wrapper ${isTouch?'':'pointer-grp'}`}>
                <div id='clear' onClick={onKemerot} className='__clear'>C</div>
                {/* <div id='negPos' onClick={onKemerot} className='__negPos'>
                    <div className='__add'/>
                    <div className='__subtract'/>
                </div> */}
                <div id='modulo' onClick={onKemerot} className='__modulo __operator'>
                    <div />
                </div>
                <div id='backBtn' onClick={onKemerot} className='__back-button __add'>
                    <div/>
                </div>
                <div id='divide' onClick={onKemerot} className='__divide __operator'>
                    <div/>
                </div>
                
                <div id='num7' onClick={onKemerot} className='__number'>
                    7
                </div>
                <div id='num8' onClick={onKemerot} className='__number'>
                    8
                </div>
                <div id='num9' onClick={onKemerot} className='__number'>
                    9
                </div>
                <div id='multiply' onClick={onKemerot} className='__multiply __add __operator'/>
                
                <div id='num4' onClick={onKemerot} className='__number'>
                    4
                </div>
                <div id='num5' onClick={onKemerot} className='__number'>
                    5
                </div>
                <div id='num6' onClick={onKemerot} className='__number'>
                    6
                </div>
                <div id='subtract' onClick={onKemerot} className='__subtract __operator'/>
                
                <div id='num1' onClick={onKemerot} className='__number'>
                    1
                </div>
                <div id='num2' onClick={onKemerot} className='__number'>
                    2
                </div>
                <div id='num3' onClick={onKemerot} className='__number'>
                    3
                </div>
                <div id='add' onClick={onKemerot} className='__add __operator'/>
                
                <div id='num0' onClick={onKemerot} className='__zero'>
                    0
                </div>
                <div id='decimal' onClick={onKemerot} className='__decimal'/>
                <div id='equals' onClick={onKemerot} className='__equals'/>
            </div>
        </div>
    )
}

export default Keypad