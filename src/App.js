import React from "react";
import { Route } from "react-router-dom";
import "./App.css";
import HomePage from "./pages/homepage/homepage";

const LivingPage = () => (
  <div>
    <h1>LivingPage</h1>
  </div>
);

function App() {
  return (
    <div>
      <Route exact path="/" component={HomePage} />
      <Route exact path="/living" component={LivingPage} />
    </div>
  );
}

export default App;
