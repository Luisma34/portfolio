import { useState } from "react";
import "./App.css";
import AppRouter from "./router/AppRouter";
import { BrowserRouter, Routes } from "react-router-dom";
import { Route } from "react-router-dom";
import Navbar from "./components/Navbar";

function App() {

  return (
    <>
      <Navbar/>
      <AppRouter />
    </>
  );
}

export default App;
