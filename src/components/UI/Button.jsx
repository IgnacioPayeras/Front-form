import React from 'react'
import Button from '@mui/material/Button';

const CustomButton = ({ variant, color }) => {
  let buttonVariant;

  switch(variant) {
    case 'text':
      buttonVariant = 'text'
      break;
    case 'contained':
      buttonVariant = 'contained';
      break;
    case 'outlined':
      buttonVariant = 'outlined';
      break;
    default:
      buttonVariant = 'text';
  }

  return (
    <Button variant={buttonVariant} color={color}>Contained</Button>
  )
}

export default CustomButton