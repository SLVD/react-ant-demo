import React from "react";
import { HashRouter, Route, Switch, Redirect } from "react-router-dom";
import App from "../App";
import Main from "../layouts/main";
import Blank from "../layouts/blank";
import Login from "../pages/login/login";
import Home from "../pages/home/home";
import Page404 from "../pages/404/404";

class RouterMap extends React.Component {
  render() {
    return (
      <HashRouter>
          <Switch>
            <Main>
              <Route
                path="/"
                render={() => (
                  <Switch>
                    <Route exact path="/" component={Home} />
                    <Route path="/home" component={Home} />
                    <Route path="/login" component={Login}></Route>
                    <Route component={Page404} />
                    <Redirect to="/home" />
                  </Switch>
                )}
              />
            </Main>
            {/* <Blank>
              <Route
                path={["/ll"]}
                render={() => (
                  <Switch>
                    <Route path="/login" component={Login}></Route>
                  </Switch>
                )}
              />
            </Blank> */}
          </Switch>
      </HashRouter>
    );
  }
}

export default RouterMap;
