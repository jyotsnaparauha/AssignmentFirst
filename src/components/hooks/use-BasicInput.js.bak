import { useState } from "react";
const useBasicInput=(validateValue)=>{
    const[enteredValue,setEnteredValue]=useState('');
    const[isValid,setIsValid]=useState(false);
    const enteredValueIsValid=validateValue(enteredValue);
    const hasError=!enteredValueIsValid && isValid;
    const inputChangeHandler=(event)=>{
        setEnteredValue(event.target.value);

    }
    const InputBlurHandler=(event)=>{
        setIsValid(true);
    }
    const reset=()=>{
       setEnteredValue('');
       setIsValid(false);
    }
    return {
         value:enteredValue,
         hasError:hasError,
         isValid:isValid,
         InputBlurHandler,
         inputChangeHandler,
         reset

    }
}
export default useBasicInput;