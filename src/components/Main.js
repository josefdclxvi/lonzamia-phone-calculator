import React from 'react'
import Phone from './phone/Phone'

class Main extends React.Component {
    render(){
        return(
            <main>
                <div className='main-wrapper'>
                    <Phone />
                </div>
            </main>
        )
    }
}

export default Main