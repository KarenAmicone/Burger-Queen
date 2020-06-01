import React, { useState, useEffect } from "react";
import LoginForm from "../login/login";
import Home from "../Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import firebase from "../../firebase";
import MenuSection from "../MenuSection";

export default function App() {
  const [firebaseInitialized, setFirebaseInitialized] = useState(false);

  useEffect(() => {
    firebase.isInitialized().then((val) => {
      setFirebaseInitialized(val);
    });
  });

  return firebaseInitialized !== null ? (
    <Router>
      <Switch>
        <Route exact path="/" component={LoginForm} />
        <Route path="/home" component={Home} />
        <Route path="/home/:bttn_id" component={MenuSection} />
        <Route path="/home/lunch/:bttn_id" component={MenuSection} />
      </Switch>
    </Router>
  ) : (
    <Router>
      <Switch>
        <Route path="/" component={LoginForm} />
      </Switch>
    </Router>
  );
}
