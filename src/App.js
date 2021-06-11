import React, { Suspense, lazy } from "react";
import "./App.css";
import history from "./utils/history";

import { Router, Route, Switch } from "react-router-dom";
import { Register } from "./Containers/Register";
import { ForgotPassword } from "./Containers/ForgotPassword";

import Alerts from "./Alerts";
import Login from "./Containers/Login";
const SideBar = lazy(() => import("./Containers/SideBar"));

function App() {
  return (
    <>
      <Router history={history}>
        <div className="App">
          <Alerts />
          <Switch>
            <Suspense fallback={<div>Loading...</div>}>
              <Route exact path="/" component={Login} />
              <Route path="/register" component={Register} />
              <Route path="/forgot-password" component={ForgotPassword} />
              {/* <Route path="/dashboard" component={Dashboard} /> */}
              <Route path="/dashboard" component={SideBar} />
            </Suspense>
          </Switch>
        </div>
      </Router>
    </>
  );
}

export default App;
