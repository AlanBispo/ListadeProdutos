import React from "react";
import "./card.css";

export default function Card(props) {
  return (
    <>     
        <form
          title={props.name}
          qtd={props.qtd}
          price={props.price}
          listCard={props.listCard}
          setListCard={props.setListCard}
          id={props.id}
        />
        <div className="card-container">
          <span className="card-name">{props.name}</span>
          <span className="card-price">R${props.price}</span>
          <span className="card-qtd">{props.qtd}</span>
        </div>  
    </>
  );
}
