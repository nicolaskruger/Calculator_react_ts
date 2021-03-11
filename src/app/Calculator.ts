import mathjs from 'mathjs'

function calc(str:string){
    return String(mathjs.evaluate(str));
}

export default calc;