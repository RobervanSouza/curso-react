import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { Login } from "../pages/dashboard";
import { Dashboard } from "../pages/dashboard/Dashboard";

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
