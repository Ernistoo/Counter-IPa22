import { useState } from "react";

function Counter() {
    const [num, setNum] = useState(0);
    const [multiplier, setMultiplier] = useState(1);
    function addOne() {
        console.log("Funkcija izsaukta");
        setNum(num+1);
        console.log("x vertiba ir " + num);
    }
    function minusOne() {
        setNum(num-1);
    }
    function multiply(){
        setNum(num * multiplier);
    }
    function handleChange(e){
        setMultiplier(e.target.value);
    }


    return (
    <div>
        <button onClick={addOne}>+1</button>
        <button onClick={minusOne}>-1</button>
        <input type="number" value={multiplier} onChange={handleChange} />
        <button onClick={multiply}>Reizinat</button>
        <h1>{num}</h1>
    </div>

    
    )
 }
 
 export default Counter;