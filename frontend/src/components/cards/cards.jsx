import React from "react";
import "./card.css";
import { FaTrashAlt } from "react-icons/fa";
import { FaPen } from "react-icons/fa";


export default function Card(props) {
  return (
    <>
      <form
        title={props.name}
        qtd={props.qtd}
        price={props.price}       
        id={props.id}
      />      
        <div className="card-container">
          <span className="card-name">{props.name}</span>
          <span className="card-price">R${props.price}</span>
          <span className="card-qtd">{props.qtd}</span>
          <span className="card-icon">
            <FaPen id="alterar"/>
            <FaTrashAlt id="lixeira"/>
          </span>
          
        </div> 
             
    </>
  );
}
