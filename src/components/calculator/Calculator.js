import {useState} from "react";

function Calculator({title}) {
    const [input, setInput] = useState("");


    const handleSetInput = (value) => {
        setInput(input + value)
    }

    const handleCalculate = () => {
        let result = eval(input);
        setInput(result)
    }

    return (
        <>
            <table>
                <tr>
                    <td colSpan="4">
                        <input type="text" value={input}/>
                    </td>
                </tr>
                <tr>
                    <td><button onClick={() => handleSetInput(1)}> 1</button></td>
                    <td><button onClick={() => handleSetInput(2)}>2</button></td>
                    <td><button>3</button></td>
                    <td><button>4</button></td>
                </tr>

                <tr>
                    <td><button onClick={() => handleSetInput("+")}>+</button></td>
                    <td><button onClick={() => handleSetInput("-")}>-</button></td>
                    <td><button onClick={() => handleSetInput("*")}>X</button></td>
                    <td><button onClick={() => handleSetInput("/")}>/</button></td>
                </tr>
                <tr>
                    <td><button onClick={() => handleCalculate()}>=</button></td>
                </tr>
            </table>
        </>
    )
}

export default Calculator;
