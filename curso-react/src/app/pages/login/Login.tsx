

export const Login = () => {
    const handleToOpen = () => {
        
    }
   
    return (
      <div>
        <form action="">
          <label htmlFor="">
            <span>Email</span>
            <input type="text" placeholder="Digite seu Email" />
          </label>
          <label htmlFor="">
            <span>Senha</span>
            <input type="text" placeholder="Digite sua Senha" />
          </label>
          <button type="button" onClick={handleToOpen}>
            Entar
          </button>
        </form>
      </div> // esse buton (type="button") aguarda uma função para poder executar a função, a função submit recarrega a pagina não precisa da função
    );
}

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