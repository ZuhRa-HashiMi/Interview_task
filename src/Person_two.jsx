// import react from "react";
// import {useState} from "react";
import UapdatedComponent from "./HOC";

function Person2({money, handleIncrease}) {
   
    return (
        <div>
            <h2>Zuhra is Offering ${money}</h2>
            <button onClick={handleIncrease}>Increase Money</button>
        </div>
    );
}

export default UapdatedComponent(Person2);