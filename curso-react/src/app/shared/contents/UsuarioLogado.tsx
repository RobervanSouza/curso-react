import { createContext, useCallback } from "react";


interface IUsuarioContext {
  nomeUsuario: "Robervan ";
  logout: () => void;
}
export  const UsuarioLogado = createContext<IUsuarioContext>({} as IUsuarioContext )

interface IUsuarioLogadoContext{
  children: React.ReactNode;
 
}

export const UsuarioLogadoProvider: React.FC<IUsuarioLogadoContext> = ({children}) => {
   
   const handleLogout = useCallback(
    () => {
      console.log('logou')
      
    }, [] );

  return (
    <UsuarioLogado.Provider value={{ nomeUsuario: 'Robervan ', logout: handleLogout}}>
         {children}
        </UsuarioLogado.Provider>
    )
  }
  //9 nesse contexto e so para passar o nome de uauario do usuario em todas as paginas por exemplo foi passado na pagina de login e home
