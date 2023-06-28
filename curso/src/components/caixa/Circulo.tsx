import React from 'react'

const Circulo = (props: any) => {
    console.log(props)
  return (
    <div className=' h-64 w-64 bg-blue-600 rounded-full items-center justify-center flex text-black text-3xl' >
        {props.texto}
    </div>
  )
}

export default Circulo