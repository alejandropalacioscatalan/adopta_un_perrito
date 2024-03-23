import React from "react";
import "./CardPerrito.css";
import "../Tags/Tags";
import PropTypes from "prop-types";
import Tag from "../Tags/Tags";

const Perrito = ({ id, name, description, race, color, image }) => {
  return (
    <>
      <div className="card perrito-card">
        <img src={image} className="card-img-top image-card" alt="image" />
        <div className="card-body">
          <h5 className="card-title">{name}</h5>
          <p className="card-text">{description}</p>
          <Tag text={race} claseBadge={color} />
        </div>
      </div>
    </>
  );
};

Perrito.PropTypes = {
  id: PropTypes.number,
  name: PropTypes.string,
  description: PropTypes.string,
  race: PropTypes.string,
  color: PropTypes.string,
  image: PropTypes.string,
};

Perrito.defaultProps = {
  id: 1,
  name: "No hay Perrito",
  description: "No se ha encontrado un perrito",
  race: "Raza",
  color: "color",
  image: "url",
};

export default Perrito;
