import {evaluate} from 'mathjs'

function calc(str:string){
    try {
        return String(evaluate(str));
        
    } catch (error) {
        return "Invalid Exprecion"
    }
}

export default calc;