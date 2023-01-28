import { createContext, useCallback, useEffect, useState } from "react";


interface IUsuarioContext {
  nomeUsuario: string;
  logout: () => void;
}
export  const UsuarioLogado = createContext<IUsuarioContext>({} as IUsuarioContext )

interface IUsuarioLogadoContext{
  children: React.ReactNode;
 
}

export const UsuarioLogadoProvider: React.FC<IUsuarioLogadoContext> = ({children}) => {
   
   const [nome, setNome] = useState('')

  useEffect(() => {
     setTimeout(() => {
       setNome("Robervan");
     }, 2000);
   
  }, );

   const handleLogout = useCallback(
    () => {
     
      
    }, [] );

  return (
    <UsuarioLogado.Provider value={{ nomeUsuario: nome, logout: handleLogout}}>
         {children}
        </UsuarioLogado.Provider>
    )
  }
  //9 nesse contexto e so para passar o nome de uauario do usuario em todas as paginas por exemplo foi passado na pagina de login e home

  //3 com esses hooks podemos adicionar o nome na pagina depois de 2 segundos
    //  const [nome, setNome] = useState(""); //4 aqui o nome começa vazio e depois muda o nome com o useefect
    //
    //  useEffect(() => {
    //    setTimeout(() => {
    //      setNome("robervan");
    //    }, 2000);
    //  });