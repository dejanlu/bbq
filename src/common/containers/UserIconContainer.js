import { connect } from "react-redux";

import UserIcon from "../layout/Navigation/UserIcon";

const mapStateToProps = (state) => {
  return { user: state.auth.user };
};

export default connect(mapStateToProps)(UserIcon);
