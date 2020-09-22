import React from "react";
import PropTypes from "prop-types";

import Button from "./Button";

const ButtonPrimary = ({ children, onClick }) => {
  return (
    <Button onClick={onClick === undefined ? null : onClick} type="primary">
      {children}
    </Button>
  );
};

ButtonPrimary.propTypes = {
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func,
};

export default ButtonPrimary;
