import { useReducer } from "react";
 const initialInputState ={
     value :'',
     isTouched: false
 }
const inputSatateReducer = (state ,action)=>{ 
    if(action.type==='INPUT'){
        return{value : action.value ,isTouched : state.isTouched}

    }
    if(action.type==='BLUR'){
        return{isTouched : true ,value :state.value}

    }
    if(action.type==='RESET'){
        return {isTouched : false ,value :''}
    }

    return {
        value :'',
        isTouched:false
    }
}
 const useInputReducer =(validateValue)=>{
  const[inputState,dispatch]=   useReducer(inputSatateReducer,initialInputState);
  const valueIsValid = validateValue(inputState.value);
  const hasError = !valueIsValid && inputState.isTouched;
  const valueChangeHandler = (event) => {
      dispatch({type :'INPUT',value:event.target.value});
   
  };

  const InputBlurHandler = (event) => {
    dispatch({type :'BLUR'});
   
  };
  const reset=()=>{
    dispatch({type :'RESET'});
  }
  return {
    value: inputState.value,
    isvalid:valueIsValid,
    hasError: hasError,
    valueChangeHandler,
    InputBlurHandler,
    reset
}
}
export default useInputReducer;