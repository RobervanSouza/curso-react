import React from 'react'

interface CirculoProps{
  texto: string;
  quadrandular?: boolean;
}
 
const Circulo = (props:CirculoProps) => {
    console.log(props)
  return (
    <div className={` h-64 w-64 bg-blue-600 rounded-full items-center justify-center flex text-black text-3xl
    ${props.quadrandular ? 'rounded-3xl' : 'rounded-full'}
 ` } >
        {props.texto}
    </div>
  )
}

export default Circulo