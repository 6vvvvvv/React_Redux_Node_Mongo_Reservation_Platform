import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../static/css/Login.css";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

const Login = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const emailhandler = (e) => {
    setEmail(e.target.value);
  };

  const passwordhandler = (e) => {
    setPassword(e.target.value);
  };

  const submit = (e) => {
    e.preventDefault();
    const { accountInfo } = props;
    const finduser = accountInfo.find(
      (item) =>
        item.email.toLowerCase() === email.toLowerCase() &&
        item.password.toLowerCase() === password.toLowerCase()
    );
    if (finduser) {
      localStorage.setItem("user", JSON.stringify(finduser));
      props.history.push("/myspace");
    } else {
      alert("Email/Password error or can not find this user")
    }
  };

  return (
    <div className="row login-form">
      <form className="col s12 login-inner-form">
        <i className="material-icons lock-open-icon ">lock_open</i>
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
            className="btn waves-effect waves-light login-btn"
            type="submit"
            name="action"
            onClick={submit}
          >
            Log in
            <i className="material-icons right">send</i>
          </button>
        </div>

        <p className="forgot-password">
          Forgot <Link to="/">password?</Link> or{" "}
          <Link to="/signup">Sign up</Link>
        </p>
      </form>
    </div>
  );
};

const mapStateToProps = (state) => ({
  accountInfo: state.accReducer.account,
});

export default withRouter(connect(mapStateToProps, null)(Login));
