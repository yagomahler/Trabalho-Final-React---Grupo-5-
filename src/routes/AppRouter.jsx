import React from 'react'
import { Route, Routes } from 'react-router-dom';
import Main from "../screens/Main";
import Login from '../screens/Login';
//import Produto from '../screens/Produto';
import Categoria from '../screens/Categoria';
import Compras from '../screens/Compras';
import Sobre from '../screens/Sobre';
import Perfil from '../screens/Perfil';


const AppRouter = () => {

  const usuario = JSON.parse(localStorage.getItem("usuario"));

  return (
    <Routes>
      <Route path="/" element={<Main/>}></Route>
      <Route path="/login" element={<Login/>}></Route>
      <Route path="/perfil" element={usuario ? <Perfil /> : <Navigate to="/login" />}/>
      {/*<Route path="/produto/:id" element={<Produto/>}></Route>*/}
      <Route path="/categoria" element={<Categoria/>}></Route> {/*categoria/:id*/}
      <Route path="/compras" element={<Compras/>}></Route>
      <Route path="/sobre" element={<Sobre/>}></Route>
    </Routes>
  )
}

export default AppRouter;