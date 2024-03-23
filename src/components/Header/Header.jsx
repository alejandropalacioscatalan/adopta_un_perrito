import React from "react";
import PropTypes from "prop-types";

const Header = ({ text }) => {
  return (
    <>
      <h2 className="h2">{text}</h2>
      <br />
    </>
  );
};

Header.PropTypes = {
  text: PropTypes.string,
};

Header.defaultProps = {
  text: "Sin Título",
};

export default Header;
