import React, { useEffect, useState } from "react";
import Axios from "axios";

import Card from "./components/cards/cards";

import "./App.css";
import { FaPlus } from "react-icons/fa";

export default function App() {
  const [values, setValues] = useState();
  const [listCard, setListCard] = useState([]);

  const handleRegister = () => {
    Axios.post("http://localhost:8000/produtos", {
      name: values.name,
      price: values.price,
      qtd: values.qtd,
    }).then((response) => {
      setListCard([
        ...listCard,
        {
          id: response.data[0].id,
          name: values.name,
          price: values.price,
        },
      ]);
    });
  };

  useEffect(() => {
    Axios.get("http://localhost:8000/produtos").then((response) => {
      setListCard(response.data);
    });
  }, []);

  const handleaddValues = (value) => {
    setValues((prevValues) => ({
      ...prevValues,
      [value.target.name]: value.target.value,
    }));
    console.log(values);
  };

  return (
    <main className="container">
      <div className="register-container">
        <h1 className="register-title">LISTA DE PRODUTOS</h1>

        <input
          type="text"
          name="name"
          placeholder="NOME:"
          className="register-input"
          onChange={handleaddValues}
        />
        <input
          type="text"
          placeholder="PREÇO:"
          name="price"
          className="register-input"
          onChange={handleaddValues}
        />
        <input
          type="text"
          placeholder="QUANTIDADE:"
          name="qtd"
          className="register-input"
          onChange={handleaddValues}
        />

        <button onClick={handleRegister} className="register-button">
          <FaPlus /> ADICIONAR
        </button>
      </div>
      <div className="card-option">
        <span>NOME</span>
        <span>PREÇO</span>
        <span>QUANTIDADE</span>
      </div>
      <div className="card-box">
        {listCard.map((val) => (
          <Card
            listCard={listCard}
            setListCard={setListCard}
            key={val.id}
            id={val.id}
            name={val.name}
            price={val.price}
            qtd={val.qtd}
          />
        ))}
      </div>
    </main>
  );
}
