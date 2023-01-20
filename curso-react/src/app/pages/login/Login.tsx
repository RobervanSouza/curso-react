import {  useNavigate } from "react-router-dom"

export const Login = () => {
    const navigate = useNavigate();

    const handleclik = () => {
         navigate('/pagina-inicial')
    }
    return (
     <div>
        Login
        <button onClick={handleclik} >Home</button>
     </div>           
    )
}