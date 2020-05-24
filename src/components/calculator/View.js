import React from 'react'

import { getFontSize, numLength } from '../../utils/func'
import { isInfinity } from '../../utils/condition'

const View = props => {
    const {
        display,
        charLength,
        result,
    } = props
    
    // const res = !isNaN(parseFloat(result))
    //     ? (numLength(result) > 17 ? `= ${parseFloat(result).toExponential(2)}` : `= ${result.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}` )
    //     : 'Invalid tae'
    
    // props.shakeIt(!isNaN(parseFloat(result)))

    const results = numLength(result) > 17 ? `= ${parseFloat(result).toExponential(2)}` : `= ${result.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}`

    // const results = isInfinity(result) ? `wtf?` : res

    return (
        <>
            <div className='__view'>
                <span
                    className={`__equation ${result !== '' ? '__has-result' : '' }`}
                    style={{fontSize: `${getFontSize(charLength)}em`}}
                >{display}</span>
                {
                    result !== '' &&
                    <span
                        className={`__result`}
                        style={{fontSize: `${getFontSize(results.length - 3)}em`}}
                    >{results}</span>
                }
            </div>
            <div className=''>
                {
                    charLength > 24 &&
                    <span>Maximum character reached</span>
                }
            </div>
        </>
    )
}

export default View