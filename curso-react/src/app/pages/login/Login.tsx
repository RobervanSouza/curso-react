import { useState } from "react";


export const Login = () => {
    const [email, setEmail] = useState('') // 6 useState valor inicial strig vazia. no input pega o valor do email. quando digita na input, sempre que atualiza começa sem valor a input ('')
    const [password, setPassword] = useState('')// 4 quando faz o setemail, atribui um novo valor para a input que começa sem valor nenhum
    const handleToOpen = () => {
        console.log(email)
    }
   
    return (
      <div>
        <form action="">
          <label htmlFor="">
            <span>Email</span>
            <input
              type="text"
              placeholder="Digite seu Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </label>

          <label htmlFor="">
            <span>Senha</span>
            <input type="text" placeholder="Digite sua Senha" value={password}
            onChange={(e) => setPassword(e.target.value)}/>
          </label>
          <button
            type="button"
            onClick={handleToOpen}
            >
            Entar
          </button>
        </form>
      </div> // esse buton (type="button") aguarda uma função para poder executar a função, a função submit recarrega a pagina não precisa da função
    );
}
 // (onChange={ e => setEmail(e.target.value)}/>) //8  o onchange pega o evento (e) o email que foi digitado na input, no evento (e) pega o email (set email) passa o e.target.value passa o valor do email que foi digitado manda para o STATE  que pega o valor e atualizado dentro da input


/*
import { useNavigate } from "react-router-dom";

export const Login = () => {
  const navigate = useNavigate();

  const handleclik = () => {
    navigate("/pagina-inicial");
  };
  return (
    <div>
      Login
      <button onClick={handleclik}>Home</button>
    </div>
  );
};
*/