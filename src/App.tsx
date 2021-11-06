import React, { useState } from "react";
import logo from "./logo.png";
import Home from "./Home";
import "./App.css";
import Result from "./Result";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  let [word, setWord] = useState<string>();
  return (
    <div className="App">
      <header>
        <img src={logo} alt="logo" />
      </header>
      <BrowserRouter>
        <Routes>
          <Route path="/result" element={<Result word={word}></Result>}></Route>
          <Route
            path="/"
            element={
              <Home checkWord={(wordFromHome) => setWord(wordFromHome)}></Home>
            }
          ></Route>
        </Routes>
      </BrowserRouter>
      <footer>
        Made with 💌 by Aldiii <a href="http://github.com/aldiii"></a>
      </footer>
    </div>
  );
}

export default App;
