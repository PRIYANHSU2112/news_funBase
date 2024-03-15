import "./App.css";
import Navbar from "./Components/Navbar";
import News from "./Components/News";
import LoadingBar from "react-top-loading-bar";

import React from "react";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from "react";

const App=()=> {
  // apikey=process.env.REACT_APP_API_KEY;
 const  apikey="52ca4009f45241b8866e51b0b43be9dd"

//  loding bar
    // state={
    //   progress:0
    // }
    // setProgress=(progress)=>{
    //   this.setState({progress:progress})
    // }
    const [progress, setProgress] = useState(0)
 
    return (
      <Router>
        <div>
          <LoadingBar
            color="#f11946"
            progress={progress}
          />
          <Navbar />
          <Routes>
            <Route
              path="/"
              element={
                <News setProgress={setProgress} apikey={apikey}
                  key="general"
                  pagesize={6}
                  country="in"
                  category="general"
                />
              }
            />
            <Route
              path="/sports"
              element={
                <News setProgress={setProgress} apikey={apikey}
                  key="sports"
                  pagesize={6}
                  country="in"
                  category="sports"
                />
              }
            />
            <Route
              path="/science"
              element={
                <News setProgress={setProgress} apikey={apikey}
                  key="science"
                  pagesize={6}
                  country="in"
                  category="science"
                />
              }
            />
            <Route
              path="/business"
              element={
                <News setProgress={setProgress} apikey={apikey}
                  key="business"
                  pagesize={6}
                  country="in"
                  category="business"
                />
              }
            />
            <Route
              path="/entertainment"
              element={
                <News setProgress={setProgress} apikey={apikey}
                  key="entertainment"
                  pagesize={6}
                  country="in"
                  category="entertainment"
                />
              }
            />
            <Route
              path="/health"
              element={
                <News setProgress={setProgress} apikey={apikey}
                  key="health"
                  pagesize={6}
                  country="in"
                  category="health"
                />
              }
            />
            <Route
              path="/technology"
              element={
                <News setProgress={setProgress} apikey={apikey}
                  key="technology"
                  pagesize={6}
                  country="in"
                  category="technology"
                />
              }
            />
          </Routes>
        </div>
      </Router>
    );
  
}
export default App;