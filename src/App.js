import React from 'react'
import './style.css'
import Header from "./components/Header/Header";
import FirstScreen from "./components/FirstScreen/FirstScreen";
import Info from "./components/Info/Info";

function App() {
  return (
    <div className="App">
      <Header/>
      <main>
          <FirstScreen/>
          <Info/>
      </main>
    </div>
  );
}


export default App;
