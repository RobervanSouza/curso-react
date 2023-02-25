import React, {useState} from 'react'
import * as S from './styled'
import Input from '../../components/Input'
import Button from '../../components/Button'
import { Link, useNavigate } from 'react-router-dom'
import useAuth from '../../hooks/useAuth'
const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const {logar} = useAuth();
  const navigate = useNavigate();

  const handleLogin = () => {
    if(!email | !password) {
      setError("preencha todos os campos")
      return
    }
    
    const resposta = logar(email, password); // verifica s eo email e a senha estão corretos
    if(resposta){
      setError(resposta)
      return
    }
    navigate("/home")
  }

 



  return (
   <S.Container>
    <S.Label>Sistema de Login</S.Label>
    <S.Content>
      <Input 
      type="email"
      placeholder="Digite seu Email"
      value={email}
      onChange={(e) => [setEmail(e.target.value), setError('')]}
      />
      <Input 
      type="password"
      placeholder="Digite sua Senha"
      value={password}
      onChange={(e) => [setPassword(e.target.value), setError('')]}
      />
      <S.labelError>{error}</S.labelError>
      <Button Text="Entrar" onClick={handleLogin} />
      <S.LabelLogin>
        Não tem conta?
        <S.Strong>
          <Link to="/cadastrar"> &nbsp; Registre-se </Link>
        </S.Strong>
      </S.LabelLogin>
    </S.Content>
   </S.Container>
  )
}

export default Login
