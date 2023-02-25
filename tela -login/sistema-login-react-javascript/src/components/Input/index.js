import React from 'react'
import { InputStyled } from './styled'
const Input = ({ type, placeholder, value, onChange }) => {
  return (
    <div>
      <InputStyled
      value={value}
      onChange={onChange}
      type={type}
      placeholder={placeholder}
      />
    </div>
  )
}

export default Input
