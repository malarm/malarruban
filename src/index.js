import React from "react";
import ReactDOM from "react-dom";
import Home from "./components/Home";
import NavBar from "./components/NavBar";
import "./App.css";

export default function App() {
  return (
    <>
      <NavBar />
      <Home />
    </>
  );
}
ReactDOM.render(<App />, document.getElementById("root"));
