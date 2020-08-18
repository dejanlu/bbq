import React from "react";
import PropTypes from "prop-types";

import Button from "./Button";

const ButtonInline = ({ children, onClick }) => {
  return (
    <Button onClick={onClick} type="inline">
      {children}
    </Button>
  );
};

ButtonInline.propTypes = {
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default ButtonInline;
