import React from "react";
import PropTypes from "prop-types";

import Button from "./Button";

const ButtonOutline = ({ children, onClick }) => {
  return (
    <Button onClick={onClick} type="outline">
      {children}
    </Button>
  );
};

ButtonOutline.propTypes = {
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default ButtonOutline;
