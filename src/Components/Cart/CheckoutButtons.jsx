import { Box, Button } from '@material-ui/core'
import React from 'react'

export default function CheckoutButtons({left, right}) {
  return (
    <Box display="flex" justifyContent="flex-end">
      <Button 
        onClick={left.function}
        variant="outlined"
      >
        {left.text}
      </Button>
      <Button
        disabled={right.isDisabled}
        variant="outlined" 
        color="primary"
        onClick={right.function}
      >
        {right.text}
      </Button>
    </Box>
  )
}
