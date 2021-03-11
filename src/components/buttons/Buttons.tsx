import * as React from 'react';


function Buttons(){
    const value_buttons:string[] = [
        '','','back','/',
        '7','8','9','*',
        '4','5','6','-',
        '1','2','3','+',
        '','0','.','='
    ]
    return (
        <section className="section__buttons">
            <ul className="ul__buttons">
                {value_buttons.map(
                    (v,i)=> <li key={i}>{v}</li>
                )}
            </ul>
        </section>
    )
}

export default Buttons;