import React, { useState } from "react";
import { connect } from "react-redux";

const User = (props) => {
  const { userStore } = props;
  const { userName } = userStore;
  const [name, setName] = useState("askt")
  return <div>User : {userName}</div>;
};

const mapStateToProps = (state) => {
  return {
    userStore: state.userStore,
  };
};

export default connect(mapStateToProps)(User);
