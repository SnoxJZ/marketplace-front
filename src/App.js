import React from "react";
import Header from "./components/Header/Header";
import HomeMain from "./components/Home/HomeMain/HomeMain";
import "./styles/App.css"

function App() {
  return (
    <div className="App">
        <div className="home__main-content">
            <Header/>
            <HomeMain/>
        </div>
    </div>
  );
}

export default App;
