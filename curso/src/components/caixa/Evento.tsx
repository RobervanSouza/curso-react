import React from 'react'

const Evento = () => {
    let contador = 0;

    function incrementar(){
      console.log(contador++, "contador" )
    }
  return (
    <button
      className={`h-64 w-64 bg-slate-500 items-center flex justify-center `}
      onClick={incrementar}>
      Evento
    </button>
  );
}

export default Evento