"react-router-dom";
import {  Router} from "./Router/router";
import { UsuarioLogadoProvider } from "./shared/contents";

export const App = () => {
  // 8 mudando para função quando for importar tem que usar {}
  return (
   <UsuarioLogadoProvider>

     <Router />
   </UsuarioLogadoProvider>
    
  );
};
// <UsuarioLogadoProvider> //9 aqui so retorna o nome do usuario, pode ter varias funções
