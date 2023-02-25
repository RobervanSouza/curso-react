import React from 'react'
import { ButtonStyled } from './styled'

const Button = ({ Text, onClick, Type = "button"}) => {
  return (
    <ButtonStyled type={Type} onClick={onClick}>
      {Text}
    </ButtonStyled>
  )
}

export default Button
