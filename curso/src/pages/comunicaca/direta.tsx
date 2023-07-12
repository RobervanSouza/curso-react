import Avo from '@/components/comunicacao/direta/Avo'
import React from 'react'

const direta = () => {
  return (
    <div className='flex justify-center items-center h-screen flex-col'>
        <h1 className=' text-5xl mb-10' >Cominicação Direta</h1>
        <Avo nome='João' sobreNome='Souza'/>
    </div>
  )
}

export default direta