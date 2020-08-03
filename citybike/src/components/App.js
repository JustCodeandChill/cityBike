import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import LandingPage from "../pages/LandingPage";
import SpecificStation from "./SpecificStation";
import "../../node_modules/materialize-css/dist/css/materialize.min.css";

class App extends React.Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <Switch>
            <Route path="/" exact component={LandingPage} />
            <Route path="/station/:id" component={SpecificStation} />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
