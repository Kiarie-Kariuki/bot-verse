import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';
import Navbar from './Navbar';
import BotCollection from './BotCollection';
import BotArmy from './BotArmy';
import Footer from './Footer';


function App() {

  const [army, setArmy] = useState([]);
  
  //function to handle enlisting a bot
  const handleEnlist = (bot) => {
     //check if the bot is already enlisted in the army
  const isAlreadyEnlisted = army.find((b) => b.id === bot.id);

  if (!isAlreadyEnlisted) {
    setArmy([...army, bot]);
  } else {
    alert('This bot is already enlisted!');
  }
  };

  //function to handle release once the release event is set off
  const handleRelease = (bot) => {
    //remove the bot by filtering out the bot using the id and update state
    setArmy(army.filter((b) => b.id !== bot.id));
  };

  //function to handle the discharge of a bot event
  const handleDischarge = (bot) => {
    // delete bot from server and state
    fetch(`https://bots-server.onrender.com/bots/${bot.id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error('Failed to delete the bot.');
        }
        return response.json();
      })
      .then((data) => {
        //update  state with the new list
        setArmy((prevArmy) => prevArmy.filter((b) => b.id !== bot.id));       
      })    
  };

  

  return (
    <div className="App">
        <Navbar />
        <BotCollection onEnlist={handleEnlist} />
        <BotArmy army={army} onRelease={handleRelease} onDischarge={handleDischarge} />
        <Footer />
    </div>
  );
}

export default App;
