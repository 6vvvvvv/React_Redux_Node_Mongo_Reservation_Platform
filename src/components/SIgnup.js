import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../static/css/Signup.css";
import { connect } from "react-redux";
import { addUser } from "../components/redux/Account/action-creator/acc-actionCreators";
import { withRouter } from "react-router-dom";

const SIgnup = (props) => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const usernamehandler = (e) => {
    setUsername(e.target.value);
  };

  const emailhandler = (e) => {
    setEmail(e.target.value);
  };

  const passwordhandler = (e) => {
    setPassword(e.target.value);
  };

  const submit = (e) => {
    e.preventDefault();
    const { adduser, accountInfo } = props;

    if (accountInfo.length === 0) {
      adduser({
        username: username.toLowerCase(),
        email: email.toLowerCase(),
        password: password.toLowerCase(),
      });
      props.history.push("/login");
    } else {
      const finduser = accountInfo.find(
        (item) => item.email.toLowerCase() === email.toLowerCase()
      );

      if (finduser) {
        alert("User exists, please login");
      } else {
        adduser({
          username: username.toLowerCase(),
          email: email.toLowerCase(),
          password: password.toLowerCase(),
        });
        props.history.push("/login");
      }
    }
  };

  return (
    <div className="row signup-form">
      <form className="col s12 signup-inner-form">
        <i className="material-icons face ">face</i>
        <div className="row">
          <div className="input-field col s12">
            <input
              id="username"
              type="text"
              className="validate"
              name="username"
              value={username}
              onChange={usernamehandler}
            />
            <label for="email">Username</label>
          </div>
        </div>
        <div className="row">
          <div className="input-field col s12">
            <input
              id="email"
              type="email"
              className="validate"
              name="email"
              value={email}
              onChange={emailhandler}
            />
            <label for="email">Email</label>
          </div>
        </div>
        <div className="row">
          <div className="input-field col s12">
            <input
              id="password"
              type="password"
              className="validate"
              name="password"
              value={password}
              onChange={passwordhandler}
            />
            <label for="password">Password</label>
          </div>
        </div>
        <div className="row">
          <button
            className="btn waves-effect waves-light signup-btn"
            type="submit"
            name="action"
            onClick={submit}
          >
            Sign up
            <i className="material-icons right">send</i>
          </button>
        </div>

        <p className="already-signup">
          Already <Link to="/login">Sign up</Link>
        </p>
      </form>
    </div>
  );
};

const mapStateToProps = (state) => ({
  accountInfo: state.accReducer.account,
});

const mapDispatchToProps = (dispatch) => ({
  adduser: (payload) => dispatch(addUser(payload)),
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(SIgnup));
