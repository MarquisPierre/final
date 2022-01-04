import React from "react";
import { ToastContainer } from "react-toastify";
import AddPost from "./components/AddContact";
import EditContact from "./components/EditContact";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import "./styles.css";
import { HashRouter as Router } from 'react-router-dom'
import { Route } from "react-router-dom";

const App = () => {
  return (
    <div className="App">
      <ToastContainer />
      <Navbar />
      <Router basename={process.env.PUBLIC_URL}>
      <Route exact path="/" component={() => <Home />} />
      <Route exact path="/add" component={() => <AddPost />} />
      <Route exact path="/edit/:id" component={() => <EditContact />} />
      </Router>
    </div>
  );
};
export default App;
