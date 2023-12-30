import React, { useEffect } from "react";
import { connect } from "react-redux";
import { Link, useLocation } from "react-router-dom";
import { getUserAction, updateUserAction } from "../store/userActions";

const Home = (props) => {
  const { userStore, userActions } = props;
  const { userName } = userStore;

  const location = useLocation();
  const search = location.search;
  const params = new URLSearchParams(search);

  useEffect(() => {
    if (!params.get("name")) {
      userActions.getUserAction();
    }
  }, []);

  useEffect(() => {
    userActions.updateUserAction(
      {
        userid: 1,
      },
      {
        name: params.get("name"),
      }
    );
  }, []);

  return (
    <div>
      Home
      <Link to="/user">
        <button>Path User {userName}</button>
      </Link>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    userStore: state.userStore,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    userActions: {
      getUserAction: () => dispatch(getUserAction()),
      updateUserAction: (params, data) =>
        dispatch(updateUserAction(params, data)),
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
