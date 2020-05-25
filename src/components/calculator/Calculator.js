import React from 'react'

import Keypad from './Keypad'
import View from './View'

import { operator, getSymbol } from '../../utils/operators'
import { isInfinity } from '../../utils/condition'

class Calc extends React.Component {
    constructor(){
        super()
        this.state = {
            display: '',
            equation: '',
            result: '',
            charLength: 0,

            isNeg: false,
            haveResult: false,
        }
    }

    handleKeyPick = e => {
        let equation = this.state.equation
        let display = this.state.display
        const triggeredKey = e.currentTarget.id

        const ifNum = triggeredKey.includes('num')
        const key = ifNum ? triggeredKey.substr(-1)
        : (triggeredKey !== 'decimal' ? triggeredKey : getSymbol('decimal').code)

        const clearFilter = !isNaN(parseInt(key)) ? key : ''

        if (key === 'clear' || this.state.haveResult) {
            return this.reset(clearFilter)
        } else if ((key >= 0 && key <= 9) || key === getSymbol('decimal').code) {
            // let eq = equation.match(/\d/g)
            // let aos = eq !== null ? eq.join('') : ''

            this.setState({charLength: equation.length})
            this.props.charLength(equation.length > 24)
            if (equation.length > 24) return;
            
            equation += key
            display += key
        } else if (operator.indexOf(key) !== -1) {
            this.setState({charLength: equation.length})
            this.props.charLength(equation.length > 24)
            if (equation.length > 24) return;

            equation += ' ' + getSymbol(key).code + ' '
            display += ' ' + getSymbol(key).symbol + ' '
        } else if (key === 'equals') {
            try {
                // eslint-disable-next-line
                // eval is dangerous, please dont try this at your home
                const equaRes = eval(equation)
                const result = Number.isInteger(equaRes) ? equaRes : equaRes.toFixed(2)
                const res = isNaN(parseFloat(result)) ? 'Invalid' : result

                this.props.crackIt(isInfinity(result))
                this.props.shakeIt(isInfinity(result))
                
                this.setState({result: res,haveResult: true})
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

    reset = tKey => {
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
                <Keypad handleKeyPick={this.handleKeyPick} />
            </div>
        )
    }
}

export default Calc