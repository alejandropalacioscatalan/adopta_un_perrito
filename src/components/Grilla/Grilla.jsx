import React from "react";
import Perrito from "../Perrito/CardPerrito";
import "./Grilla.css";

const Perritos = ({ perritos }) => {
  return (
    <>
      <div className="perritos-grid d-flex justify-content-center gap-3">
        {perritos.length &&
          perritos.map((perrito) => (
            <Perrito
              key={perrito.id}
              id={perrito.id}
              name={perrito.name}
              description={perrito.description}
              race={perrito.race}
              color={perrito.color}
              image={perrito.image}
            />
          ))}
      </div>
    </>
  );
};

export default Perritos;
