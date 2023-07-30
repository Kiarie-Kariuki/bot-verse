import React, { useState, useEffect } from 'react';
import BotSpecs from './BotSpecs';

const BotCollection = ({ onEnlist }) => {
  const [bots, setBots] = useState([]);
  const [selectedBot , setSelectedBot] = useState(null)

  useEffect(() => {
    // Fetch bots data from the API
    fetch('https://bots-server.onrender.com/bots')
      .then((response) => response.json())
      .then((data) => setBots(data));
  }, []);

  const handleShowSpecs = (bot) => {
    setSelectedBot(bot);
  };

  const handleBackToList = () => {
    setSelectedBot(null);
  };

  if (selectedBot) {
    return (
      <BotSpecs bot={selectedBot} onEnlist={onEnlist}
        onBackToList={handleBackToList}  />
    );
  }

  return (
    <div className="bot-collection">
      <h2>Bot Collection</h2>
      <p>Click on the bot to view extensive details. Enlist a bot to add it to your army. You can further analyze and organize your army at in Your Bot Army section.</p>
      <div className="bot-container">
        {bots.map((bot) => (
            <div className="bot-card" key={bot.id}>
                <img src={bot.avatar_url} alt={bot.name}  onClick={() => handleShowSpecs(bot)}/>
                <p>Name: {bot.name}</p>
                <p>Class: {bot.bot_class}</p>
                <p>Health: {bot.health}</p>
                <p>Damage: {bot.damage}</p>
                <p>Armor: {bot.armor}</p>
                <button className="btn" onClick={() => onEnlist(bot)}>Enlist</button>
            </div>
          ))}
        </div>
    </div>
  );
};

export default BotCollection;
