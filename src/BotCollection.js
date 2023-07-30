import React, { useState, useEffect } from 'react';

const BotCollection = ({ onEnlist }) => {
  const [bots, setBots] = useState([]);

  useEffect(() => {
    // Fetch bots data from the API
    fetch('https://bots-server.onrender.com/bots')
      .then((response) => response.json())
      .then((data) => setBots(data));
  }, []);

  return (
    <div className="bot-collection">
      <h2>Bot Collection</h2>
      <p>Enlist a bot to add it to your army. You can further analyze and organize your army at the end of this section.</p>
      <div className="bot-container">
        {bots.map((bot) => (
            <div className="bot-card" key={bot.id}>
                <img src={bot.avatar_url} alt={bot.name}/>
                <p>Name: {bot.name}</p>
                <p>Class: {bot.bot_class}</p>
                <p>Health: {bot.health}</p>
                <p>Damage: {bot.damage}</p>
                <p>Armor: {bot.armor}</p>
                <button onClick={() => onEnlist(bot)}>Enlist</button>
            </div>
          ))}
        </div>
    </div>
  );
};

export default BotCollection;
