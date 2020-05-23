import React from 'react'

const View = props => {
    const {
        display,
        // equation,
        result
    } = props
    return (
        <div className='__view'>
            <span className={`__equation ${result !== '' ? '__has-result' : '' }`}>{display}</span>
            {
                result !== '' &&
                <span className='__result'>{result}</span>
            }
        </div>
    )
}

export default View