import * as React from 'react';
import './styles.css'

interface PropDisplay{
    info:string,
    result:string
}

function Display({info,result}:PropDisplay){
    return (
        <section className="display__section">
            <h1 className='h1__display'>
                {info}
            </h1>
            <h2 className='h2__display'>
                {result}
            </h2>
        </section>
    )
}

export default Display