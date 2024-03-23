// Hice esto con botones se ve mejor para interactuar

import React from "react";
import PropTypes from "prop-types";
import "./Tags.css";

const Tag = ({ text, claseBadge }) => {
  return (
    <>
      <button type="button" className={claseBadge}>
        {text}{" "}
      </button>
    </>
  );
};

Tag.PropTypes = {
  text: PropTypes.string,
  claseBadge: PropTypes.string,
};

Tag.defaultProps = {
  text: "Sin Título",
  claseBadge: "Sin clase",
};

export default Tag;
