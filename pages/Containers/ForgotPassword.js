import React, { useState } from "react";
import logo from "../assets/logo-dark.png";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { createPassword } from "../Stores/Auth/actions";
export const ForgotPassword = () => {
  const [password, setPassword] = useState({ email: "" });

  const handleChange = (e) => {
    setPassword({
      ...password,
      [e.target.name]: e.target.value,
    });
  };
  console.log("handle", password);
  const dispatch = useDispatch();
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(createPassword(password));
    console.log("handle>>>", password);
  };
  return (
    <div
      className="app_forgot vertical-layout vertical-menu-modern 1-column   blank-page"
      data-open="click"
      data-menu="vertical-menu-modern"
      data-col="1-column"
    >
      <div className="app-content content">
        <div className="content-overlay" />
        <div className="content-wrapper">
          <div className="content-header row"></div>
          <div className="content-body">
            <section className="row flexbox-container">
              <div className="col-12 d-flex align-items-center justify-content-center">
                <div className="col-lg-4 col-md-8 col-10 box-shadow-2 p-0">
                  <div className="card border-grey border-lighten-3 px-2 py-2 m-0">
                    <div className="card-header border-0 pb-0">
                      <div className="card-title text-center">
                        <img src={logo} alt="branding logo" />
                      </div>
                      <h6 className="card-subtitle line-on-side text-muted text-center font-small-3 pt-2">
                        <span>We will send you a link to reset password.</span>
                      </h6>
                    </div>
                    <div className="card-content">
                      <div className="card-body">
                        <form
                          className="form-horizontal"
                          onSubmit={handleSubmit}
                        >
                          <fieldset className="form-group position-relative has-icon-left">
                            <input
                              type="email"
                              className="form-control disable-outline"
                              id="email"
                              name="email"
                              placeholder="Your Email Address"
                              required
                              autoComplete="off"
                              value={password.email}
                              onChange={handleChange}
                            />
                            <div className="form-control-position">
                              <i className="la la-envelope" />
                            </div>
                          </fieldset>
                          <button
                            type="submit"
                            className="btn btn-outline-info btn-lg w-100"
                          >
                            <i className="ft-unlock" /> Recover Password
                          </button>
                        </form>
                      </div>
                    </div>
                    <div className="card-footer bg-white border-0">
                      <p className="float-sm-start text-center">
                        <Link to="/" className="card-link">
                          Login
                        </Link>
                      </p>
                      <p className="float-sm-end text-center">
                        New to Modern ?{" "}
                        <Link to="/register" className="card-link">
                          Create Account
                        </Link>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};
