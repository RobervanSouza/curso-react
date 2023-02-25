import { Fragment } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from '../Pages/Home';
import Login from '../Pages/Login';
import Cadastro from '../Pages/Cadastro';
import useAuth from '../hooks/useAuth';

const Private = ({ Item }) => {
    const {login} = useAuth()
    return login > 0 ? <Item /> : <Login />
}
const RoutesApp = () => {
    
    return (
        <BrowserRouter>
            <Fragment>
                <Routes>
                    <Route exact  path='/home' element={<Private Item={Home} />}  />
                    <Route path='/' element={<Login />}  />
                    <Route path='/cadastrar' element={<Cadastro />}  />
                    <Route exact path='*' element={<Login />}  />
                </Routes>
            </Fragment>
        </BrowserRouter>
    )
}

export default RoutesApp
