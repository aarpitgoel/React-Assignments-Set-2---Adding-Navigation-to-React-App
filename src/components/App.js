import React, { Component } from "react";
import "../styles/App.css";
import { Link, Route, Switch } from "react-router-dom";
import LocationDisplayComponent from "./LocationDisplayComponent";

function About() {
  return <div>You are on the about page.</div>;
}
function Home() {
  return <div>You are home.</div>;
}

function Invalid() {
  return <div>No match</div>;
}

class App extends Component {
  render() {
    return (
      <>
        <div id="main">
          {/* Do not remove the main div */}
         
          <Switch>
            <Route path="/about" component={About} />
            <Route path="/" exact component={Home} />
            <Route path="/" component={Invalid} />
          </Switch>
          <LocationDisplayComponent />
        </div>
      </>
    );
  }
}

export default App;
export const LocationDisplay = LocationDisplayComponent;
