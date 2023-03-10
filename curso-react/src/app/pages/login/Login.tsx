import { useCallback, useContext, useEffect, useMemo, useRef, useState } from "react";
import { UsuarioLogado } from "../../shared/contents";
import { ButtonLogin } from "./components/ButtonLogin";
import { InputLogin } from "./components/InputLogin";


export const Login = () => {
    const inputPasswords = useRef<HTMLInputElement>(null);
 
const { nomeUsuario } = useContext(UsuarioLogado); 

    const [email, setEmail] = useState('') 
    const [password, setPassword] = useState('')


  useEffect (() =>{

  },[])

const contaCaracteres = useMemo(() => { 
  return email.length;
}, [email.length]);

    const handleToOpen= useCallback(() => { 
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
          <p>{nomeUsuario}</p>
          <InputLogin
            label="Email"
            value={email}
            onChange={(newValue) => setEmail(newValue)}
            onPressEnter={() => inputPasswords.current?.focus()}
          />
          <InputLogin
            type="password"
            label="Senha"
            value={password}
            onChange={(newValue) => setPassword(newValue)}
            ref={inputPasswords}
          />
          <ButtonLogin type="button" onClick={handleToOpen}>
            Entar
          </ButtonLogin>
          <ButtonLogin type="button" onClick={handleToOpen}>
            Cadastrar
          </ButtonLogin>
      

          
        </form>
      </div> 
    );
}

          
            // 3 esse codigo de baixo e outra forma de fazer
          

          
            /*         
          <label >
            <span>Email</span>
            <input
              type="text"
              placeholder="Digite seu Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              onKeyDown={ (e) => e.key === 'Enter' ? inputPasswords.current?.focus(): undefined} // 1 quando o usuario digitar o email e teclar enter, ele vai para a input de senh. o (e ) e utilizado sempre como um evento
            />
          </label> */
          

          
            /* 
          <label htmlFor="">
            <span>Senha</span>
            <input
             type="text" 
             placeholder="Digite sua Senha"
             value={password}
             ref={inputPasswords}
            onChange={(e) => setPassword(e.target.value)}/> 
          </label>  */
          



  /*    
          <button type="button" onClick={handleToOpen}>
            Entar
          </button>  //1 essa e a forma antiga */

    
/* <ButtonLogin type="button" onClick={handleToOpen}>
Cadastrar // 3 forma antiga
</ButtonLogin> */



// 9 so consegue colocar o nome cadastrar porque dentra da input login esta usanda o CHILDREN 

     // const [email, setEmail] = useState('') // 1 useState valor inicial strig vazia. no input pega o valor do email. quando digita na input, sempre que atualiza come??a sem valor a input ('')
  //  const [password, setPassword] = useState('')// 1 quando faz o setemail, atribui um novo valor para a input que come??a sem valor nenhum



  //useEffect (() =>{ // 3 o useeffect atualiza somento uma vez, quando iniciar, por exemplo em chamada de APi, que aconte??e somente uma vez 

//  },[])//6 [] quando deiaxa vazio ele inicia vazio e n??o altera nada. Quando coloca por exemplo uma dependencia[email], toda vez que coloca um email, ele altera

//const contaCaracteres = useMemo(() => { // 6 pode iniciar vazio, mas tambem pode ter uma fun????o dentro para atualizar assim que tiver altera????o, assim como o use effect

//  const contaCaracteres = useMemo(() => { // 6 pode iniciar vazio, mas tambem pode ter uma fun????o dentro para atualizar assim que tiver altera????o, assim como o use effect

//const handleToOpen= useCallback(() => { // 3 quando inicia executa uma fun????o, geralmente usa dois parametros, e como se fosse o useeffect

// 4 esse buton (type="button") aguarda uma fun????o para poder executar a fun????o, a fun????o submit recarrega a pagina n??o precisa da fun????o




 // (onChange={ e => setEmail(e.target.value)}/>) //3  o onchange pega o evento (e) o email que foi digitado na input, no evento (e) pega o email (set email) passa o e.target.value passa o valor do email que foi digitado manda para o STATE  que pega o valor e atualizado dentro da input

//  const inputPasswords = useRef<HTMLInputElement>(null);// 4 quando iniciar o valor e nulo, depois que renderiza o html ele altera, e muito utilizado para pegar a referencia para alterar

 //const [email, setEmail] = useState('') // 3 useState valor inicial strig vazia. no input pega o valor do email. quando digita na input, sempre que atualiza come??a sem valor a input ('')
 //   const [password, setPassword] = useState('')// 4 quando faz o setemail, atribui um novo valor para a input que come??a sem valor nenhum



 // 1 <p>quantidade de caractere: {email.length} </p>; 

 //3 forma de navega????o
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