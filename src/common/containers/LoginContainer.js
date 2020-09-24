import { connect } from "react-redux";

import LoginForm from "../components/form/LoginForm";

import actions from "../../actions";

const mapDispatchToProps = {
  login: actions.login,
};

export default connect(null, mapDispatchToProps)(LoginForm);
