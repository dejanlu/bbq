import React from "react";

import { RiUserAddLine, RiUserLine } from "react-icons/ri";
import { Link } from "react-router-dom";

const UserIcon = () => {
  return (
    <Link className="navigation__user" to="/login">
      <RiUserAddLine />
    </Link>
  );
};

export default UserIcon;
