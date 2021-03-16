
import * as React from 'react';
import './styles.css';

interface PropsButtons{
    writeInfo:(msg:string)=>void;
    back:()=>void;
    resultFunc:()=>void;
}
interface Swith{
    back:()=>void,
    '=':()=>void,
    [key:string]:()=>void
}

function Buttons({writeInfo,back,resultFunc}:PropsButtons){
    const value_buttons:string[] = [
        '','','back','/',
        '7','8','9','*',
        '4','5','6','-',
        '1','2','3','+',
        '','0','.','='
    ]
    const swith:Swith = {
        'back':back,
        '=': resultFunc
    }
    const oper = (v:string)=>{
        const func = swith[v];
        if(func!==undefined)
            func()
        else
            writeInfo(v);
    }
    return (
        <section className="section__buttons">
            <ul className="ul__buttons">
                {value_buttons.map(
                    (v,i)=> <li onClick={()=>{oper(v)}} className="li__butons" key={i}>{v}</li>
                )}
            </ul>
        </section>
    )
}

export default Buttons;