import React from "react";
import Header from "./components/Header/Header";
import HomeMain from "./components/Home/HomeMain/HomeMain";
import "./styles/App.css"
import HomeCategory from "./components/Home/HomeCategory/HomeCategory";
import HomeMarketplace from "./components/Home/HomeMarketplace/HomeMarketplace";
import HomePrompts from "./components/Home/HomePrompts/HomePrompts";

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
        <HomeMarketplace/>
        <HomePrompts/>
    </div>
  );
}

export default App;
