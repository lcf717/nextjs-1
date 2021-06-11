import React, { useState, useRef } from "react";
import { Link } from "react-router-dom";
import "../css/Authentication.css";
import logo from "../assets/logo-dark.png";
import { createRegistration } from "../Stores/Auth/actions";
import AppConfig from "../App.Config";
import { useDispatch } from "react-redux";
import ReCAPTCHA from "react-google-recaptcha";
const validateReg = (register) => {
  //Email errors
  const errors = {};

  if (!register.email) {
    errors.email = "Email cannot be empty";
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(register.email)) {
    errors.email = "Invalid email address";
  }

  //Password Errors
  if (!register.password || register.password.length < 6) {
    errors.password = "Passwords Length must be 6 characters";
  }

  if (!register.firstName) {
    errors.firstName = "FirstName cannot be empty";
  }
  if (!register.lastName) {
    errors.lastName = "LastName cannot be empty";
  }
  return errors;
};
export const Register = () => {
  const [errors, setErrors] = useState({});
  const recaptchaRef = useRef();
  const [register, setRegister] = useState(
    {
      email: "",
      firstName: "",
      lastName: "",
      password: "",
      recaptchaResponse: "",
    },
    validateReg
  );

  const handleChange = (e) => {
    setRegister({
      ...register,
      [e.target.name]: e.target.value,
    });
  };
  console.log("handle", register);
  const dispatch = useDispatch();
  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validateReg(register);
    const noErrors = Object.keys(validationErrors).length === 0;
    setErrors(validationErrors);
    if (noErrors) {
      console.log("Authenticated", register);
      dispatch(createRegistration(register));
    } else {
      console.log("errors try again", validationErrors);
    }
  };
  function onChange(value) {
    setRegister({
      ...register,
      recaptchaResponse: value,
    });
    console.log("Captcha value:", value);
  }

  return (
    <>
      <div className="app-content content bg-full-screen-image blank-page">
        <section
          className="row flexbox-container"
          style={{ marginBottom: "2rem", marginTop: "2rem" }}
        >
          <div className="col-12 d-flex align-items-center justify-content-center">
            <div className="col-lg-4 col-md-8  box-shadow-2 p-0">
              <div
                className="card border-grey border-lighten-3 px-1 py-1 m-0"
                style={{ height: "650px", overflowY: "scroll" }}
              >
                <div className="card-header border-0 pb-0">
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
                      <div className="row">
                        <fieldset className="col form-group position-relative has-icon-left">
                          <input
                            type="text"
                            className="form-control disable-outline"
                            id="first-name"
                            name="firstName"
                            placeholder="First Name"
                            autoComplete="off"
                            value={register.firstName}
                            onChange={handleChange}
                          />
                          {errors.firstName && (
                            <p className="text-danger">{errors.firstName}</p>
                          )}
                          <div className="form-control-position">
                            <i className="la la-user" />
                          </div>
                        </fieldset>
                        <fieldset className="col form-group position-relative has-icon-left">
                          <input
                            type="text"
                            className="form-control disable-outline"
                            id="last-name"
                            name="lastName"
                            placeholder="Last Name"
                            autoComplete="off"
                            value={register.lastName}
                            onChange={handleChange}
                          />
                          {errors.lastName && (
                            <p className="text-danger">{errors.lastName}</p>
                          )}
                          <div className="form-control-position">
                            <i className="la la-user" />
                          </div>
                        </fieldset>
                      </div>

                      <fieldset className="form-group position-relative has-icon-left">
                        <input
                          type="email"
                          className="form-control disable-outline"
                          id="email"
                          name="email"
                          placeholder="Email"
                          autoComplete="off"
                          value={register.email}
                          onChange={handleChange}
                        />
                        {errors.email && (
                          <p className="text-danger">{errors.email}</p>
                        )}
                        <div className="form-control-position">
                          <i className="la la-envelope" />
                        </div>
                      </fieldset>
                      <fieldset className="form-group position-relative has-icon-left">
                        <input
                          type="password"
                          className="form-control disable-outline"
                          id="password"
                          name="password"
                          placeholder="Password"
                          autoComplete="off"
                          value={register.password}
                          onChange={handleChange}
                        />
                        {errors.password && (
                          <p className="text-danger">{errors.password}</p>
                        )}
                        <div className="form-control-position">
                          <i className="la la-key" />
                        </div>
                      </fieldset>

                      <fieldset className="form-group position-relative has-icon-left">
                        <input
                          type="password"
                          className="form-control"
                          id="user-password"
                          placeholder="Repeat Password"
                        />
                        <div className="form-control-position">
                          <i className="la la-key" />
                        </div>
                      </fieldset>
                      <fieldset className="form-group position-relative">
                        <ReCAPTCHA
                          ref={recaptchaRef}
                          name="recaptchaResponse"
                          sitekey={AppConfig.GOOGLE.reCaptcha}
                          onChange={onChange}
                        />
                      </fieldset>

                      <fieldset className="form-group position-relative">
                        <div
                          className="icheckbox_square-blue"
                          style={{ display: "flex" }}
                        >
                          <input
                            type="checkbox"
                            id="remember-me"
                            style={{
                              display: "block",
                              width: "22px",
                              height: "22px",

                              border: 0,
                            }}
                          />
                          &nbsp;
                          <label> Accept Privacy Policy</label>
                        </div>
                      </fieldset>

                      <div className="form-group row">
                        <div className="col-sm-6 col-12 ">
                          <fieldset>
                            <div
                              className="icheckbox_square-blue"
                              style={{ display: "flex" }}
                            >
                              <input
                                type="checkbox"
                                id="remember-me"
                                style={{
                                  display: "block",
                                  width: "22px",
                                  height: "22px",

                                  border: 0,
                                }}
                              />
                              &nbsp;
                              <label> Remember Me</label>
                            </div>
                          </fieldset>
                        </div>
                        <div className="col-sm-6 col-12 ">
                          <Link
                            to="/forgot-password"
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
                        <i className="la la-user" /> Register
                      </button>
                    </form>
                  </div>
                  <div className="card-body">
                    <Link to="/" className="btn btn-outline-danger w-100">
                      <i className="ft-unlock" />
                      Login
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};
