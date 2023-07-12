import React from 'react'
import Pai from './Pai'

interface AvoProps{
  nome: string,
  sobreNome: string
}


const Avo = (props: AvoProps) => {
  return (
    <div className=' gap-5 flex p-5 text-black border bg-green-400  border-red-700 rounded-md flex-col'>
      <div className=' items-center flex justify-center text-2xl gap-2'>
      <span className=' font-black'  >Avô</span>
      <span>{props.nome}</span>
      <span>{props.sobreNome}</span>

      </div>
      <div className=' flex gap-5'>
      <Pai nome='Robervan' sobreNome={props.sobreNome} />
      <Pai nome='Auriene' sobreNome={props.sobreNome} />
      
      </div>
    </div>
  )
}

export default Avo
