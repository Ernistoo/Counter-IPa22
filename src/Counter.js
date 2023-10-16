import { useState } from "react";

function Counter() {
    const [num, setNum] = useState(0);
    function addOne() {
        console.log("Funkcija izsaukta");
        setNum(num+1);
        console.log("x vertiba ir " + num);
    }
    function minusOne() {
        setNum(num-1);
    }

    return (
    <div>
        <button onClick={addOne}>+1</button>
        <button onClick={minusOne}>-1</button>
        <h1>{num}</h1>
    </div>

    
    )
 }
 
 export default Counter;