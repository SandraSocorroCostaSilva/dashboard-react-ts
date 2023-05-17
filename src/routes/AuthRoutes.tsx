import React from "react";

import { Navigate, Route,Routes } from 'react-router-dom';

import Home from '../pages/home';
import CadastrarInformacoes from '../pages/curriculo/CadastrarInformacoes';
import CadastrarExperiencia from '../pages/curriculo/CadastrarExperiencia';
import Listaportifolio from '../pages/portifolio/ListaPortifolio';
import ListaExperiencia from '../pages/curriculo/ListaExperiencia';
import CadastrarPortifolio from '../pages/portifolio/CadastrarPortifolio';

import Layout from "../components/layout/Layout";
import { useAuth } from "../contexts/AuthContext"



const AppRoutes: React.FC = () => {
    const { authenticated, isLoading} = useAuth();
    
     if(isLoading) {
         return <p>Carregando...</p>
     }
     
     if (!authenticated) {
         return <Navigate to="/login"/>;
    
      
       }
      return (
    <Layout> 
          <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/curriculo/informacoes/cadastro" element={<CadastrarInformacoes />} />
          <Route path="/curriculo/experiencia/cadastro" element={<CadastrarExperiencia />} />
          <Route path="/curriculo/experiencia/lista" element={<ListaExperiencia />} />
          <Route path="/portifolio/cadastro" element={<CadastrarPortifolio />} />
          <Route path="/portifolio/lista" element={<Listaportifolio />} />    
          </Routes>
    </Layout>
 )

};


export default AppRoutes;