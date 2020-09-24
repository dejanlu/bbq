import React from "react";
import PropTypes from "prop-types";

import Button from "./Button";

const ButtonPrimary = ({ children, onClick, color = "" }) => {
  return (
    <Button
      onClick={onClick === undefined ? null : onClick}
      type="primary"
      color={color}
    >
      {children}
    </Button>
  );
};

ButtonPrimary.propTypes = {
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func,
};

export default ButtonPrimary;
