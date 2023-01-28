import { useContext } from "react";
import { UsuarioLogado } from "../contents";


export const useUsuarioLogado = () => {
    const  contex = useContext(UsuarioLogado); 
    return contex;
}