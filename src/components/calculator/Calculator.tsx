import * as React from 'react';
import Display from '../display';
import Buttons from '../buttons';
import './styles.css'

function Calculator(){
    return (
        <main className="calculator__main">
            <Display/>
            <Buttons/>
        </main>
    )
}

export default Calculator;