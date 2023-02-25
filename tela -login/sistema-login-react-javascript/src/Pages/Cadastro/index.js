import React, {useState} from 'react'
import * as S from './styled'
import Input from '../../components/Input'
import Button from '../../components/Button'
import { Link, useNavigate } from 'react-router-dom'
import useAuth from '../../hooks/useAuth'


function Cadastro() {
  const [ email, setEmail ] = useState("");
  const [ emailConfirm, setEmailConfirm ] = useState("");
  const [ password, setPassword ] = useState("");
  const [ error, setError ] = useState("");

  const navigate = useNavigate();
  const {cadastrar}= useAuth();

  const handleCadastrar = () => {
    if(!email | !emailConfirm | !password) {// verifica se os campos tem informação
      setError("Prencha todos os campos")
      return;
    } else if(email !== emailConfirm) {
      setError("Os emails não são iguais")
      return
    }
    const resposta = cadastrar(email, password); // se tiver correto vai logar
    if(resposta){
      setError(resposta)
    }
    alert("Usuario cadastrado com sucesso!")
    navigate("/")
  }
  

  return (
    <S.Container>
      <S.Label>Faça seu Cadastro</S.Label>
      <S.Content>
        <Input
        type="email"
        placeholder="Digite seu Email"
        value={email}
        onChange={(e)=> [setEmail(e.target.value), setError('')]}
        />
        <Input
        type="email"
        placeholder="Confirme seu Email"
        value={emailConfirm}
        onChange={(e)=> [setEmailConfirm(e.target.value), setError('')]}
        />
        <Input
        type="password"
        placeholder="Digite sua Senha"
        value={password}
        onChange={(e)=> [setPassword(e.target.value), setError('')]}
        />
        <S.labelError>{error}</S.labelError>
        <Button Text="inscreva-se"  onClick={handleCadastrar}/>
        <S.LabelCasatrar>
          Já tem conta?
          <S.Strong>
            <Link to="/">&nbsp; Entrar </Link>
          </S.Strong>
        </S.LabelCasatrar>
      </S.Content>
    </S.Container>
  )
}

export default Cadastro