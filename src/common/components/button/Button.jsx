import React from "react";
import PropTypes from "prop-types";

const Button = ({ children, onClick, type, color = "" }) => {
  const handleClick =
    onClick === undefined ? null : (onClick = () => onClick());
  return (
    <button
      {...handleClick}
      className={`button button__${type} ${color && "button__" + color}`}
    >
      {children}
    </button>
  );
};

Button.propTypes = {
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func,
  type: PropTypes.string.isRequired,
};

export default Button;
