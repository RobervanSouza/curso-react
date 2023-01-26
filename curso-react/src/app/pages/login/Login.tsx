import { useCallback, useEffect, useMemo, useRef, useState } from "react";


export const Login = () => {
    const inputPasswords = useRef<HTMLInputElement>(null);// 3 quando iniciar o valor e nulo, depois que renderiza o html ele altera, e muito utilizado para pegar a referencia para alterar
 


    const [email, setEmail] = useState('') // 6 useState valor inicial strig vazia. no input pega o valor do email. quando digita na input, sempre que atualiza começa sem valor a input ('')
    const [password, setPassword] = useState('')// 6 quando faz o setemail, atribui um novo valor para a input que começa sem valor nenhum


  useEffect (() =>{ // 8 o useeffect atualiza somento uma vez, quando iniciar, por exemplo em chamada de APi, que aconçe somente uma vez 

  },[])//8 [] quando deiaxa vazio ele inicia vazio e não altera nada. Quando coloca por exemplo uma dependencia[email], toda vez que coloca um email, ele altera

const contaCaracteres = useMemo(() => { // 6 pode iniciar vazio, mas tambem pode ter uma função dentro para atualizar assim que tiver alteração, assim como o use effect
  return email.length;
}, [email.length]);

    const handleToOpen= useCallback(() => { // 8 quando inicia executa uma função, geralmente usa dois parametros, e como se fosse o useeffect
      /*
        if(inputPasswords.current !== null){
          inputPasswords.current.focus();
        } //6 poderia usar aqui dentro tambem
        */

        console.log(email)
        console.log(password)
    }, [email,password])
   
    return (
      <div>
        <form action="">
        <p>quantidade de caractere: {contaCaracteres} </p> 
          <label htmlFor="">
            <span>Email</span>
           
            <input
              type="text"
              placeholder="Digite seu Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              onKeyDown={ (e) => e.key === 'Enter' ? inputPasswords.current?.focus(): undefined} // 1 quando o usuario digitar o email e teclar enter, ele vai para a input de senh. o (e ) e utilizado sempre como um evento
            />
          </label>

          <label htmlFor="">
            <span>Senha</span>
            <input
             type="text" 
             placeholder="Digite sua Senha"
             value={password}
             ref={inputPasswords}
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

 // 1 <p>quantidade de caractere: {email.length} </p>; 

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