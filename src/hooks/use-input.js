import { useState } from "react";

const useInput = (checkValidInput) => {
  const [inputValue, setInputValue] = useState('');
  const [inputTouched, setInputTouched] = useState(false);

  const valueIsValid = checkValidInput(inputValue);
  const hasError = !valueIsValid && inputTouched;


  const blurHandler = () => {
    !inputTouched && setInputTouched(true);
  }

  const changeHandler = event => {
    setInputValue(event.target.value);
  }

  const reset = () => {
    setInputValue("");
    setInputTouched(false);
  }

  return {
    inputValue,
    valueIsValid,
    hasError,
    blurHandler, 
    changeHandler, 
    reset,
  }
}

export default useInput;