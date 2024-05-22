import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Home from './screens/Home'
import Contact from './screens/Contact'
import ProductionService from './screens/ProductionService'
import DCMA from './screens/DCMA'
import PrivacyPolicy from './screens/PrivacyPolicy'
import TermOfUse from './screens/TermOfUse'
import Solutions from './screens/Solutions'

import "bootstrap/dist/css/bootstrap.min.css";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useHistory
} from "react-router-dom";


function App() {
  let history = useHistory();

  return (
    <div className="App">
        <Router history={history}  >
          <Switch>
          <Route  path="/" exact component={Home}/>
          <Route path="/contact" component={Contact}/>
          <Route path="/production-service" component={ProductionService}/>
          <Route path="/dcma" component={DCMA}/>
          <Route path="/privacy-policy" component={PrivacyPolicy}/>
          <Route path="/term-of-use" component={TermOfUse}/>
          <Route path="/solutions" component={Solutions}/>
          
          
        </Switch>
        </Router>

    </div>

  );
}

export default App;
