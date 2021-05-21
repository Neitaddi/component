import React from "react";
import ProfilePhoto from './Components/ProfilPhoto/ProfilePhoto';
import './App.css';
import Menu from './Components/Menu/Menu';
import FullName from "./Components/FullName/FullName";
import Adress from "./Components/Adress/Adress";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Menu/>
        <ProfilePhoto/>
        <div className='borderm'>
          <FullName/>
          <Adress/>
        </div>
      </header>
    </div>
  );
}

export default App;
