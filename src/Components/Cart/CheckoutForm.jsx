import { Box, TextField } from '@material-ui/core'
import React from 'react'
import useInput from "../../hooks/use-input"
import CheckoutButtons from "./CheckoutButtons"

const checkForInput = (value) => {
  return value.trim() !== ""
}

const checkForNumber = (value) => {
  return !isNaN(value) && value.trim() !== "";
}

export default function CheckoutForm({closeModal, orderIsValid, handleSubmit}) {

  const {
    inputValue: nameValue, 
    valueIsValid: nameIsValid,
    hasError: nameHasError,
    blurHandler: nameBlurHandler,
    changeHandler: nameChangeHandler,
  } = useInput(checkForInput)

  const {
    inputValue: streetValue, 
    valueIsValid: streetIsValid,
    hasError: streetHasError,
    blurHandler: streetBlurHandler,
    changeHandler: streetChangeHandler,
  } = useInput(checkForInput)

  const {
    inputValue: cityValue, 
    valueIsValid: cityIsValid,
    hasError: cityHasError,
    blurHandler: cityBlurHandler,
    changeHandler: cityChangeHandler,
  } = useInput(checkForInput)

  const {
    inputValue: zipValue, 
    valueIsValid: zipIsValid,
    hasError: zipHasError,
    blurHandler: zipBlurHandler,
    changeHandler: zipChangeHandler,
  } = useInput(checkForNumber)

  const formIsValid = nameIsValid && streetIsValid && cityIsValid && zipIsValid;

  return (
    <form>
      <Box display="flex" mt={3}>
        <TextField 
          required
          size="small" 
          id="name" 
          label="Name"
          variant="outlined"
          value={nameValue}
          onChange={(e) => nameChangeHandler(e)}
          onBlur={nameBlurHandler}
          error={nameHasError}
          helperText={nameHasError? "Name is required" : ""}
        />
        <TextField 
          required
          size="small" 
          id="street" 
          label="Street"
          variant="outlined"
          value={streetValue}
          onChange={(e) => streetChangeHandler(e)}
          onBlur={streetBlurHandler}
          error={streetHasError}
          helperText={streetHasError? "Street is required" : ""}
        />
      </Box>
      <Box display="flex" mt={3} mb={3}>
      <TextField 
          required
          size="small" 
          id="city" 
          label="City"
          variant="outlined"
          value={cityValue}
          onChange={(e) => cityChangeHandler(e)}
          onBlur={cityBlurHandler}
          error={cityHasError}
          helperText={cityHasError? "City is required" : ""}
        />
        <TextField 
          required
          size="small" 
          id="zipcode" 
          label="Zipcode"
          variant="outlined"
          value={zipValue}
          onChange={(e) => zipChangeHandler(e)}
          onBlur={zipBlurHandler}
          error={zipHasError}
          helperText={zipHasError? "Zipcode is required & must be a number" : ""}
        />
      </Box>
      <CheckoutButtons 
          left={{
            text: "Close",
            function: closeModal,
          }}
          right={{
            text: "Complete Order",
            function: () => handleSubmit({
                name: nameValue,
                street: streetValue,
                city: cityValue,
                zipcode: zipValue,
              }),
            isDisabled: !formIsValid || !orderIsValid,
          }}
        />
    </form>
  )
}
