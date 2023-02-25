 import { createContext, useEffect, useState } from "react";

export const AuthContext = createContext({})

export const AuthProvider = ({children}) =>{
    
    const [user, setUser] = useState();
    useEffect(() => {// quando for carregado a aplicação
        const useToken = localStorage.getItem("user_token"); // verifica o usetoken e userStorage
        const userStorage = localStorage.getItem("user_db");
        if( userStorage && useToken){ // verifica se tem um token e um usuario
            const usuario = JSON.parse(userStorage)?.filter(user => user.email === JSON.parse(useToken).email);// verifica se o usuario tem o mesmo email do que o token
            if (usuario) setUser(usuario[0]);// se tiver então passa o usuario
        }
       
    }, []);

    const logar = (email, password) => { // recebe um email e um password
    const logarStorage = JSON.parse(localStorage.getItem("user_db"));// recebe os usuarios do banco
    const logarUser = logarStorage?.filter((user) => user.email ===  email) // verifica se ja existe um email cadastrado com o que esta cadastrado
    if(logarUser?.length){// se tiver usuario
        if(logarUser[0].email === email && logarUser[0].password === password) { // se tiver usuario verifica se o usuario tem o email e o password igual 
            const token = Math.random().toString(36).substring(2);// aqui e para gerar um token
            localStorage.setItem("user_db", JSON.stringify({email, token})) // seta no local storage o email e o token
            setUser({ email,  password}) // seta o user email e password
            return
        } else{
            return "Email ou senha incorretos"
        }
    }
        else{
            return "Usuario não cadastrado"
        }
         
    };

    const cadastrar = (email, password) =>{ // recebe o email e o password
        const cadastrarStorage = JSON.parse(localStorage.getItem("user_db"));// recupera o usuario  
        const cadastro = cadastrarStorage?.filter((user) => user.email === email); // verifica se tem o email que esta tentando cadastrar 
        if(cadastro?.length){// se ja tiver usuario cadastrado então retuna mensagen
            return "Usuario ja cadastrado com esse email"
        }
        
        let newUsuario;// se não tiver usuarios então 
        if(cadastrarStorage){ // se ja estiver usuario no banco so adicioa um novo usuario
            newUsuario = [...cadastrarStorage, {email, password}];

        } else {
            newUsuario = [{email, password}];// se for o primeiro usuario então concatena new user
        }
      localStorage.setItem("user_db", JSON.stringify(newUsuario));// set o novo usuario no user db
      return
    }
    
    const signout = () =>{ 
        setUser(null);
        localStorage.removeItem("user_token");
    }


    return <AuthContext.Provider 
        value={{user, signed: !!user, logar, signout, cadastrar }}// signed verifica se tem usuario
    >{children}</AuthContext.Provider>
}
