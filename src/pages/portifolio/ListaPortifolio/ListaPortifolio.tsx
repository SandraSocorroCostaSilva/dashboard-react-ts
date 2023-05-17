import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import styles from "./ListaPortifolio.module.css"
import {Portifolio, getPortifolio, deletePortifolio } from "../../../services/portifolioService"

const ListaPortifolio: React.FC = () => {

   const navigate = useNavigate();

   const [portifolio, setPortifolio] = useState<Portifolio[]>([])

   const fetchPortifolio = async () => {
       try {
           const portifolio = await getPortifolio();
           setPortifolio(portifolio);
       } catch (error) {
           console.error("Erro ao buscar portifólio:", error)
       }
       };

       useEffect(() => {
           fetchPortifolio();            
       }, []);

       const hundleEdit = async (portifolio: Portifolio) => {
           navigate("/portifolio/cadastro", { state: portifolio });
       };
       
   
       const hundleDelete = async (id: number) => {
           try {
               await deletePortifolio(id);
               fetchPortifolio();
               alert("Portifólio excluído com sucesso!");
        } catch (error) {
               console.error("Erro ao excluir portifólio:", error)
               alert("Ocorreu um erro ao excluir portifólio")
           }            
       };  

       
              
    return (
 <table className={styles.table}>
        <thead>
           <tr>
              <th>Titulo</th>
              <th>Imagem</th>
              <th>Link</th>
              <th>Ações</th>
           </tr>
        </thead>
        <tbody>
          {portifolio.map((itemPortifolio, index) => (
                <tr key={index}>
                     <td>{itemPortifolio.title}</td>
                     <td><img src={itemPortifolio.image} alt={itemPortifolio.title} className={styles.image}/></td>
                     <td><a href={itemPortifolio.link} target="_blank" rel="noreferrer">{itemPortifolio.link}</a></td>
                     <td>
                        <button onClick={() => hundleEdit(itemPortifolio)}>Editar</button>
                        <button onClick={() => hundleDelete(itemPortifolio.id)}>Excluir</button>
                     </td>
                </tr>
          ))}
        </tbody>
 </table>        
  );
};

export default ListaPortifolio;