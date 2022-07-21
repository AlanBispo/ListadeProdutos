import React from "react";
import "./card.css";
import { FaTrashAlt, FaPen } from "react-icons/fa";

import Axios from "axios";


export default function Card(props) {
  console.log("posp", props);

  const handleClick = (id) => {
    Axios.delete(`http://localhost:8000/produtos/${id}`).then((response) => {
      setListCard(response.data);
    }).then((response) => {
      setListCard(response.data);
    })
  };
  return (
    <>
      
    </>
  );
}