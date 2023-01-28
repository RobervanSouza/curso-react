import {  useRef } from "react";
import { Link } from "react-router-dom";
import { useUsuarioLogado } from "../../shared/hooks";

export const Dashboard1 = () => {
  const contref = useRef({ conuter: 0 });

  //const {nomeUsuario}= useContext(UsuarioLogado);// 6 e uma otimização do react
  const { nomeUsuario,logout } = useUsuarioLogado();
 

  return (
    <div>
      <p>dashboard</p>
      <p>{nomeUsuario}</p>
      <p>Contador : {contref.current.conuter}</p>
      <button onClick={() => contref.current.conuter++}> Somar</button>
      <button onClick={() => console.log(contref.current.conuter++)}> Somar </button>
      <button onClick={logout}>Logout </button>

      <button>
        <Link to="/entrar">Login</Link>
      </button>
    </div> // 8 o link serve para navegar para outa pagina, pode usar tanto o link como o botão
  );
};
 //  const {nomeUsuario}= useUsuarioLogado() //6 esse usuario logado, vem do hooks e uma otimização do react rook


    // const contref = useRef({ conuter: 0 });// 6 o useRef tem a função de contar, mas não mostra na tela, so mostra no console

// const contref = useRef({ conuter: 0 });// 6 o useRef tem a função de contar, mas não mostra na tela, so mostra no console