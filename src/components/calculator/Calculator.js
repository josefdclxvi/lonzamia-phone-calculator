import React from 'react'

import Keypad from './Keypad'
import View from './View'

import { getSymbol } from '../../utils/operators'

class Calc extends React.Component {
    constructor(){
        super()
        this.state = {
            display: '',
            equation: '',
            result: '',
            isNeg: false,
            haveResult: false,
        }
    }

    onKemerot = e => {
        let equation = this.state.equation
        let display = this.state.display
        const triggeredKey = e.currentTarget.id

        const ifNum = triggeredKey.includes('num')
        const key = ifNum ? triggeredKey.substr(-1)
        : (triggeredKey !== 'decimal' ? triggeredKey : getSymbol('decimal').code)

        const clearFilter = !isNaN(parseInt(key)) ? key : ''

        if (key === 'clear' || this.state.haveResult) {
            return this.clear(clearFilter)
        } else if ((key >= 0 && key <= 9) || key === getSymbol('decimal').code) {
            let eq = equation.match(/\d/g)
            let aos = eq !== null ? eq.join('') : ''
            if (aos.length === 10) return;
            
            equation += key
            display += key
        } else if (['modulo','add', 'subtract', 'multiply', 'divide'].indexOf(key) !== -1) {
            equation += ' ' + getSymbol(key).code + ' '
            display += ' ' + getSymbol(key).symbol + ' '
        } else if (key === 'equals') {
            try {
                // eslint-disable-next-line
                const equaRes = eval(equation)
                const result = Number.isInteger(equaRes) ? equaRes : equaRes.toFixed(2)
                const resFilter = result === 'Infinity' || result === 'undefined'

                const results = resFilter ? `wtf?` : `= ${result}`
                this.props.crackIt(resFilter)
                
                this.setState({result: results,haveResult: true})
            } catch (error) {
                this.setState({result: 'Invalid',haveResult: true,})
                this.props.shakeIt(true)
            }
        }
        else {
            equation = equation.trim()
            equation = equation.substr(0, equation.length - 1)
            display = display.trim()
            display = display.substr(0, display.length - 1)
        }
        
        this.setState({
            display: display,
            equation: equation
        })
    }

    clear = tKey => {
        this.props.shakeIt(false)
        this.setState({
            display: tKey,
            equation: tKey,
            result: '',
            isNeg: false,
            haveResult: false,
        })
    }

    render() {
        return (
            <div className='calculator'>
                <View {...this.state}/>
                <Keypad onKemerot={this.onKemerot} />
            </div>
        )
    }
}

export default Calc