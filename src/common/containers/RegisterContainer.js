import { connect } from "react-redux";

import RegisterForm from "../components/form/RegisterForm";

import actions from "../../actions";

const mapDispatchToProps = {
  signup: actions.register,
};

export default connect(null, mapDispatchToProps)(RegisterForm);
