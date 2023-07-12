import React from 'react'
import Filho from './Filho';


interface PaiProps {
  nome: string;
  sobreNome: string;
}



const Pai = (props: PaiProps) => {
  return (
    <div className=" flex gap-4  p-5 border border-white rounded-md bg-gray-600 flex-col">
      <div className=" items-center flex justify-center text-2xl gap-2">
        <span className=" font-black">Pai</span>
        <span>{props.nome}</span>
        <span>{props.sobreNome}</span>
      </div>
      <div className=" flex gap-5">
        <Filho nome='Alice' sobreNome={props.sobreNome} />
        <Filho nome='Beatriz' sobreNome={props.sobreNome} />
        
      </div>
    </div>
  );
}

export default Pai;