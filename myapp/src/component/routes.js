import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Page1 from './page1'
import Page2 from './page2'
import Page3 from './page3'
import Menu from './navbar'
export default function RApp() {
  return (
    <Router>
      <div>
          <Menu></Menu>
        {/* <nav>
          <ul>
            <li>
              <Link to="/"> registers</Link>
            </li>
            <li>
              <Link to="/page2">show detail</Link>
            </li>
            <li>
              <Link to="/page3">show all users</Link>
            </li>
          </ul>
        </nav> */}

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/page2">
            <Page2 />
          </Route>
          <Route path="/page3">
            <Page3 />
          </Route>
          <Route path="/">
            <Page1 />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}