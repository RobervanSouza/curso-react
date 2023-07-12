import React from 'react'


interface FilhoProps {
  nome: string;
  sobreNome: string;
}


const Filho = (props: FilhoProps ) => {
  return (
    <div className=" flex justify-center items-center bg-neutral-100 rounded-md p-5">
      <div className=" items-center flex justify-center text-2xl gap-2">
        <span className=" font-black">Filho</span>
        <span>{props.nome}</span>
        <span>{props.sobreNome}</span>
      </div>
      
    </div>
  );
}

export default Filho