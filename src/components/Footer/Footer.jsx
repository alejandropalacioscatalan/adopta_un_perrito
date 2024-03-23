import React from "react";
import PropTypes from "prop-types";
import "./Footer.css";

const Footer = ({ text }) => {
  return (
    <>
      <div className="footer">
        <p className="textoFooter">{text}</p>
      </div>
    </>
  );
};

Footer.PropTypes = {
  text: PropTypes.string,
};

Footer.defaultPropos = {
  text: "Footer por defecto",
};

export default Footer;
