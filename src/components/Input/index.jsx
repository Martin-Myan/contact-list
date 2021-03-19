import React from "react";
import PropTypes from "prop-types";

const Input = ({ onClick, value, type, placeholder, onChange, className }) => (
  <input
    type={type}
    value={value}
    onClick={onClick}
    onChange={onChange}
    className={className}
    placeholder={placeholder}
  />
);

Input.defaultProps = {
  type: "",
  value: "",
  className: "",
  placeholder: "",
  onClick: () => {},
  onChange: () => {},
};

Input.propTypes = {
  type: PropTypes.string,
  onClick: PropTypes.func,
  value: PropTypes.string,
  onChange: PropTypes.func,
  className: PropTypes.string,
  placeholder: PropTypes.string,
};

export default Input;
