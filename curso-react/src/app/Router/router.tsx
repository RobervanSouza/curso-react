import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { Dashboard, Login } from "../pages/dashboard";

export const Router = () => {
  return (
    <BrowserRouter>
    <Routes>

      <Route path="/entrar" element={<Login/>}  />
      <Route path="/pagina-inicial" element={<Dashboard/>}  />
      <Route path="*" element={<Navigate to="/pagina-inicial"/>}  />
    </Routes>
    </BrowserRouter>
   
  );
};
