import React, { useEffect, useState } from "react";
import Axios from "axios";

import { FaTrashAlt, FaPen } from "react-icons/fa";
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
    })
      .then((response) => {
        setListCard(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };


  useEffect(() => {
    Axios.get("http://localhost:8000/produtos").then((response) => {
      setListCard(response.data);
    });
  }, []);

  const handleClick = (id) => {
    Axios.delete(`http://localhost:8000/produtos/${id}`).then((response) => {
      setListCard(response.data);
    });
  };

  const handleaddValues = (value) => {
    setValues((prevValues) => ({
      ...prevValues,
      [value.target.name]: value.target.value,
    }));
    
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

      {listCard.length > 0 ? (
        <div className="table">
          <table>
            <thead>
              <tr>
                <th>Nome</th>
                <th>Valor</th>
                <th>Quantidade</th>
              </tr>
            </thead>
            <tbody>
              {listCard.map((val) => (
                <tr key={val.id}>
                  <td>{val.name}</td>
                  <td>{val.price}</td>
                  <td>{val.qtd}</td>
                  <td>
                    <FaTrashAlt
                      onClick={(event) => handleClick(val.id)}
                      id="lixeira"
                    />
                    <FaPen id="alterar" />
                  </td>
                  
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : null}
    </main>
  );
}
