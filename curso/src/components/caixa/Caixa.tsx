import React from 'react'

const Caixa1 = (props: any) => {
  return (
    <div
      className={`
     bg-red-500 m-4 flex-row justify-center items-center
     rounded-md p-3 w-64 h-64 text-3xl text-blue-600 flex overflow-hidden list-none
    `}>
      {props.children}</div>
  );
}

export default Caixa1