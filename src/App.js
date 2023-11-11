import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Nav from './components/Nav';
import Image from './components/Image';
import { useEffect, useState } from 'react';
import axios from 'axios';

function App() {

  const [data, setData] = useState();

  const handleClick = () => {
    axios.get('http://localhost:3333/api/builds')
      .then(response => {
        setData(response.data);
      })
      .catch(error => {
        console.error(error);
      });
  }

  return (
    <div className="App">
      <Image/>
      This is the starting code for "Your first component" ungraded lab
      <Header firstName = {GetName()}/>
      <Nav/>
      <button onClick={handleClick}>Get Data</button>
      <ol>
      { data ? data.map(build => (
        <li key={build.id}>{build.name}</li>
      )) : <div>Loading</div>}
      </ol>
      <Footer/>
    </div>
  )
}

function GetName(){

  let firstName = "Bob";
  return firstName;
}

export default App;
