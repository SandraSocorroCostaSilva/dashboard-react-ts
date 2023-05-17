import React from "react";

import {NavLink} from 'react-router-dom';
import { useAuth } from "../../../contexts/AuthContext";

import styles from './Sidebar.module.css';

const Sidebar = () =>{
    
      const { logout } = useAuth();
  return (
        <div className={styles.sidebar}>
        <nav className={styles.navigation}>

        <ul>
          <li>
            <NavLink to="/" >
            <h3>Home</h3>
            </NavLink>
          </li>
        </ul>
            <h3>Curriculo</h3>
        <ul>
         <li>
           <NavLink to="/curriculo/informacoes/cadastro">
            Cadastrar Informações
           </NavLink>  
        </li> 
        <li>
           <NavLink to="/curriculo/experiencia/cadastro">
            Cadastrar Expêriencia 
           </NavLink>  
        </li> 
        <li>
           <NavLink to="/curriculo/experiencia/lista">
            Lista de Expêriencia 
           </NavLink>  
        </li> 
        </ul> 
            <h3>Portifólio</h3> 
        <ul>
        <li>
           <NavLink to="/portifolio/cadastro">
            Cadastrar Projeto
           </NavLink>  
        </li> 
         
        <li>
           <NavLink to="/portifolio/lista">
            Lista de Portifólio
          </NavLink>  
        </li>
        </ul>   

        <ul>
          <li>
            <NavLink onClick={logout} to="/login" >
            <h3>Logout</h3>
            </NavLink>
          </li>
        </ul>
        </nav>
        </div>     
    );
};
export default Sidebar;