import React from 'react';
import './App.css';
import Navbar from "./Navbar"
import Footer from "./Footer"
import { BrowserRouter, Switch, Route } from "react-router-dom";
import HomePage from "./components/HomePage"
import CatalogPage from "./components/CatalogPage"
import { Helmet } from 'react-helmet'

function App() {
  return (
    <BrowserRouter>
    <div className="App">
    <Helmet>
        <title>Gary's Library Catalog</title>
    </Helmet>
      <Navbar/>
      <Switch>
        <Route exact path="/" component={HomePage}></Route>
        <Route path="/catalog" component={CatalogPage}></Route>
      </Switch>
      <Footer></Footer>
    </div>
    </BrowserRouter>
  );
}

export default App;