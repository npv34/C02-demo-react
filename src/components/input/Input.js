import {useState} from "react";

function Input({showMessage}) {
    const [error, setError] = useState("Input is invalid")
    const changeText = (e) => {
        let keyword = e.target.value;
        let pattern = /^[a-zA-Z]{8,}$/;
        let invalid = pattern.test(keyword)
        if (!invalid) {
            setError("Input is invalid")
        }else {
            setError("")
        }
    }

    return (
        <>
            <input type="text" onChange={(e) => changeText(e)}/>
            {error ? <p>{error}</p> : <p style={{color: "green"}}>Pass</p> }
        </>
    )
}
export default Input;
