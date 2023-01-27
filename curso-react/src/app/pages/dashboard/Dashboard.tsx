import { useRef } from "react";
import { Link } from "react-router-dom";

export const Dashboard = () => {
  const contref = useRef({ conuter: 0 });// 6 o useRef tem a função de contar, mas não mostra na tela, so mostra no console

  return (
    <div>
      <p>dashboard</p>
      <p>Contador : {contref.current.conuter}</p>
      <button onClick={() => contref.current.conuter ++ } > Somar</button> 
      <button onClick={() =>  console.log(contref.current.conuter ++ )} > Somar</button>
      <button>
        <Link to="/entrar">Login</Link>
      </button>
    </div> // 8 o link serve para navegar para outa pagina, pode usar tanto p link como o botão
  );
};
