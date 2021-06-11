import React, { useState } from "react";
import useForm from "./CustomHook";

import { Link } from "react-router-dom";
import "../css/Authentication.css";
import logo from "../assets/logo-dark.png";
import { createLogin } from "../Stores/Auth/actions";
import { useDispatch } from "react-redux";
const validate = (inputs) => {
  //Email errors
  const errors = {};

  if (!inputs.username) {
    errors.username = "UserName cannot be empty";
  } else if (
    !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(inputs.username)
  ) {
    errors.username = "Invalid email address";
  }

  //Password Errors
  if (!inputs.password || inputs.password.length < 6) {
    errors.password = "Passwords Length must be 6 characters";
  }

  return errors;
};
const Login = () => {
  const [errors, setErrors] = useState({});
  const { inputs, handleInputChange } = useForm(
    { username: "", password: "" },
    validate
  );

  const dispatch = useDispatch();
  const handleSubmit = (event) => {
    event.preventDefault();
    const validationErrors = validate(inputs);
    const noErrors = Object.keys(validationErrors).length === 0;
    setErrors(validationErrors);
    if (noErrors) {
      console.log("Authenticated", inputs);
      dispatch(createLogin(inputs));
    } else {
      console.log("errors try again", validationErrors);
    }
  };

  return (
    <div className="app-content content bg-full-screen-image blank-page">
      <div className="content-overlay" />
      <div className="content-wrapper">
        <div className="content-body">
          <section className="row flexbox-container">
            <div className="col-12 d-flex align-items-center justify-content-center">
              <div className="col-lg-4 col-md-8 col-10 box-shadow-2 p-0">
                <div className="card border-grey border-lighten-3 px-1 py-1 m-0">
                  <div className="card-header border-0">
                    <div className="card-title text-center">
                      <img src={logo} alt="branding logo" />
                    </div>
                    <h6 className="card-subtitle line-on-side text-muted text-center font-small-3 pt-2">
                      <span>Easily Using</span>
                    </h6>
                  </div>
                  <div className="card-content">
                    <div className="card-body">
                      <form className="form-horizontal" onSubmit={handleSubmit}>
                        <fieldset className="form-group position-relative has-icon-left">
                          <input
                            type="email"
                            className="form-control disable-outline"
                            id="username"
                            name="username"
                            placeholder="UserName or email"
                            onChange={handleInputChange}
                            value={inputs.username}
                            autoComplete="off"
                          />
                          {errors.username && (
                            <p className="text-danger">{errors.username}</p>
                          )}
                          <div className="form-control-position">
                            <i className="la la-user" />
                          </div>
                        </fieldset>
                        <fieldset className="form-group position-relative has-icon-left">
                          <input
                            type="password"
                            className="form-control disable-outline"
                            id="password"
                            placeholder="Password"
                            name="password"
                            onChange={handleInputChange}
                            value={inputs.password}
                            autoComplete="off"
                          />
                          {errors.password && (
                            <p className="text-danger">{errors.password}</p>
                          )}

                          <div className="form-control-position">
                            <i className="la la-key" />
                          </div>
                        </fieldset>
                        <div className="form-group row">
                          <div className="col-sm-6 col-12 ">
                            <fieldset>
                              <label>
                                <input
                                  type="checkbox"
                                  id="remember-me"
                                  className="chk-remember float-start"
                                  style={{
                                    width: "22px",
                                    height: "22px",
                                  }}
                                />
                              </label>
                              &nbsp;
                              <span className>Remember Me</span>
                            </fieldset>
                          </div>

                          <div className="col-sm-6 col-12 ">
                            <Link
                              to="forgot-password"
                              className="card-link float-end"
                            >
                              Forgot Password?
                            </Link>
                          </div>
                        </div>
                        <button
                          type="submit"
                          className="btn btn-outline-info w-100"
                        >
                          <i className="ft-unlock" /> Login
                        </button>
                      </form>
                    </div>
                    <p className="card-subtitle line-on-side text-muted text-center font-small-3 mx-2 my-1">
                      <span>New to Modern ?</span>
                    </p>
                    <div className="card-body">
                      <Link
                        to="/register"
                        className="btn btn-outline-danger w-100"
                      >
                        <i className="la la-user" />
                        Register
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Login;
