import React from "react";
import NavBar from "./Components/NavBar/NavBar";
import Banner from "./Components/Banner/Banner";
import {originals,actions,comedy,horror,romance,document} from './urls'
import "./App.css";
import RowPost from "./Components/RowPost/RowPost";

function App() {
  return (
    <div className="App">
      <NavBar/>
      <Banner/>
      <RowPost url={originals} title='Netflix Originals'/>
      <RowPost url={actions} title='Action Movies' isSmall/>
      <RowPost url={comedy} title='Comedy Movies' isSmall/>
      <RowPost url={romance} title='Romance Movies' isSmall/>
      <RowPost url={horror} title='Horror Movies' isSmall/>
      <RowPost url={document} title='Documentaries' isSmall/>


    </div>
  );
}

export default App;
