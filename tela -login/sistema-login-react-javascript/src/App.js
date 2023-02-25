import React from 'react'
import Login from './Pages/Login';
import RoutesApp from './routes';
import GlobaStyled from './styles/global'
import { AuthProvider } from './context/auth';
const App = () => {
 
  return (
    <AuthProvider>
    
    <RoutesApp/>
    <GlobaStyled/>
    </AuthProvider>
  )
}

export default App
