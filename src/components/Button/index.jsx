import React from "react";
import PropTypes from "prop-types";

const Button = (children, onClick, type, className) => (
  <button className={className} onClick={onClick} type={type}>
    {children}
  </button>
);

Button.defaultProps = {
  children: "",
  className: "",
  type: "button",
  onClick: () => {},
};

Button.propTypes = {
  type: PropTypes.string,
  children: PropTypes.any,
  onClick: PropTypes.func,
  className: PropTypes.string,
};

export default Button;
