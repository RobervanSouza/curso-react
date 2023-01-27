import { createContext } from "react";


interface IUsuarioContext {
  nomeUsuario: "Robervan ";
  
}
export  const UsuarioLogado = createContext<IUsuarioContext>({} as IUsuarioContext )

interface UsuarioLogadoProvider {
  children: React.ReactNode;
}

export const UsuarioLogadoProvider: React.FC<UsuarioLogadoProvider> = ({children}) => {


  return (
    <UsuarioLogado.Provider value={{ nomeUsuario: 'Robervan ',}}>
         {children}
        </UsuarioLogado.Provider>
    )
  }
  //9 nesse contexto e so para passar o nome de uauario do usuario em todas as paginas por exemplo foi passado na pagina de login e home
