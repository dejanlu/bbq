import React from "react";

import { RiUserAddLine, RiUserLine } from "react-icons/ri";
import { Link } from "react-router-dom";

const UserIcon = ({ user }) => {
  return (
    <Link
      className="navigation__user"
      to={`${user ? "/user/" + user.uid : "/login"}`}
    >
      {user ? <RiUserLine /> : <RiUserAddLine />}
    </Link>
  );
};

export default UserIcon;
