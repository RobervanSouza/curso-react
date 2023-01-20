import { Link } from "react-router-dom"



export const Dashboard = () => {
    return (
        <div> 

        <p>dashboard</p>
       <button>

        <Link to='/entrar' >Login</Link> 
       </button>
        </div> // 8 o link serve para navegar para outa pagina, pode usar tanto p link como o botão
    )
}