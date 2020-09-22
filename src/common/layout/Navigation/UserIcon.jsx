import React from "react";

import { RiUserAddLine } from "react-icons/ri";
import { Link } from "react-router-dom";

// icon for logged in user RiUserLine

const UserIcon = () => {
  return (
    <Link className="navigation__user" to="/login">
      <RiUserAddLine />
    </Link>
  );
};

export default UserIcon;
