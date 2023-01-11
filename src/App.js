import './App.css';
import React from 'react';
import NavBar from './Components/NavBar';
import 'bootstrap/dist/css/bootstrap.min.css';
import Banner from './Components/Banner';
import Skills from './Components/Skills';
import Project from './Components/Project';
import Footer from './Components/Footer';


function App() {
  return (
    <div className="App">
      <NavBar/>
      <Banner/>
      <Skills/>
      <Project/>
      <Footer/>
    </div>
  );
}

export default App;
