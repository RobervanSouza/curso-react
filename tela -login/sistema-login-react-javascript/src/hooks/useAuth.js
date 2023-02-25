import { useContext} from 'react'
import { AuthContext } from '../context/auth'


export default function useAuth() {
  const context = useContext(AuthContext)// recebe o contexto e retona o context. no restante da aplicação so importa o usecontext
  return context
}
