import React from 'react';
import './App.scss';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Main from "./components/main";
import Auth from "./components/auth";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={"/main"} element={<Main/>}/>
        <Route path={"/"} element={<Auth/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
