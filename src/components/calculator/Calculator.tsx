import * as React from 'react';
import Display from '../display';
import Buttons from '../buttons';
import './styles.css'
import calc from '../../app/Calculator'

function Calculator(){
    let [info, setInfo] = React.useState('');
    let [result, setResult] = React.useState('');
    const writeInfo = (msg:string)=>{
        setInfo(info+msg);
    }
    const resultFunc = ()=>{
        setResult(calc(info))
    }
    const back = () =>{
        setInfo(info.slice(0,-1));
    }
    return (
        <main className="calculator__main">
            <Display info={info} result={result}/>
            <Buttons back={back} resultFunc = {resultFunc} writeInfo={writeInfo}/>
        </main>
    )
}

export default Calculator;