import React from 'react'

import {isTouch} from '../../utils/condition'

const Keypad = props => {
    const {
        handleKeyPick,
    } = props
    return (
        <div className='__keypads'>
            <div className='__slider'/>
            <div className={`__key-wrapper ${isTouch?'':'pointer-grp'}`}>
                <div id='clear' onClick={handleKeyPick} className='__clear'>C</div>
                {/* <div id='negPos' onClick={handleKeyPick} className='__negPos'>
                    <div className='__add'/>
                    <div className='__subtract'/>
                </div> */}
                <div id='modulo' onClick={handleKeyPick} className='__modulo __operator'>
                    <div />
                </div>
                <div id='backBtn' onClick={handleKeyPick} className='__back-button __add'>
                    <div/>
                </div>
                <div id='divide' onClick={handleKeyPick} className='__divide __operator'>
                    <div/>
                </div>
                
                <div id='num7' onClick={handleKeyPick} className='__number'>
                    7
                </div>
                <div id='num8' onClick={handleKeyPick} className='__number'>
                    8
                </div>
                <div id='num9' onClick={handleKeyPick} className='__number'>
                    9
                </div>
                <div id='multiply' onClick={handleKeyPick} className='__multiply __add __operator'/>
                
                <div id='num4' onClick={handleKeyPick} className='__number'>
                    4
                </div>
                <div id='num5' onClick={handleKeyPick} className='__number'>
                    5
                </div>
                <div id='num6' onClick={handleKeyPick} className='__number'>
                    6
                </div>
                <div id='subtract' onClick={handleKeyPick} className='__subtract __operator'/>
                
                <div id='num1' onClick={handleKeyPick} className='__number'>
                    1
                </div>
                <div id='num2' onClick={handleKeyPick} className='__number'>
                    2
                </div>
                <div id='num3' onClick={handleKeyPick} className='__number'>
                    3
                </div>
                <div id='add' onClick={handleKeyPick} className='__add __operator'/>
                
                <div id='num0' onClick={handleKeyPick} className='__zero'>
                    0
                </div>
                <div id='decimal' onClick={handleKeyPick} className='__decimal'/>
                <div id='equals' onClick={handleKeyPick} className='__equals'/>
            </div>
        </div>
    )
}

export default Keypad