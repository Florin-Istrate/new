import "./calculator.css"
import { useState } from "react"

const Calculator = () => {

    const [calc, setCalc] = useState("");
    const [result, setResult] = useState("");

    const operator = ["/", "*", "+", "-", "."];

    const handleSetCalc = (value) => {
        if(operator.includes(value) && calc === "" ||
        operator.includes(value) && operator.includes(calc.slice(-1))
        ){
            return
        }
        setCalc(calc + value );

        if(!operator.includes(value)){
            setResult(eval(calc+value).toString())
        }

    }

    const createNumbers = () => {
        const number = []

        for(let i=1; i < 10; i++) {
            number.push(
                <button onClick={() => handleSetCalc(i.toString())} key={i}>{i}</button>
            )
        }
        return number
    }

    const calculate = () => {
        setCalc(eval(calc).toString());
    }

    const deleteLast = () => {
        if(calc === "") {
            return
        }
        const newVal = calc.slice(0, -1);
        setCalc(newVal)
    }

    return (
        <div className="calculator-wrapper">

        <div className="calculator">
            <div className="display">
                {result ? <span>({ result})</span> : ""} { calc || "0"}
            </div>

            <div className="operators">
                <button onClick={() => handleSetCalc("/")}>/</button>
                <button onClick={() => handleSetCalc("*")}>*</button>
                <button onClick={() => handleSetCalc("-")}>-</button>
                <button onClick={() => handleSetCalc("+")}>+</button>
                <button onClick={deleteLast}>DEL</button>
            </div>

            <div className="numbers">
                {createNumbers()}
                <button onClick={() => handleSetCalc("0")}>0</button>
                <button onClick={() => handleSetCalc(".")}>.</button>
                <button onClick={calculate}>=</button>
            </div>
        </div>
        </div>
    
    )
}


export default Calculator