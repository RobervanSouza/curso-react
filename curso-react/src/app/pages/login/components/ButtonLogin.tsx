
import React from "react";

// interface IButtonLoginProps { // 1 quando colocar os dois potos, chama o react e passa <> esta chamando a propriedade pra usar dentro da função. esse tipagem esta dentro da pagina LOGIN, que tem o type e o evento onclick são os mesmos usados na outra input


interface IButtonLoginProps {
  
  onClick: () => void;
  type?: "button" | "submit" | "reset";
  children: React.ReactNode
}

//export const ButtonLogin: React.FC<IButtonLoginProps>=(props)=>{//1 se eu colocar props dentro eu tenho todas aas propriedades  da interface se eu passa dentro do () uma chaves{} então posso usar as propriedades sem usar o props isso e ()


export const ButtonLogin: React.FC<IButtonLoginProps>=({type, onClick,  children})=>{
    return(
        <button type={type} onClick={onClick}>
           {children}
        </button>
    )
}


// 3 esse children e para colocar o nome ENTRAR no outro componente pai, então chama o children
// export const ButtonLogin: React.FC<IButtonLoginProps>=({type, onClick,  children})=>{
//     return(
//         <button type={type} onClick={onClick}>
//             Entrar
//         </button>
//     )
// }