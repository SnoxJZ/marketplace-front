import React from "react";
import Header from "./components/Header/Header";
import HomeMain from "./components/Home/HomeMain/HomeMain";
import "./styles/App.css"
import HomeCategory from "./components/Home/HomeCategory/HomeCategory";

function App() {
  return (
    <div className="App">
        <div className="home__main-content">
            <div style={{margin: "24px 42px 32px 0"}}>
                <Header/>
            </div>
            <HomeMain/>
        </div>
        <HomeCategory/>
    </div>
  );
}

export default App;
